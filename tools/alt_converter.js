/** 
 * @help
 * Create this dir tree:
 *
 * |-# your_directory
 *    |-# includes
 *    | |- a_samp.inc
 *    | |- a_player.inc
 *    | |- anything.inc
 *    |-# converted
 *    |- alt_converter.js
 *
 * cd to your_directory and run the node command: node alt_converter.js
 */
var fs = require('fs');

fs.readdir('includes', function(err, files)
{
	var 
		ignore = [
			'format', 
			'print', 
			'printf', 
			'asin', 
			'acos', 
			'atan', 
			'atan2', 
			'SetTimer', 
			'AllowAdminTeleport'
		],
		output = ''
	;
	for(var i in files) 
	{
		getData(fs.readFileSync('includes/' + files[i], 'utf8').split('\n'), ignore, function(data)
		{
			if(data.defines.length)
			{
				output += data.defines.join('\n');
				output += "\n\n";
			}
			if(['a_actor.inc', 'a_http.inc', 'a_npc.inc', 'a_objects.inc', 'a_players.inc', 'a_samp.inc', 'a_sampdb.inc', 'a_vehicles.inc'].indexOf(files[i]) == -1)
			{
				output += formatPublics(data.publics);
				output += "\n\n";
			}
			else fs.writeFile('converted/Publics.js', formatPublics(data.publics), 'utf8');		
			
			output += formatFunctions(data.natives) + '\n';
			fs.writeFile('converted/' + files[i] + '.js', output, 'utf8'), output = '';		
		});
		console.log('Converting: ' + files[i]);
	}
});

