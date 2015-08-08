#ifdef WIN32
#pragma comment(lib, "winmm.lib")
#endif

#define NOMINMAX

#include "sdk.h"
#include "samp/Callbacks.h"

#include "SAMPJS.h"

#include <fstream>
#include <sstream>
#include <regex>
#include <iostream>
#include <string> 
#include <map>

#include "utils/Helpers.h"



#include <sampgdk/sampgdk.h>

#include "io/HTTP.h"


#define VERSION_MAJOR 0
#define VERSION_MINOR 1
#define VERSION_BUGFIX 9
#define VERSION_REVISION 6

typedef void(*logprintf_t)(char* format, ...);
logprintf_t logprintf;

extern void *pAMXFunctions;

std::vector<std::string> js_scripts;



void ReadConfig(){
	std::ifstream config("server.cfg");
	if (!config){
		std::cout << "Config File does not exist" << std::endl;
	}
	else {
		std::string line;
		while (std::getline(config, line)){
			std::vector<std::string> args = sjs::string::split(line);
			if (args.size() > 1){
				if (args[0] == "jsfiles"){
					for (unsigned int i = 1; i < args.size(); i++){
						js_scripts.push_back(args[i]);
					}
				}
				else if (args[0] == "jsflags"){
					
					if (args.size() > 1){
						std::string flags;
						for (unsigned int i = 1; i < args.size(); i++){
							flags += args[i] + " ";
						}
						sampjs::SAMPJS::v8flags += flags;
					}
				}
			}
		}
	}
}


PLUGIN_EXPORT unsigned int PLUGIN_CALL Supports(){
	return sampgdk::Supports() | SUPPORTS_VERSION | SUPPORTS_AMX_NATIVES | SUPPORTS_PROCESS_TICK;
}

PLUGIN_EXPORT bool PLUGIN_CALL Load(void **ppData){
	sampgdk::Load(ppData);
	
	pAMXFunctions = ppData[PLUGIN_DATA_AMX_EXPORTS];
	sjs::logger::printf = (logprintf_t)ppData[PLUGIN_DATA_LOGPRINTF];
	sjs::logger::log("%s samp.js %s", std::string(30, '-').c_str(),std::string(30, '-').c_str());
	sjs::logger::log("*** Loaded samp.js v%i.%i.%i.%i by !damo!spiderman ***", VERSION_MAJOR, VERSION_MINOR, VERSION_BUGFIX, VERSION_REVISION);
	sjs::logger::log("%s", std::string(69, '-').c_str());
	ReadConfig();
	
	string version = sampjs::HTTPJS::Get("http://damo.com.au/version");

	char cversion[20];
	sprintf(cversion, "v%i.%i.%i.%i", VERSION_MAJOR, VERSION_MINOR, VERSION_BUGFIX, VERSION_REVISION);

	if (version != string(cversion)){
		sjs::logger::log("*** Warning: Your version of samp.js is out of date. Latest version: %s ***", version.c_str());
	}
	else {
		sjs::logger::log("*** samp.js is up to date ***");
	}

	

	
	return true;
}



PLUGIN_EXPORT void PLUGIN_CALL Unload(){
	std::cout << std::endl;
	std::cout << std::string(30, '-') + " samp.js unloaded " + std::string(30, '-') << std::endl;
	std::cout << std::endl;

	sampjs::SAMPJS::Shutdown();
	sampgdk::Unload();
} 


#include "samp/Natives.h"