function getData(arr, ignoreArr, cb)
{
	var data = {
		natives: [],
		publics: [],
		defines: []
	};
	for(var i in arr) 
	{
		if(match = arr[i].match(/(native|forward) .*?(\w*)\((.*)\);/))
		{
			var 
				functionName = match[2],
				functionParams = match[3].match(/\s*(?:{[^}]+}|[^,])+/g),
				functionType = (match[1] == 'native') ? 'natives' : 'publics'
			;
			if((ignoreArr || []).indexOf(functionName) > -1) {
				continue;
			}
			data[functionType][functionName] = {};
			
			for(var ii in functionParams)
			{
				var 
					paramArr = functionParams[ii].split('='),
					param = paramArr.shift().trim(),
					paramData = {
						type: 'i',
						variadic: false,
						fullType: '',
						defaultValue: paramArr.join('=').trim() || ''
					}
				;
				
				if(match = paramData.defaultValue.match(/sizeof\s*\(?\s*(\w*)\s*\)?/) || /(^len|_len)/.test(param))
				{
					var isArray = false;
					if(typeof match[1] !== 'undefined') //Found sizeof value?
					{
						if(!/^(Create|Set)/.test(functionName)) { //Create* or Set* will MOST LIKELY NOT be a reference
							data.natives[functionName][match[1]].reference = true;
						}
						if((data.natives[functionName][match[1]].type == 'a' || data.natives[functionName][match[1]].type == 'v') && !data.natives[functionName][match[1]].reference)
						{
							isArray = true;
							paramData.defaultValue = (match[1] + '.length');
						}
					}
					else data.natives[functionName][Object.keys(data.natives[functionName]).pop()].reference = true; //Hmm, arg contains "len or *_len". /me sets parent arg to a reference
					!isArray && (paramData.defaultValue = '256'); //Set all sizeof/len to this value
				}
				if(match = paramData.defaultValue.match(/^{(.*)}/)) //Check if default value contains array
				{
					paramData.type = 'a';
					paramData.defaultValue = '[' + match[1].trim() + ']';
				}				
				if(param.charAt(0) == '&') //reference
				{
					paramData.reference = true;
					param = param.substr(1);
				}
				if(match = param.match(/(\w+)[\s:]+(.+)/)) //Remove tags (Float: das | tag das)
				{
					if(match[1] == 'Float') {
						paramData.type = 'f';
					}
					param = match[2];
				}
				if(match = param.match(/(\w+)\s*\[\s*\]$/)) //Check if it's an array (str[])
				{
					if(paramData.type == 'f') {
						paramData.type = 'v';
					}
					if(paramData.type != 'a' && paramData.type != 'v') {
						paramData.type = 's';
					}
					param = match[1];
				}
				if(/\.\.\./g.test(param)) //Check if its variadic. /not supported by CallNativeGDK
				{
					paramData.type = '';
					paramData.variadic = true;
				}
				if(!/^([A-Z].*[XYZ]$|([a-z]|sz)[A-Z])/.test(param)) { //Beauty touches! (Check if param dont match: fDuck, FromX)
					param = param.slice(0, 2).toLowerCase() + param.substr(2); //Set the two first letters to lower-case (x, y, z, rx, ry...)
				}
				param == 'function' && (param = 'func'); //"function" is a reserved keyword in javascript
				
				switch(paramData.type) 
				{
					case 'f':
					case 'i': 
						paramData.fullType = 'Number';
						break;
					case 's': 
						paramData.fullType = 'String';
						break;
					case 'a':
					case 'v':
						paramData.fullType = 'Array';
						break;
					default:
						if(paramData.variadic) {
							paramData.fullType = 'Mixed';
						}
						break;
				}
				data[functionType][functionName][param] = (functionType == 'natives') ? paramData : paramData.type;
			}
			continue;
		}
		if(match = arr[i].match(/#define\s+(\w+)[^\S\n]+(.*)/))
		{
			var value = match[2].trim().replace(/[()]/g, ''); //remove parenthesis
			value = value.replace(/({.*}\s*.|\w+:)/, '').trim(); //remove tags
			
			if(value) 
			{
				value = value.replace(/(\s*\/\/|$)/, ';$1'); //append ; before comments or at end of string
				data.defines.push('const ' + match[1] + ' = ' + value);
			}
		}
	}
	cb(data);
}

function formatPublics(data)
{
	var output = [];
	for(var functionName in data)
	{
		var
			params = [],
			args = [],
			types = ''
		;
		for(var param in data[functionName])
		{
			types += data[functionName][param];
			params.push("'" + param + "'");
		}
		args.push('"' + functionName + '"');
		args.push('"' + types + '"');
		args.push('"' + functionName.replace(/^On/, '') + '"');
		
		if(functionName == 'OnRconCommand' || functionName == 'OnPlayerCommandText') {
			args.push(true);
		}
		if(params.length) {
			args.push('[' + params.join(', ') + ']');
		}
		output.push('RegisterPublic(' + args.join(', ') + ');');
	}
	return output.join('\n');
}

function formatFunctions(data)
{
	var output = [];
	for(var functionName in data) 
	{
		var 
			types = '',
			params = [],
			optionals = [],
			returnArray = [],
			comments = [
				'/**',
				' * ' + functionName,
				' * @see https://wiki.sa-mp.com/wiki/' + functionName
			]
		;
		for(var param in data[functionName])
		{
			var 
				paramData = data[functionName][param],
				tmp_comment = ' * @param {' + paramData.fullType + '} '
			;
			if(paramData.reference)
			{
				returnArray.push({name: param, type: paramData.fullType});
				types += paramData.type.toUpperCase();
				continue;
			}
			types += paramData.type;
			!paramData.variadic && params.push(param);
			
			if(paramData.defaultValue.length)
			{
				tmp_comment += '[' + param + '=' + paramData.defaultValue + ']';
				optionals.push(param + " = typeof " + param + " === 'undefined' ? " + paramData.defaultValue + " : " + param + ";");
			}
			else tmp_comment += paramData.variadic ? '...' : param;
			comments.push(tmp_comment);
		}
		params = params.join(', ');
		
		var 
			CallNativeGDK = 'CallNativeGDK("' + functionName + '"' + (params ? (', "' + types + '", ' + params) : '') + ');\n',
			func = 'function ' + functionName + '(' + params + ')';
		;
		func += (optionals.length || returnArray.length > 1) ? '\n{\n' : ' {\n';
		
		for(var i = 0, len = optionals.length; i < len; i++) {
			func += '\t' + optionals[i] + '\n';
		}
		if(returnArray.length > 1)
		{
			var 
				objectReturn = [],
				tmp_comment = [];
			;
			optionals.length >= 2 && (func += '\n');
			func += '\tlet out = ' + CallNativeGDK;
			
			for(var i = 0, len = returnArray.length; i < len; i++)
			{
				objectReturn.push(returnArray[i].name + ': out[' + i + ']');
				tmp_comment.push(returnArray[i].name +': ' + returnArray[i].type);
			}
			comments.push(' * @return {' + tmp_comment.join(', ') + '}');
			func += '\treturn {' + objectReturn.join(', ') + '};\n';
		}
		else
		{
			if(returnArray.length) {
				comments.push(' * @return {' + returnArray[0].type + '} ' + returnArray[0].name);
			}
			else comments.push(' * @return {Number} retval');
			func += '\treturn ' + CallNativeGDK;
		}
		comments.push(' *\/');
		output.push(comments.join('\n') + '\n' + func + '}');
	}
	return output.join('\n\n');
}