#include <chrono>
#include <thread>
PLUGIN_EXPORT int PLUGIN_CALL AmxLoad(AMX *amx){
	char t[256] = "";
	AMX_NATIVE native = sampgdk::FindNative("SHA256_PassHash");
	if (!native) sjs::logger::log("Could not find SHA256 Native");
	else {
		sampgdk::InvokeNative(native, "ssS[256]", "Test", "Test", &t);
		printf("SHA256: %s", t);
	}
	int res = 0;
	if ((res = amx_Register(amx, PluginNatives, -1))){
		printf("Failed to register samp.js natives.\n");
	}

	if (!sampjs::SAMPJS::amx){
		sampjs::SAMPJS::SetAMX(amx);

		sampjs::SAMPJS::Init();

		if (js_scripts.size() > 0){
			for (unsigned int i = 0; i < js_scripts.size(); i++){
				sampjs::SAMPJS::CreateScript(js_scripts[i]);
			}
			std::cout << std::endl;
			sampjs::SAMPJS::ScriptInit();
		}
		else {
			std::cout << "[samp.js] No JS Scripts configured. Add jsfiles to your server.cfg" << std::endl;
		}
	}
	/*int idx;
	if (!amx_FindPublic(amx, "SAMPJS_Init", &idx)){
		sampjs::SAMPJS::SetAMX(amx);
		
	}*/
	return 1;
}

 bool RconCommand(const char *cmd){

	std::vector<std::string> args = sjs::string::split(cmd);
	if (args[0] == "loadjs"){
		if (args.size() > 1){
			if (sampjs::SAMPJS::CreateScript(args[1])){
				auto script = sampjs::SAMPJS::GetScript(args[1]);
				if (script){
					script->Server()->FireEvent("ScriptInit");
				}
			}
		}
		return true;
	}
	else if (args[0] == "unloadjs"){
		if (args.size() > 1){
			sampjs::SAMPJS::RemoveScript(args[1]);
		}
		return true;
	}
	else if (args[0] == "reloadjs"){
		if (args.size() > 1){
			sampjs::SAMPJS::RemoveScript(args[1]);
			if (sampjs::SAMPJS::CreateScript(args[1])){
				auto script = sampjs::SAMPJS::GetScript(args[1]);
				if (script){
					script->Server()->FireEvent("ScriptInit");
				}
			}
		}
		return true;
	}

	else if (args[0] == "listjs"){
		sjs::logger::log("Loaded JS Scripts:");
		for (auto scriptv : sampjs::SAMPJS::scripts){
			sjs::logger::log("%s", scriptv.c_str());
		}
		return true;
	}
	return false;
}


 bool first = false;
PLUGIN_EXPORT bool PLUGIN_CALL OnPublicCall(AMX *amx, const char *name, cell *params, cell *retval){

	sampjs::SAMPJS::amx = amx;
	if (string(name) == "OnRconCommand"){
		cell* maddr = NULL;
		int len = 0;
		char* sval;
		if (amx_GetAddr(amx, params[1], &maddr) != AMX_ERR_NONE){
			sjs::logger::error("Can't get string address: %s", name);
			return 1;
		}

		amx_StrLen(maddr, &len);

		sval = new char[len + 1];
		if (amx_GetString(sval, maddr, 0, len + 1) != AMX_ERR_NONE){
			sjs::logger::error("Can't get string: %s", name);

			return 1;
		}
		if (RconCommand(sval)){
			*retval = true;
			return true;
		}
	} 
	int ret = sampjs::SAMPJS::PublicCall(name, params, retval); 
	return (ret > 0);
}


PLUGIN_EXPORT int PLUGIN_CALL AmxUnload(AMX *amx){
	/*for (auto it = sampjs::Server::_scripts.begin(); it != sampjs::Server::_scripts.end();){
		if (it->second->GetAMX() == amx){
			it->second->Shutdown();
			sampjs::Server::_scripts.erase(it++);
		}
		else {
			++it;
		}
	} 

	if (sampjs::SAMPJS::amx == amx){
	//	sampjs::SAMPJS::Shutdown();
	} */
	return AMX_ERR_NONE;
} 
PLUGIN_EXPORT void PLUGIN_CALL ProcessTick(){
	sampjs::SAMPJS::ProcessTick();
	sampgdk::ProcessTick();
}



