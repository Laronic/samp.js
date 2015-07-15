const SPECIAL_ACTION_NONE = 0;
const SPECIAL_ACTION_DUCK = 1;
const SPECIAL_ACTION_USEJETPACK = 2;
const SPECIAL_ACTION_ENTER_VEHICLE = 3;
const SPECIAL_ACTION_EXIT_VEHICLE = 4;
const SPECIAL_ACTION_DANCE1 = 5;
const SPECIAL_ACTION_DANCE2 = 6;
const SPECIAL_ACTION_DANCE3 = 7;
const SPECIAL_ACTION_DANCE4 = 8;
const SPECIAL_ACTION_HANDSUP = 10;
const SPECIAL_ACTION_USECELLPHONE = 11;
const SPECIAL_ACTION_SITTING = 12;
const SPECIAL_ACTION_STOPUSECELLPHONE = 13;
const SPECIAL_ACTION_DRINK_BEER = 20;
const SPECIAL_ACTION_SMOKE_CIGGY = 21;
const SPECIAL_ACTION_DRINK_WINE = 22;
const SPECIAL_ACTION_DRINK_SPRUNK = 23;
const SPECIAL_ACTION_CUFFED = 24;
const SPECIAL_ACTION_CARRY = 25;
const FIGHT_STYLE_NORMAL = 4;
const FIGHT_STYLE_BOXING = 5;
const FIGHT_STYLE_KUNGFU = 6;
const FIGHT_STYLE_KNEEHEAD = 7;
const FIGHT_STYLE_GRABKICK = 15;
const FIGHT_STYLE_ELBOW = 16;
const WEAPONSKILL_PISTOL = 0;
const WEAPONSKILL_PISTOL_SILENCED = 1;
const WEAPONSKILL_DESERT_EAGLE = 2;
const WEAPONSKILL_SHOTGUN = 3;
const WEAPONSKILL_SAWNOFF_SHOTGUN = 4;
const WEAPONSKILL_SPAS12_SHOTGUN = 5;
const WEAPONSKILL_MICRO_UZI = 6;
const WEAPONSKILL_MP5 = 7;
const WEAPONSKILL_AK47 = 8;
const WEAPONSKILL_M4 = 9;
const WEAPONSKILL_SNIPERRIFLE = 10;
const WEAPONSTATE_UNKNOWN = -1;
const WEAPONSTATE_NO_BULLETS = 0;
const WEAPONSTATE_LAST_BULLET = 1;
const WEAPONSTATE_MORE_BULLETS = 2;
const WEAPONSTATE_RELOADING = 3;
const MAX_PLAYER_ATTACHED_OBJECTS = 10 // This is the number of attached indexes available ie 10 = 0-9;
const PLAYER_VARTYPE_NONE = 0;
const PLAYER_VARTYPE_INT = 1;
const PLAYER_VARTYPE_STRING = 2;
const PLAYER_VARTYPE_FLOAT = 3;
const MAX_CHATBUBBLE_LENGTH = 144;
const MAPICON_LOCAL = 0 // displays in the player's local are;
const MAPICON_GLOBAL = 1 // displays always;
const MAPICON_LOCAL_CHECKPOINT = 2 // displays in the player's local area and has a checkpoint marker;
const MAPICON_GLOBAL_CHECKPOINT = 3 // displays always and has a checkpoint marker;
const CAMERA_CUT = 2;
const CAMERA_MOVE = 1;
const SPECTATE_MODE_NORMAL = 1;
const SPECTATE_MODE_FIXED = 2;
const SPECTATE_MODE_SIDE = 3;
const PLAYER_RECORDING_TYPE_NONE = 0;
const PLAYER_RECORDING_TYPE_DRIVER = 1;
const PLAYER_RECORDING_TYPE_ONFOOT = 2;
/**
 * SetSpawnInfo
 * @see https://wiki.sa-mp.com/wiki/SetSpawnInfo
 * @param {Number} playerid
 * @param {Number} team
 * @param {Number} skin
 * @param {Number} x
 * @param {Number} y
 * @param {Number} z
 * @param {Number} rotation
 * @param {Number} weapon1
 * @param {Number} weapon1_ammo
 * @param {Number} weapon2
 * @param {Number} weapon2_ammo
 * @param {Number} weapon3
 * @param {Number} weapon3_ammo
 * @return {Number} retval
 */
function SetSpawnInfo( playerid, team, skin, x, y, z, rotation, weapon1, weapon1_ammo, weapon2, weapon2_ammo, weapon3, weapon3_ammo ){
	var out = CallNativeGDK( "SetSpawnInfo", "iiiffffiiiiii", playerid, team, skin, x, y, z, rotation, weapon1, weapon1_ammo, weapon2, weapon2_ammo, weapon3, weapon3_ammo );
	return out;
}
/**
 * SpawnPlayer
 * @see https://wiki.sa-mp.com/wiki/SpawnPlayer
 * @param {Number} playerid
 * @return {Number} retval
 */
function SpawnPlayer( playerid ){
	var out = CallNativeGDK( "SpawnPlayer", "i", playerid );
	return out;
}
/**
 * SetPlayerPos
 * @see https://wiki.sa-mp.com/wiki/SetPlayerPos
 * @param {Number} playerid
 * @param {Number} x
 * @param {Number} y
 * @param {Number} z
 * @return {Number} retval
 */
function SetPlayerPos( playerid, x, y, z ){
	var out = CallNativeGDK( "SetPlayerPos", "ifff", playerid, x, y, z );
	return out;
}
/**
 * SetPlayerPosFindZ
 * @see https://wiki.sa-mp.com/wiki/SetPlayerPosFindZ
 * @param {Number} playerid
 * @param {Number} x
 * @param {Number} y
 * @param {Number} z
 * @return {Number} retval
 */
function SetPlayerPosFindZ( playerid, x, y, z ){
	var out = CallNativeGDK( "SetPlayerPosFindZ", "ifff", playerid, x, y, z );
	return out;
}
/**
 * GetPlayerPos
 * @see https://wiki.sa-mp.com/wiki/GetPlayerPos
 * @param {Number} playerid
 * @return {{ x: Number,  y: Number,  z: Number }}
 */
function GetPlayerPos( playerid ){
	var out = CallNativeGDK( "GetPlayerPos", "iFFF", playerid, [ "x", "y", "z" ] );
	return {x: out[0],y: out[1],z: out[2]};
}
/**
 * SetPlayerFacingAngle
 * @see https://wiki.sa-mp.com/wiki/SetPlayerFacingAngle
 * @param {Number} playerid
 * @param {Number} ang
 * @return {Number} retval
 */
function SetPlayerFacingAngle( playerid, ang ){
	var out = CallNativeGDK( "SetPlayerFacingAngle", "if", playerid, ang );
	return out;
}
/**
 * GetPlayerFacingAngle
 * @see https://wiki.sa-mp.com/wiki/GetPlayerFacingAngle
 * @param {Number} playerid
 * @return {Number} ang
 */
function GetPlayerFacingAngle( playerid ){
	var out = CallNativeGDK( "GetPlayerFacingAngle", "iF", playerid );
	return out;
}
/**
 * IsPlayerInRangeOfPoint
 * @see https://wiki.sa-mp.com/wiki/IsPlayerInRangeOfPoint
 * @param {Number} playerid
 * @param {Number} range
 * @param {Number} x
 * @param {Number} y
 * @param {Number} z
 * @return {Number} retval
 */
function IsPlayerInRangeOfPoint( playerid, range, x, y, z ){
	var out = CallNativeGDK( "IsPlayerInRangeOfPoint", "iffff", playerid, range, x, y, z );
	return out;
}
/**
 * GetPlayerDistanceFromPoint
 * @see https://wiki.sa-mp.com/wiki/GetPlayerDistanceFromPoint
 * @param {Number} playerid
 * @param {Number} X
 * @param {Number} Y
 * @param {Number} Z
 * @return {Number} retval
 */
function GetPlayerDistanceFromPoint( playerid, X, Y, Z ){
	var out = CallNativeGDK( "GetPlayerDistanceFromPoint", "ifff", playerid, X, Y, Z );
	return out;
}
/**
 * IsPlayerStreamedIn
 * @see https://wiki.sa-mp.com/wiki/IsPlayerStreamedIn
 * @param {Number} playerid
 * @param {Number} forplayerid
 * @return {Number} retval
 */
function IsPlayerStreamedIn( playerid, forplayerid ){
	var out = CallNativeGDK( "IsPlayerStreamedIn", "ii", playerid, forplayerid );
	return out;
}
/**
 * SetPlayerInterior
 * @see https://wiki.sa-mp.com/wiki/SetPlayerInterior
 * @param {Number} playerid
 * @param {Number} interiorid
 * @return {Number} retval
 */
function SetPlayerInterior( playerid, interiorid ){
	var out = CallNativeGDK( "SetPlayerInterior", "ii", playerid, interiorid );
	return out;
}
/**
 * GetPlayerInterior
 * @see https://wiki.sa-mp.com/wiki/GetPlayerInterior
 * @param {Number} playerid
 * @return {Number} retval
 */
function GetPlayerInterior( playerid ){
	var out = CallNativeGDK( "GetPlayerInterior", "i", playerid );
	return out;
}
/**
 * SetPlayerHealth
 * @see https://wiki.sa-mp.com/wiki/SetPlayerHealth
 * @param {Number} playerid
 * @param {Number} health
 * @return {Number} retval
 */
function SetPlayerHealth( playerid, health ){
	var out = CallNativeGDK( "SetPlayerHealth", "if", playerid, health );
	return out;
}
/**
 * GetPlayerHealth
 * @see https://wiki.sa-mp.com/wiki/GetPlayerHealth
 * @param {Number} playerid
 * @return {Number} health
 */
function GetPlayerHealth( playerid ){
	var out = CallNativeGDK( "GetPlayerHealth", "iF", playerid );
	return out;
}
/**
 * SetPlayerArmour
 * @see https://wiki.sa-mp.com/wiki/SetPlayerArmour
 * @param {Number} playerid
 * @param {Number} armour
 * @return {Number} retval
 */
function SetPlayerArmour( playerid, armour ){
	var out = CallNativeGDK( "SetPlayerArmour", "if", playerid, armour );
	return out;
}
/**
 * GetPlayerArmour
 * @see https://wiki.sa-mp.com/wiki/GetPlayerArmour
 * @param {Number} playerid
 * @return {Number} armour
 */
function GetPlayerArmour( playerid ){
	var out = CallNativeGDK( "GetPlayerArmour", "iF", playerid );
	return out;
}
/**
 * SetPlayerAmmo
 * @see https://wiki.sa-mp.com/wiki/SetPlayerAmmo
 * @param {Number} playerid
 * @param {Number} weaponslot
 * @param {Number} ammo
 * @return {Number} retval
 */
function SetPlayerAmmo( playerid, weaponslot, ammo ){
	var out = CallNativeGDK( "SetPlayerAmmo", "iii", playerid, weaponslot, ammo );
	return out;
}
/**
 * GetPlayerAmmo
 * @see https://wiki.sa-mp.com/wiki/GetPlayerAmmo
 * @param {Number} playerid
 * @return {Number} retval
 */
function GetPlayerAmmo( playerid ){
	var out = CallNativeGDK( "GetPlayerAmmo", "i", playerid );
	return out;
}
/**
 * GetPlayerWeaponState
 * @see https://wiki.sa-mp.com/wiki/GetPlayerWeaponState
 * @param {Number} playerid
 * @return {Number} retval
 */
function GetPlayerWeaponState( playerid ){
	var out = CallNativeGDK( "GetPlayerWeaponState", "i", playerid );
	return out;
}
/**
 * GetPlayerTargetPlayer
 * @see https://wiki.sa-mp.com/wiki/GetPlayerTargetPlayer
 * @param {Number} playerid
 * @return {Number} retval
 */
function GetPlayerTargetPlayer( playerid ){
	var out = CallNativeGDK( "GetPlayerTargetPlayer", "i", playerid );
	return out;
}
/**
 * GetPlayerTargetActor
 * @see https://wiki.sa-mp.com/wiki/GetPlayerTargetActor
 * @param {Number} playerid
 * @return {Number} retval
 */
function GetPlayerTargetActor( playerid ){
	var out = CallNativeGDK( "GetPlayerTargetActor", "i", playerid );
	return out;
}
/**
 * SetPlayerTeam
 * @see https://wiki.sa-mp.com/wiki/SetPlayerTeam
 * @param {Number} playerid
 * @param {Number} teamid
 * @return {Number} retval
 */
function SetPlayerTeam( playerid, teamid ){
	var out = CallNativeGDK( "SetPlayerTeam", "ii", playerid, teamid );
	return out;
}
/**
 * GetPlayerTeam
 * @see https://wiki.sa-mp.com/wiki/GetPlayerTeam
 * @param {Number} playerid
 * @return {Number} retval
 */
function GetPlayerTeam( playerid ){
	var out = CallNativeGDK( "GetPlayerTeam", "i", playerid );
	return out;
}
/**
 * SetPlayerScore
 * @see https://wiki.sa-mp.com/wiki/SetPlayerScore
 * @param {Number} playerid
 * @param {Number} score
 * @return {Number} retval
 */
function SetPlayerScore( playerid, score ){
	var out = CallNativeGDK( "SetPlayerScore", "ii", playerid, score );
	return out;
}
/**
 * GetPlayerScore
 * @see https://wiki.sa-mp.com/wiki/GetPlayerScore
 * @param {Number} playerid
 * @return {Number} retval
 */
function GetPlayerScore( playerid ){
	var out = CallNativeGDK( "GetPlayerScore", "i", playerid );
	return out;
}
/**
 * GetPlayerDrunkLevel
 * @see https://wiki.sa-mp.com/wiki/GetPlayerDrunkLevel
 * @param {Number} playerid
 * @return {Number} retval
 */
function GetPlayerDrunkLevel( playerid ){
	var out = CallNativeGDK( "GetPlayerDrunkLevel", "i", playerid );
	return out;
}
/**
 * SetPlayerDrunkLevel
 * @see https://wiki.sa-mp.com/wiki/SetPlayerDrunkLevel
 * @param {Number} playerid
 * @param {Number} level
 * @return {Number} retval
 */
function SetPlayerDrunkLevel( playerid, level ){
	var out = CallNativeGDK( "SetPlayerDrunkLevel", "ii", playerid, level );
	return out;
}
/**
 * SetPlayerColor
 * @see https://wiki.sa-mp.com/wiki/SetPlayerColor
 * @param {Number} playerid
 * @param {Number} color
 * @return {Number} retval
 */
function SetPlayerColor( playerid, color ){
	var out = CallNativeGDK( "SetPlayerColor", "ii", playerid, color );
	return out;
}
/**
 * GetPlayerColor
 * @see https://wiki.sa-mp.com/wiki/GetPlayerColor
 * @param {Number} playerid
 * @return {Number} retval
 */
function GetPlayerColor( playerid ){
	var out = CallNativeGDK( "GetPlayerColor", "i", playerid );
	return out;
}
/**
 * SetPlayerSkin
 * @see https://wiki.sa-mp.com/wiki/SetPlayerSkin
 * @param {Number} playerid
 * @param {Number} skinid
 * @return {Number} retval
 */
function SetPlayerSkin( playerid, skinid ){
	var out = CallNativeGDK( "SetPlayerSkin", "ii", playerid, skinid );
	return out;
}
/**
 * GetPlayerSkin
 * @see https://wiki.sa-mp.com/wiki/GetPlayerSkin
 * @param {Number} playerid
 * @return {Number} retval
 */
function GetPlayerSkin( playerid ){
	var out = CallNativeGDK( "GetPlayerSkin", "i", playerid );
	return out;
}
/**
 * GivePlayerWeapon
 * @see https://wiki.sa-mp.com/wiki/GivePlayerWeapon
 * @param {Number} playerid
 * @param {Number} weaponid
 * @param {Number} ammo
 * @return {Number} retval
 */
function GivePlayerWeapon( playerid, weaponid, ammo ){
	var out = CallNativeGDK( "GivePlayerWeapon", "iii", playerid, weaponid, ammo );
	return out;
}
/**
 * ResetPlayerWeapons
 * @see https://wiki.sa-mp.com/wiki/ResetPlayerWeapons
 * @param {Number} playerid
 * @return {Number} retval
 */
function ResetPlayerWeapons( playerid ){
	var out = CallNativeGDK( "ResetPlayerWeapons", "i", playerid );
	return out;
}
/**
 * SetPlayerArmedWeapon
 * @see https://wiki.sa-mp.com/wiki/SetPlayerArmedWeapon
 * @param {Number} playerid
 * @param {Number} weaponid
 * @return {Number} retval
 */
function SetPlayerArmedWeapon( playerid, weaponid ){
	var out = CallNativeGDK( "SetPlayerArmedWeapon", "ii", playerid, weaponid );
	return out;
}
/**
 * GetPlayerWeaponData
 * @see https://wiki.sa-mp.com/wiki/GetPlayerWeaponData
 * @param {Number} playerid
 * @param {Number} slot
 * @return {{ weapons: Number,  ammo: Number }}
 */
function GetPlayerWeaponData( playerid, slot ){
	var out = CallNativeGDK( "GetPlayerWeaponData", "iiII", playerid, slot, [ "weapons", "ammo" ] );
	return {weapons: out[0],ammo: out[1]};
}
/**
 * GivePlayerMoney
 * @see https://wiki.sa-mp.com/wiki/GivePlayerMoney
 * @param {Number} playerid
 * @param {Number} money
 * @return {Number} retval
 */
function GivePlayerMoney( playerid, money ){
	var out = CallNativeGDK( "GivePlayerMoney", "ii", playerid, money );
	return out;
}
/**
 * ResetPlayerMoney
 * @see https://wiki.sa-mp.com/wiki/ResetPlayerMoney
 * @param {Number} playerid
 * @return {Number} retval
 */
function ResetPlayerMoney( playerid ){
	var out = CallNativeGDK( "ResetPlayerMoney", "i", playerid );
	return out;
}
/**
 * SetPlayerName
 * @see https://wiki.sa-mp.com/wiki/SetPlayerName
 * @param {Number} playerid
 * @param {String} name
 * @return {Number} retval
 */
function SetPlayerName( playerid, name ){
	var out = CallNativeGDK( "SetPlayerName", "is", playerid, name );
	return out;
}
/**
 * GetPlayerMoney
 * @see https://wiki.sa-mp.com/wiki/GetPlayerMoney
 * @param {Number} playerid
 * @return {Number} retval
 */
function GetPlayerMoney( playerid ){
	var out = CallNativeGDK( "GetPlayerMoney", "i", playerid );
	return out;
}
/**
 * GetPlayerState
 * @see https://wiki.sa-mp.com/wiki/GetPlayerState
 * @param {Number} playerid
 * @return {Number} retval
 */
function GetPlayerState( playerid ){
	var out = CallNativeGDK( "GetPlayerState", "i", playerid );
	return out;
}
/**
 * GetPlayerIp
 * @see https://wiki.sa-mp.com/wiki/GetPlayerIp
 * @param {Number} playerid
 * @param {Number} [len]
 * @return {String} name
 */
function GetPlayerIp( playerid, len ){
	len = typeof len !== 'undefined' ? len : 256;
	var out = CallNativeGDK( "GetPlayerIp", "iSi", playerid, len );
	return out;
}
/**
 * GetPlayerPing
 * @see https://wiki.sa-mp.com/wiki/GetPlayerPing
 * @param {Number} playerid
 * @return {Number} retval
 */
function GetPlayerPing( playerid ){
	var out = CallNativeGDK( "GetPlayerPing", "i", playerid );
	return out;
}
/**
 * GetPlayerWeapon
 * @see https://wiki.sa-mp.com/wiki/GetPlayerWeapon
 * @param {Number} playerid
 * @return {Number} retval
 */
function GetPlayerWeapon( playerid ){
	var out = CallNativeGDK( "GetPlayerWeapon", "i", playerid );
	return out;
}
/**
 * GetPlayerKeys
 * @see https://wiki.sa-mp.com/wiki/GetPlayerKeys
 * @param {Number} playerid
 * @return {{ keys: Number,  updown: Number,  leftright: Number }}
 */
function GetPlayerKeys( playerid ){
	var out = CallNativeGDK( "GetPlayerKeys", "iIII", playerid, [ "keys", "updown", "leftright" ] );
	return {keys: out[0],updown: out[1],leftright: out[2]};
}
/**
 * GetPlayerName
 * @see https://wiki.sa-mp.com/wiki/GetPlayerName
 * @param {Number} playerid
 * @param {Number} [len]
 * @return {String} name
 */
function GetPlayerName( playerid, len ){
	len = typeof len !== 'undefined' ? len : 256;
	var out = CallNativeGDK( "GetPlayerName", "iSi", playerid, len );
	return out;
}
/**
 * SetPlayerTime
 * @see https://wiki.sa-mp.com/wiki/SetPlayerTime
 * @param {Number} playerid
 * @param {Number} hour
 * @param {Number} minute
 * @return {Number} retval
 */
function SetPlayerTime( playerid, hour, minute ){
	var out = CallNativeGDK( "SetPlayerTime", "iii", playerid, hour, minute );
	return out;
}
/**
 * GetPlayerTime
 * @see https://wiki.sa-mp.com/wiki/GetPlayerTime
 * @param {Number} playerid
 * @return {{ hour: Number,  minute: Number }}
 */
function GetPlayerTime( playerid ){
	var out = CallNativeGDK( "GetPlayerTime", "iII", playerid, [ "hour", "minute" ] );
	return {hour: out[0],minute: out[1]};
}
/**
 * TogglePlayerClock
 * @see https://wiki.sa-mp.com/wiki/TogglePlayerClock
 * @param {Number} playerid
 * @param {Number} toggle
 * @return {Number} retval
 */
function TogglePlayerClock( playerid, toggle ){
	var out = CallNativeGDK( "TogglePlayerClock", "ii", playerid, toggle );
	return out;
}
/**
 * SetPlayerWeather
 * @see https://wiki.sa-mp.com/wiki/SetPlayerWeather
 * @param {Number} playerid
 * @param {Number} weather
 * @return {Number} retval
 */
function SetPlayerWeather( playerid, weather ){
	var out = CallNativeGDK( "SetPlayerWeather", "ii", playerid, weather );
	return out;
}
/**
 * ForceClassSelection
 * @see https://wiki.sa-mp.com/wiki/ForceClassSelection
 * @param {Number} playerid
 * @return {Number} retval
 */
function ForceClassSelection( playerid ){
	var out = CallNativeGDK( "ForceClassSelection", "i", playerid );
	return out;
}
/**
 * SetPlayerWantedLevel
 * @see https://wiki.sa-mp.com/wiki/SetPlayerWantedLevel
 * @param {Number} playerid
 * @param {Number} level
 * @return {Number} retval
 */
function SetPlayerWantedLevel( playerid, level ){
	var out = CallNativeGDK( "SetPlayerWantedLevel", "ii", playerid, level );
	return out;
}
/**
 * GetPlayerWantedLevel
 * @see https://wiki.sa-mp.com/wiki/GetPlayerWantedLevel
 * @param {Number} playerid
 * @return {Number} retval
 */
function GetPlayerWantedLevel( playerid ){
	var out = CallNativeGDK( "GetPlayerWantedLevel", "i", playerid );
	return out;
}
/**
 * SetPlayerFightingStyle
 * @see https://wiki.sa-mp.com/wiki/SetPlayerFightingStyle
 * @param {Number} playerid
 * @param {Number} style
 * @return {Number} retval
 */
function SetPlayerFightingStyle( playerid, style ){
	var out = CallNativeGDK( "SetPlayerFightingStyle", "ii", playerid, style );
	return out;
}
/**
 * GetPlayerFightingStyle
 * @see https://wiki.sa-mp.com/wiki/GetPlayerFightingStyle
 * @param {Number} playerid
 * @return {Number} retval
 */
function GetPlayerFightingStyle( playerid ){
	var out = CallNativeGDK( "GetPlayerFightingStyle", "i", playerid );
	return out;
}
/**
 * SetPlayerVelocity
 * @see https://wiki.sa-mp.com/wiki/SetPlayerVelocity
 * @param {Number} playerid
 * @param {Number} X
 * @param {Number} Y
 * @param {Number} Z
 * @return {Number} retval
 */
function SetPlayerVelocity( playerid, X, Y, Z ){
	var out = CallNativeGDK( "SetPlayerVelocity", "ifff", playerid, X, Y, Z );
	return out;
}
/**
 * GetPlayerVelocity
 * @see https://wiki.sa-mp.com/wiki/GetPlayerVelocity
 * @param {Number} playerid
 * @return {{ x: Number,  y: Number,  z: Number }}
 */
function GetPlayerVelocity( playerid ){
	var out = CallNativeGDK( "GetPlayerVelocity", "iFFF", playerid, [ "x", "y", "z" ] );
	return {X: out[0],Y: out[1],Z: out[2]};
}
/**
 * PlayCrimeReportForPlayer
 * @see https://wiki.sa-mp.com/wiki/PlayCrimeReportForPlayer
 * @param {Number} playerid
 * @param {Number} suspectid
 * @param {Number} crime
 * @return {Number} retval
 */
function PlayCrimeReportForPlayer( playerid, suspectid, crime ){
	var out = CallNativeGDK( "PlayCrimeReportForPlayer", "iii", playerid, suspectid, crime );
	return out;
}
/**
 * PlayAudioStreamForPlayer
 * @see https://wiki.sa-mp.com/wiki/PlayAudioStreamForPlayer
 * @param {Number} playerid
 * @param {String} url
 * @param {Number} posX
 * @param {Number} posY
 * @param {Number} posZ
 * @param {Number} distance
 * @param {Number} usepos
 * @return {Number} retval
 */
function PlayAudioStreamForPlayer( playerid, url, posX, posY, posZ, distance, usepos ){
	posX = typeof posX !== 'undefined' ? posX : 0.0;
	posY = typeof posY !== 'undefined' ? posY : 0.0;
	posZ = typeof posZ !== 'undefined' ? posZ : 0.0;
	distance = typeof distance !== 'undefined' ? distance : 50.0;
	usepos = typeof usepos !== 'undefined' ? usepos : 0;
	var out = CallNativeGDK( "PlayAudioStreamForPlayer", "isffffi", playerid, url, posX, posY, posZ, distance, usepos );
	return out;
}
/**
 * StopAudioStreamForPlayer
 * @see https://wiki.sa-mp.com/wiki/StopAudioStreamForPlayer
 * @param {Number} playerid
 * @return {Number} retval
 */
function StopAudioStreamForPlayer( playerid ){
	var out = CallNativeGDK( "StopAudioStreamForPlayer", "i", playerid );
	return out;
}
/**
 * SetPlayerShopName
 * @see https://wiki.sa-mp.com/wiki/SetPlayerShopName
 * @param {Number} playerid
 * @param {String} shopname
 * @return {Number} retval
 */
function SetPlayerShopName( playerid, shopname ){
	var out = CallNativeGDK( "SetPlayerShopName", "is", playerid, shopname );
	return out;
}
/**
 * SetPlayerSkillLevel
 * @see https://wiki.sa-mp.com/wiki/SetPlayerSkillLevel
 * @param {Number} playerid
 * @param {Number} skill
 * @param {Number} level
 * @return {Number} retval
 */
function SetPlayerSkillLevel( playerid, skill, level ){
	var out = CallNativeGDK( "SetPlayerSkillLevel", "iii", playerid, skill, level );
	return out;
}
/**
 * GetPlayerSurfingVehicleID
 * @see https://wiki.sa-mp.com/wiki/GetPlayerSurfingVehicleID
 * @param {Number} playerid
 * @return {Number} retval
 */
function GetPlayerSurfingVehicleID( playerid ){
	var out = CallNativeGDK( "GetPlayerSurfingVehicleID", "i", playerid );
	return out;
}
/**
 * GetPlayerSurfingObjectID
 * @see https://wiki.sa-mp.com/wiki/GetPlayerSurfingObjectID
 * @param {Number} playerid
 * @return {Number} retval
 */
function GetPlayerSurfingObjectID( playerid ){
	var out = CallNativeGDK( "GetPlayerSurfingObjectID", "i", playerid );
	return out;
}
/**
 * RemoveBuildingForPlayer
 * @see https://wiki.sa-mp.com/wiki/RemoveBuildingForPlayer
 * @param {Number} playerid
 * @param {Number} modelid
 * @param {Number} fX
 * @param {Number} fY
 * @param {Number} fZ
 * @param {Number} fRadius
 * @return {Number} retval
 */
function RemoveBuildingForPlayer( playerid, modelid, fX, fY, fZ, fRadius ){
	var out = CallNativeGDK( "RemoveBuildingForPlayer", "iiffff", playerid, modelid, fX, fY, fZ, fRadius );
	return out;
}
/**
 * GetPlayerLastShotVectors
 * @see https://wiki.sa-mp.com/wiki/GetPlayerLastShotVectors
 * @param {Number} playerid
 * @return {{ foriginx: Number,  foriginy: Number,  foriginz: Number,  fhitposx: Number,  fhitposy: Number,  fhitposz: Number }}
 */
function GetPlayerLastShotVectors( playerid ){
	var out = CallNativeGDK( "GetPlayerLastShotVectors", "iFFFFFF", playerid, [ "foriginx", "foriginy", "foriginz", "fhitposx", "fhitposy", "fhitposz" ] );
	return {fOriginX: out[0],fOriginY: out[1],fOriginZ: out[2],fHitPosX: out[3],fHitPosY: out[4],fHitPosZ: out[5]};
}
/**
 * SetPlayerAttachedObject
 * @see https://wiki.sa-mp.com/wiki/SetPlayerAttachedObject
 * @param {Number} playerid
 * @param {Number} index
 * @param {Number} modelid
 * @param {Number} bone
 * @param {Number} fOffsetX
 * @param {Number} fOffsetY
 * @param {Number} fOffsetZ
 * @param {Number} fRotX
 * @param {Number} fRotY
 * @param {Number} fRotZ
 * @param {Number} fScaleX
 * @param {Number} fScaleY
 * @param {Number} fScaleZ
 * @param {Number} materialcolor1
 * @param {Number} materialcolor2
 * @return {Number} retval
 */
function SetPlayerAttachedObject( playerid, index, modelid, bone, fOffsetX, fOffsetY, fOffsetZ, fRotX, fRotY, fRotZ, fScaleX, fScaleY, fScaleZ, materialcolor1, materialcolor2 ){
	fOffsetX = typeof fOffsetX !== 'undefined' ? fOffsetX : 0.0;
	fOffsetY = typeof fOffsetY !== 'undefined' ? fOffsetY : 0.0;
	fOffsetZ = typeof fOffsetZ !== 'undefined' ? fOffsetZ : 0.0;
	fRotX = typeof fRotX !== 'undefined' ? fRotX : 0.0;
	fRotY = typeof fRotY !== 'undefined' ? fRotY : 0.0;
	fRotZ = typeof fRotZ !== 'undefined' ? fRotZ : 0.0;
	fScaleX = typeof fScaleX !== 'undefined' ? fScaleX : 1.0;
	fScaleY = typeof fScaleY !== 'undefined' ? fScaleY : 1.0;
	fScaleZ = typeof fScaleZ !== 'undefined' ? fScaleZ : 1.0;
	materialcolor1 = typeof materialcolor1 !== 'undefined' ? materialcolor1 : 0;
	materialcolor2 = typeof materialcolor2 !== 'undefined' ? materialcolor2 : 0;
	var out = CallNativeGDK( "SetPlayerAttachedObject", "iiiifffffffffii", playerid, index, modelid, bone, fOffsetX, fOffsetY, fOffsetZ, fRotX, fRotY, fRotZ, fScaleX, fScaleY, fScaleZ, materialcolor1, materialcolor2 );
	return out;
}
/**
 * RemovePlayerAttachedObject
 * @see https://wiki.sa-mp.com/wiki/RemovePlayerAttachedObject
 * @param {Number} playerid
 * @param {Number} index
 * @return {Number} retval
 */
function RemovePlayerAttachedObject( playerid, index ){
	var out = CallNativeGDK( "RemovePlayerAttachedObject", "ii", playerid, index );
	return out;
}
/**
 * IsPlayerAttachedObjectSlotUsed
 * @see https://wiki.sa-mp.com/wiki/IsPlayerAttachedObjectSlotUsed
 * @param {Number} playerid
 * @param {Number} index
 * @return {Number} retval
 */
function IsPlayerAttachedObjectSlotUsed( playerid, index ){
	var out = CallNativeGDK( "IsPlayerAttachedObjectSlotUsed", "ii", playerid, index );
	return out;
}
/**
 * EditAttachedObject
 * @see https://wiki.sa-mp.com/wiki/EditAttachedObject
 * @param {Number} playerid
 * @param {Number} index
 * @return {Number} retval
 */
function EditAttachedObject( playerid, index ){
	var out = CallNativeGDK( "EditAttachedObject", "ii", playerid, index );
	return out;
}
/**
 * CreatePlayerTextDraw
 * @see https://wiki.sa-mp.com/wiki/CreatePlayerTextDraw
 * @param {Number} playerid
 * @param {Number} x
 * @param {Number} y
 * @param {String} text
 * @return {Number} retval
 */
function CreatePlayerTextDraw( playerid, x, y, text ){
	var out = CallNativeGDK( "CreatePlayerTextDraw", "iffs", playerid, x, y, text );
	return out;
}
/**
 * PlayerTextDrawDestroy
 * @see https://wiki.sa-mp.com/wiki/PlayerTextDrawDestroy
 * @param {Number} playerid
 * @param {Number} text
 * @return {Number} retval
 */
function PlayerTextDrawDestroy( playerid, text ){
	var out = CallNativeGDK( "PlayerTextDrawDestroy", "ii", playerid, text );
	return out;
}
/**
 * PlayerTextDrawLetterSize
 * @see https://wiki.sa-mp.com/wiki/PlayerTextDrawLetterSize
 * @param {Number} playerid
 * @param {Number} text
 * @param {Number} x
 * @param {Number} y
 * @return {Number} retval
 */
function PlayerTextDrawLetterSize( playerid, text, x, y ){
	var out = CallNativeGDK( "PlayerTextDrawLetterSize", "iiff", playerid, text, x, y );
	return out;
}
/**
 * PlayerTextDrawTextSize
 * @see https://wiki.sa-mp.com/wiki/PlayerTextDrawTextSize
 * @param {Number} playerid
 * @param {Number} text
 * @param {Number} x
 * @param {Number} y
 * @return {Number} retval
 */
function PlayerTextDrawTextSize( playerid, text, x, y ){
	var out = CallNativeGDK( "PlayerTextDrawTextSize", "iiff", playerid, text, x, y );
	return out;
}
/**
 * PlayerTextDrawAlignment
 * @see https://wiki.sa-mp.com/wiki/PlayerTextDrawAlignment
 * @param {Number} playerid
 * @param {Number} text
 * @param {Number} alignment
 * @return {Number} retval
 */
function PlayerTextDrawAlignment( playerid, text, alignment ){
	var out = CallNativeGDK( "PlayerTextDrawAlignment", "iii", playerid, text, alignment );
	return out;
}
/**
 * PlayerTextDrawColor
 * @see https://wiki.sa-mp.com/wiki/PlayerTextDrawColor
 * @param {Number} playerid
 * @param {Number} text
 * @param {Number} color
 * @return {Number} retval
 */
function PlayerTextDrawColor( playerid, text, color ){
	var out = CallNativeGDK( "PlayerTextDrawColor", "iii", playerid, text, color );
	return out;
}
/**
 * PlayerTextDrawUseBox
 * @see https://wiki.sa-mp.com/wiki/PlayerTextDrawUseBox
 * @param {Number} playerid
 * @param {Number} text
 * @param {Number} use
 * @return {Number} retval
 */
function PlayerTextDrawUseBox( playerid, text, use ){
	var out = CallNativeGDK( "PlayerTextDrawUseBox", "iii", playerid, text, use );
	return out;
}
/**
 * PlayerTextDrawBoxColor
 * @see https://wiki.sa-mp.com/wiki/PlayerTextDrawBoxColor
 * @param {Number} playerid
 * @param {Number} text
 * @param {Number} color
 * @return {Number} retval
 */
function PlayerTextDrawBoxColor( playerid, text, color ){
	var out = CallNativeGDK( "PlayerTextDrawBoxColor", "iii", playerid, text, color );
	return out;
}
/**
 * PlayerTextDrawSetShadow
 * @see https://wiki.sa-mp.com/wiki/PlayerTextDrawSetShadow
 * @param {Number} playerid
 * @param {Number} text
 * @param {Number} size
 * @return {Number} retval
 */
function PlayerTextDrawSetShadow( playerid, text, size ){
	var out = CallNativeGDK( "PlayerTextDrawSetShadow", "iii", playerid, text, size );
	return out;
}
/**
 * PlayerTextDrawSetOutline
 * @see https://wiki.sa-mp.com/wiki/PlayerTextDrawSetOutline
 * @param {Number} playerid
 * @param {Number} text
 * @param {Number} size
 * @return {Number} retval
 */
function PlayerTextDrawSetOutline( playerid, text, size ){
	var out = CallNativeGDK( "PlayerTextDrawSetOutline", "iii", playerid, text, size );
	return out;
}
/**
 * PlayerTextDrawBackgroundColor
 * @see https://wiki.sa-mp.com/wiki/PlayerTextDrawBackgroundColor
 * @param {Number} playerid
 * @param {Number} text
 * @param {Number} color
 * @return {Number} retval
 */
function PlayerTextDrawBackgroundColor( playerid, text, color ){
	var out = CallNativeGDK( "PlayerTextDrawBackgroundColor", "iii", playerid, text, color );
	return out;
}
/**
 * PlayerTextDrawFont
 * @see https://wiki.sa-mp.com/wiki/PlayerTextDrawFont
 * @param {Number} playerid
 * @param {Number} text
 * @param {Number} font
 * @return {Number} retval
 */
function PlayerTextDrawFont( playerid, text, font ){
	var out = CallNativeGDK( "PlayerTextDrawFont", "iii", playerid, text, font );
	return out;
}
/**
 * PlayerTextDrawSetProportional
 * @see https://wiki.sa-mp.com/wiki/PlayerTextDrawSetProportional
 * @param {Number} playerid
 * @param {Number} text
 * @param {Number} set
 * @return {Number} retval
 */
function PlayerTextDrawSetProportional( playerid, text, set ){
	var out = CallNativeGDK( "PlayerTextDrawSetProportional", "iii", playerid, text, set );
	return out;
}
/**
 * PlayerTextDrawSetSelectable
 * @see https://wiki.sa-mp.com/wiki/PlayerTextDrawSetSelectable
 * @param {Number} playerid
 * @param {Number} text
 * @param {Number} set
 * @return {Number} retval
 */
function PlayerTextDrawSetSelectable( playerid, text, set ){
	var out = CallNativeGDK( "PlayerTextDrawSetSelectable", "iii", playerid, text, set );
	return out;
}
/**
 * PlayerTextDrawShow
 * @see https://wiki.sa-mp.com/wiki/PlayerTextDrawShow
 * @param {Number} playerid
 * @param {Number} text
 * @return {Number} retval
 */
function PlayerTextDrawShow( playerid, text ){
	var out = CallNativeGDK( "PlayerTextDrawShow", "ii", playerid, text );
	return out;
}
/**
 * PlayerTextDrawHide
 * @see https://wiki.sa-mp.com/wiki/PlayerTextDrawHide
 * @param {Number} playerid
 * @param {Number} text
 * @return {Number} retval
 */
function PlayerTextDrawHide( playerid, text ){
	var out = CallNativeGDK( "PlayerTextDrawHide", "ii", playerid, text );
	return out;
}
/**
 * PlayerTextDrawSetString
 * @see https://wiki.sa-mp.com/wiki/PlayerTextDrawSetString
 * @param {Number} playerid
 * @param {Number} text
 * @param {String} string
 * @return {Number} retval
 */
function PlayerTextDrawSetString( playerid, text, string ){
	var out = CallNativeGDK( "PlayerTextDrawSetString", "iis", playerid, text, string );
	return out;
}
/**
 * PlayerTextDrawSetPreviewModel
 * @see https://wiki.sa-mp.com/wiki/PlayerTextDrawSetPreviewModel
 * @param {Number} playerid
 * @param {Number} text
 * @param {Number} modelindex
 * @return {Number} retval
 */
function PlayerTextDrawSetPreviewModel( playerid, text, modelindex ){
	var out = CallNativeGDK( "PlayerTextDrawSetPreviewModel", "iii", playerid, text, modelindex );
	return out;
}
/**
 * PlayerTextDrawSetPreviewRot
 * @see https://wiki.sa-mp.com/wiki/PlayerTextDrawSetPreviewRot
 * @param {Number} playerid
 * @param {Number} text
 * @param {Number} fRotX
 * @param {Number} fRotY
 * @param {Number} fRotZ
 * @param {Number} fZoom
 * @return {Number} retval
 */
function PlayerTextDrawSetPreviewRot( playerid, text, fRotX, fRotY, fRotZ, fZoom ){
	fZoom = typeof fZoom !== 'undefined' ? fZoom : 1.0;
	var out = CallNativeGDK( "PlayerTextDrawSetPreviewRot", "iiffff", playerid, text, fRotX, fRotY, fRotZ, fZoom );
	return out;
}
/**
 * PlayerTextDrawSetPreviewVehCol
 * @see https://wiki.sa-mp.com/wiki/PlayerTextDrawSetPreviewVehCol
 * @param {Number} playerid
 * @param {Number} text
 * @param {Number} color1
 * @param {Number} color2
 * @return {Number} retval
 */
function PlayerTextDrawSetPreviewVehCol( playerid, text, color1, color2 ){
	var out = CallNativeGDK( "PlayerTextDrawSetPreviewVehCol", "iiii", playerid, text, color1, color2 );
	return out;
}
/**
 * SetPVarInt
 * @see https://wiki.sa-mp.com/wiki/SetPVarInt
 * @param {Number} playerid
 * @param {String} varname
 * @param {Number} int_value
 * @return {Number} retval
 */
function SetPVarInt( playerid, varname, int_value ){
	var out = CallNativeGDK( "SetPVarInt", "isi", playerid, varname, int_value );
	return out;
}
/**
 * GetPVarInt
 * @see https://wiki.sa-mp.com/wiki/GetPVarInt
 * @param {Number} playerid
 * @param {String} varname
 * @return {Number} retval
 */
function GetPVarInt( playerid, varname ){
	var out = CallNativeGDK( "GetPVarInt", "is", playerid, varname );
	return out;
}
/**
 * SetPVarString
 * @see https://wiki.sa-mp.com/wiki/SetPVarString
 * @param {Number} playerid
 * @param {String} varname
 * @param {String} string_value
 * @return {Number} retval
 */
function SetPVarString( playerid, varname, string_value ){
	var out = CallNativeGDK( "SetPVarString", "iss", playerid, varname, string_value );
	return out;
}
/**
 * GetPVarString
 * @see https://wiki.sa-mp.com/wiki/GetPVarString
 * @param {Number} playerid
 * @param {String} varname
 * @param {Number} [len]
 * @return {String} string_return
 */
function GetPVarString( playerid, varname, len ){
	len = typeof len !== 'undefined' ? len : 256;
	var out = CallNativeGDK( "GetPVarString", "isSi", playerid, varname, len );
	return out;
}
/**
 * SetPVarFloat
 * @see https://wiki.sa-mp.com/wiki/SetPVarFloat
 * @param {Number} playerid
 * @param {String} varname
 * @param {Number} float_value
 * @return {Number} retval
 */
function SetPVarFloat( playerid, varname, float_value ){
	var out = CallNativeGDK( "SetPVarFloat", "isf", playerid, varname, float_value );
	return out;
}
/**
 * GetPVarFloat
 * @see https://wiki.sa-mp.com/wiki/GetPVarFloat
 * @param {Number} playerid
 * @param {String} varname
 * @return {Number} retval
 */
function GetPVarFloat( playerid, varname ){
	var out = CallNativeGDK( "GetPVarFloat", "is", playerid, varname );
	return out;
}
/**
 * DeletePVar
 * @see https://wiki.sa-mp.com/wiki/DeletePVar
 * @param {Number} playerid
 * @param {String} varname
 * @return {Number} retval
 */
function DeletePVar( playerid, varname ){
	var out = CallNativeGDK( "DeletePVar", "is", playerid, varname );
	return out;
}
/**
 * GetPVarsUpperIndex
 * @see https://wiki.sa-mp.com/wiki/GetPVarsUpperIndex
 * @param {Number} playerid
 * @return {Number} retval
 */
function GetPVarsUpperIndex( playerid ){
	var out = CallNativeGDK( "GetPVarsUpperIndex", "i", playerid );
	return out;
}
/**
 * GetPVarNameAtIndex
 * @see https://wiki.sa-mp.com/wiki/GetPVarNameAtIndex
 * @param {Number} playerid
 * @param {Number} index
 * @param {String} ret_varname
 * @param {Number} ret_len
 * @return {Number} retval
 */
function GetPVarNameAtIndex( playerid, index, ret_varname, ret_len ){
	var out = CallNativeGDK( "GetPVarNameAtIndex", "iisi", playerid, index, ret_varname, ret_len );
	return out;
}
/**
 * GetPVarType
 * @see https://wiki.sa-mp.com/wiki/GetPVarType
 * @param {Number} playerid
 * @param {String} varname
 * @return {Number} retval
 */
function GetPVarType( playerid, varname ){
	var out = CallNativeGDK( "GetPVarType", "is", playerid, varname );
	return out;
}
/**
 * SetPlayerChatBubble
 * @see https://wiki.sa-mp.com/wiki/SetPlayerChatBubble
 * @param {Number} playerid
 * @param {String} text
 * @param {Number} color
 * @param {Number} drawdistance
 * @param {Number} expiretime
 * @return {Number} retval
 */
function SetPlayerChatBubble( playerid, text, color, drawdistance, expiretime ){
	var out = CallNativeGDK( "SetPlayerChatBubble", "isifi", playerid, text, color, drawdistance, expiretime );
	return out;
}
/**
 * PutPlayerInVehicle
 * @see https://wiki.sa-mp.com/wiki/PutPlayerInVehicle
 * @param {Number} playerid
 * @param {Number} vehicleid
 * @param {Number} seatid
 * @return {Number} retval
 */
function PutPlayerInVehicle( playerid, vehicleid, seatid ){
	var out = CallNativeGDK( "PutPlayerInVehicle", "iii", playerid, vehicleid, seatid );
	return out;
}
/**
 * GetPlayerVehicleID
 * @see https://wiki.sa-mp.com/wiki/GetPlayerVehicleID
 * @param {Number} playerid
 * @return {Number} retval
 */
function GetPlayerVehicleID( playerid ){
	var out = CallNativeGDK( "GetPlayerVehicleID", "i", playerid );
	return out;
}
/**
 * GetPlayerVehicleSeat
 * @see https://wiki.sa-mp.com/wiki/GetPlayerVehicleSeat
 * @param {Number} playerid
 * @return {Number} retval
 */
function GetPlayerVehicleSeat( playerid ){
	var out = CallNativeGDK( "GetPlayerVehicleSeat", "i", playerid );
	return out;
}
/**
 * RemovePlayerFromVehicle
 * @see https://wiki.sa-mp.com/wiki/RemovePlayerFromVehicle
 * @param {Number} playerid
 * @return {Number} retval
 */
function RemovePlayerFromVehicle( playerid ){
	var out = CallNativeGDK( "RemovePlayerFromVehicle", "i", playerid );
	return out;
}
/**
 * TogglePlayerControllable
 * @see https://wiki.sa-mp.com/wiki/TogglePlayerControllable
 * @param {Number} playerid
 * @param {Number} toggle
 * @return {Number} retval
 */
function TogglePlayerControllable( playerid, toggle ){
	var out = CallNativeGDK( "TogglePlayerControllable", "ii", playerid, toggle );
	return out;
}
/**
 * PlayerPlaySound
 * @see https://wiki.sa-mp.com/wiki/PlayerPlaySound
 * @param {Number} playerid
 * @param {Number} soundid
 * @param {Number} x
 * @param {Number} y
 * @param {Number} z
 * @return {Number} retval
 */
function PlayerPlaySound( playerid, soundid, x, y, z ){
	var out = CallNativeGDK( "PlayerPlaySound", "iifff", playerid, soundid, x, y, z );
	return out;
}
/**
 * ApplyAnimation
 * @see https://wiki.sa-mp.com/wiki/ApplyAnimation
 * @param {Number} playerid
 * @param {String} animlib
 * @param {String} animname
 * @param {Number} fDelta
 * @param {Number} loop
 * @param {Number} lockx
 * @param {Number} locky
 * @param {Number} freeze
 * @param {Number} time
 * @param {Number} forcesync
 * @return {Number} retval
 */
function ApplyAnimation( playerid, animlib, animname, fDelta, loop, lockx, locky, freeze, time, forcesync ){
	forcesync = typeof forcesync !== 'undefined' ? forcesync : 0;
	var out = CallNativeGDK( "ApplyAnimation", "issfiiiiii", playerid, animlib, animname, fDelta, loop, lockx, locky, freeze, time, forcesync );
	return out;
}
/**
 * ClearAnimations
 * @see https://wiki.sa-mp.com/wiki/ClearAnimations
 * @param {Number} playerid
 * @param {Number} forcesync
 * @return {Number} retval
 */
function ClearAnimations( playerid, forcesync ){
	forcesync = typeof forcesync !== 'undefined' ? forcesync : 0;
	var out = CallNativeGDK( "ClearAnimations", "ii", playerid, forcesync );
	return out;
}
/**
 * GetPlayerAnimationIndex
 * @see https://wiki.sa-mp.com/wiki/GetPlayerAnimationIndex
 * @param {Number} playerid
 * @return {Number} retval
 */
function GetPlayerAnimationIndex( playerid ){
	var out = CallNativeGDK( "GetPlayerAnimationIndex", "i", playerid );
	return out;
}
/**
 * GetAnimationName
 * @see https://wiki.sa-mp.com/wiki/GetAnimationName
 * @param {Number} index
 * @param {String} animlib
 * @param {Number} len1
 * @param {String} animname
 * @param {Number} len2
 * @return {Number} retval
 */
function GetAnimationName( index, animlib, len1, animname, len2 ){
	var out = CallNativeGDK( "GetAnimationName", "isisi", index, animlib, len1, animname, len2 );
	return out;
}
/**
 * GetPlayerSpecialAction
 * @see https://wiki.sa-mp.com/wiki/GetPlayerSpecialAction
 * @param {Number} playerid
 * @return {Number} retval
 */
function GetPlayerSpecialAction( playerid ){
	var out = CallNativeGDK( "GetPlayerSpecialAction", "i", playerid );
	return out;
}
/**
 * SetPlayerSpecialAction
 * @see https://wiki.sa-mp.com/wiki/SetPlayerSpecialAction
 * @param {Number} playerid
 * @param {Number} actionid
 * @return {Number} retval
 */
function SetPlayerSpecialAction( playerid, actionid ){
	var out = CallNativeGDK( "SetPlayerSpecialAction", "ii", playerid, actionid );
	return out;
}
/**
 * DisableRemoteVehicleCollisions
 * @see https://wiki.sa-mp.com/wiki/DisableRemoteVehicleCollisions
 * @param {Number} playerid
 * @param {Number} disable
 * @return {Number} retval
 */
function DisableRemoteVehicleCollisions( playerid, disable ){
	var out = CallNativeGDK( "DisableRemoteVehicleCollisions", "ii", playerid, disable );
	return out;
}
/**
 * SetPlayerCheckpoint
 * @see https://wiki.sa-mp.com/wiki/SetPlayerCheckpoint
 * @param {Number} playerid
 * @param {Number} x
 * @param {Number} y
 * @param {Number} z
 * @param {Number} size
 * @return {Number} retval
 */
function SetPlayerCheckpoint( playerid, x, y, z, size ){
	var out = CallNativeGDK( "SetPlayerCheckpoint", "iffff", playerid, x, y, z, size );
	return out;
}
/**
 * DisablePlayerCheckpoint
 * @see https://wiki.sa-mp.com/wiki/DisablePlayerCheckpoint
 * @param {Number} playerid
 * @return {Number} retval
 */
function DisablePlayerCheckpoint( playerid ){
	var out = CallNativeGDK( "DisablePlayerCheckpoint", "i", playerid );
	return out;
}
/**
 * SetPlayerRaceCheckpoint
 * @see https://wiki.sa-mp.com/wiki/SetPlayerRaceCheckpoint
 * @param {Number} playerid
 * @param {Number} type
 * @param {Number} x
 * @param {Number} y
 * @param {Number} z
 * @param {Number} nextx
 * @param {Number} nexty
 * @param {Number} nextz
 * @param {Number} size
 * @return {Number} retval
 */
function SetPlayerRaceCheckpoint( playerid, type, x, y, z, nextx, nexty, nextz, size ){
	var out = CallNativeGDK( "SetPlayerRaceCheckpoint", "iifffffff", playerid, type, x, y, z, nextx, nexty, nextz, size );
	return out;
}
/**
 * DisablePlayerRaceCheckpoint
 * @see https://wiki.sa-mp.com/wiki/DisablePlayerRaceCheckpoint
 * @param {Number} playerid
 * @return {Number} retval
 */
function DisablePlayerRaceCheckpoint( playerid ){
	var out = CallNativeGDK( "DisablePlayerRaceCheckpoint", "i", playerid );
	return out;
}
/**
 * SetPlayerWorldBounds
 * @see https://wiki.sa-mp.com/wiki/SetPlayerWorldBounds
 * @param {Number} playerid
 * @param {Number} x_max
 * @param {Number} x_min
 * @param {Number} y_max
 * @param {Number} y_min
 * @return {Number} retval
 */
function SetPlayerWorldBounds( playerid, x_max, x_min, y_max, y_min ){
	var out = CallNativeGDK( "SetPlayerWorldBounds", "iffff", playerid, x_max, x_min, y_max, y_min );
	return out;
}
/**
 * SetPlayerMarkerForPlayer
 * @see https://wiki.sa-mp.com/wiki/SetPlayerMarkerForPlayer
 * @param {Number} playerid
 * @param {Number} showplayerid
 * @param {Number} color
 * @return {Number} retval
 */
function SetPlayerMarkerForPlayer( playerid, showplayerid, color ){
	var out = CallNativeGDK( "SetPlayerMarkerForPlayer", "iii", playerid, showplayerid, color );
	return out;
}
/**
 * ShowPlayerNameTagForPlayer
 * @see https://wiki.sa-mp.com/wiki/ShowPlayerNameTagForPlayer
 * @param {Number} playerid
 * @param {Number} showplayerid
 * @param {Number} show
 * @return {Number} retval
 */
function ShowPlayerNameTagForPlayer( playerid, showplayerid, show ){
	var out = CallNativeGDK( "ShowPlayerNameTagForPlayer", "iii", playerid, showplayerid, show );
	return out;
}
/**
 * SetPlayerMapIcon
 * @see https://wiki.sa-mp.com/wiki/SetPlayerMapIcon
 * @param {Number} playerid
 * @param {Number} iconid
 * @param {Number} x
 * @param {Number} y
 * @param {Number} z
 * @param {Number} markertype
 * @param {Number} color
 * @param {Number} style
 * @return {Number} retval
 */
function SetPlayerMapIcon( playerid, iconid, x, y, z, markertype, color, style ){
	style = typeof style !== 'undefined' ? style : MAPICON_LOCAL;
	var out = CallNativeGDK( "SetPlayerMapIcon", "iifffiii", playerid, iconid, x, y, z, markertype, color, style );
	return out;
}
/**
 * RemovePlayerMapIcon
 * @see https://wiki.sa-mp.com/wiki/RemovePlayerMapIcon
 * @param {Number} playerid
 * @param {Number} iconid
 * @return {Number} retval
 */
function RemovePlayerMapIcon( playerid, iconid ){
	var out = CallNativeGDK( "RemovePlayerMapIcon", "ii", playerid, iconid );
	return out;
}
/**
 * AllowPlayerTeleport
 * @see https://wiki.sa-mp.com/wiki/AllowPlayerTeleport
 * @param {Number} playerid
 * @param {Number} allow
 * @return {Number} retval
 */
function AllowPlayerTeleport( playerid, allow ){
	var out = CallNativeGDK( "AllowPlayerTeleport", "ii", playerid, allow );
	return out;
}
/**
 * SetPlayerCameraPos
 * @see https://wiki.sa-mp.com/wiki/SetPlayerCameraPos
 * @param {Number} playerid
 * @param {Number} x
 * @param {Number} y
 * @param {Number} z
 * @return {Number} retval
 */
function SetPlayerCameraPos( playerid, x, y, z ){
	var out = CallNativeGDK( "SetPlayerCameraPos", "ifff", playerid, x, y, z );
	return out;
}
/**
 * SetPlayerCameraLookAt
 * @see https://wiki.sa-mp.com/wiki/SetPlayerCameraLookAt
 * @param {Number} playerid
 * @param {Number} x
 * @param {Number} y
 * @param {Number} z
 * @param {Number} cut
 * @return {Number} retval
 */
function SetPlayerCameraLookAt( playerid, x, y, z, cut ){
	cut = typeof cut !== 'undefined' ? cut : CAMERA_CUT;
	var out = CallNativeGDK( "SetPlayerCameraLookAt", "ifffi", playerid, x, y, z, cut );
	return out;
}
/**
 * SetCameraBehindPlayer
 * @see https://wiki.sa-mp.com/wiki/SetCameraBehindPlayer
 * @param {Number} playerid
 * @return {Number} retval
 */
function SetCameraBehindPlayer( playerid ){
	var out = CallNativeGDK( "SetCameraBehindPlayer", "i", playerid );
	return out;
}
/**
 * GetPlayerCameraPos
 * @see https://wiki.sa-mp.com/wiki/GetPlayerCameraPos
 * @param {Number} playerid
 * @return {{ x: Number,  y: Number,  z: Number }}
 */
function GetPlayerCameraPos( playerid ){
	var out = CallNativeGDK( "GetPlayerCameraPos", "iFFF", playerid, [ "x", "y", "z" ] );
	return {x: out[0],y: out[1],z: out[2]};
}
/**
 * GetPlayerCameraFrontVector
 * @see https://wiki.sa-mp.com/wiki/GetPlayerCameraFrontVector
 * @param {Number} playerid
 * @return {{ x: Number,  y: Number,  z: Number }}
 */
function GetPlayerCameraFrontVector( playerid ){
	var out = CallNativeGDK( "GetPlayerCameraFrontVector", "iFFF", playerid, [ "x", "y", "z" ] );
	return {x: out[0],y: out[1],z: out[2]};
}
/**
 * GetPlayerCameraMode
 * @see https://wiki.sa-mp.com/wiki/GetPlayerCameraMode
 * @param {Number} playerid
 * @return {Number} retval
 */
function GetPlayerCameraMode( playerid ){
	var out = CallNativeGDK( "GetPlayerCameraMode", "i", playerid );
	return out;
}
/**
 * EnablePlayerCameraTarget
 * @see https://wiki.sa-mp.com/wiki/EnablePlayerCameraTarget
 * @param {Number} playerid
 * @param {Number} enable
 * @return {Number} retval
 */
function EnablePlayerCameraTarget( playerid, enable ){
	var out = CallNativeGDK( "EnablePlayerCameraTarget", "ii", playerid, enable );
	return out;
}
/**
 * GetPlayerCameraTargetObject
 * @see https://wiki.sa-mp.com/wiki/GetPlayerCameraTargetObject
 * @param {Number} playerid
 * @return {Number} retval
 */
function GetPlayerCameraTargetObject( playerid ){
	var out = CallNativeGDK( "GetPlayerCameraTargetObject", "i", playerid );
	return out;
}
/**
 * GetPlayerCameraTargetVehicle
 * @see https://wiki.sa-mp.com/wiki/GetPlayerCameraTargetVehicle
 * @param {Number} playerid
 * @return {Number} retval
 */
function GetPlayerCameraTargetVehicle( playerid ){
	var out = CallNativeGDK( "GetPlayerCameraTargetVehicle", "i", playerid );
	return out;
}
/**
 * GetPlayerCameraTargetPlayer
 * @see https://wiki.sa-mp.com/wiki/GetPlayerCameraTargetPlayer
 * @param {Number} playerid
 * @return {Number} retval
 */
function GetPlayerCameraTargetPlayer( playerid ){
	var out = CallNativeGDK( "GetPlayerCameraTargetPlayer", "i", playerid );
	return out;
}
/**
 * GetPlayerCameraTargetActor
 * @see https://wiki.sa-mp.com/wiki/GetPlayerCameraTargetActor
 * @param {Number} playerid
 * @return {Number} retval
 */
function GetPlayerCameraTargetActor( playerid ){
	var out = CallNativeGDK( "GetPlayerCameraTargetActor", "i", playerid );
	return out;
}
/**
 * GetPlayerCameraAspectRatio
 * @see https://wiki.sa-mp.com/wiki/GetPlayerCameraAspectRatio
 * @param {Number} playerid
 * @return {Number} retval
 */
function GetPlayerCameraAspectRatio( playerid ){
	var out = CallNativeGDK( "GetPlayerCameraAspectRatio", "i", playerid );
	return out;
}
/**
 * GetPlayerCameraZoom
 * @see https://wiki.sa-mp.com/wiki/GetPlayerCameraZoom
 * @param {Number} playerid
 * @return {Number} retval
 */
function GetPlayerCameraZoom( playerid ){
	var out = CallNativeGDK( "GetPlayerCameraZoom", "i", playerid );
	return out;
}
/**
 * AttachCameraToObject
 * @see https://wiki.sa-mp.com/wiki/AttachCameraToObject
 * @param {Number} playerid
 * @param {Number} objectid
 * @return {Number} retval
 */
function AttachCameraToObject( playerid, objectid ){
	var out = CallNativeGDK( "AttachCameraToObject", "ii", playerid, objectid );
	return out;
}
/**
 * AttachCameraToPlayerObject
 * @see https://wiki.sa-mp.com/wiki/AttachCameraToPlayerObject
 * @param {Number} playerid
 * @param {Number} playerobjectid
 * @return {Number} retval
 */
function AttachCameraToPlayerObject( playerid, playerobjectid ){
	var out = CallNativeGDK( "AttachCameraToPlayerObject", "ii", playerid, playerobjectid );
	return out;
}
/**
 * InterpolateCameraPos
 * @see https://wiki.sa-mp.com/wiki/InterpolateCameraPos
 * @param {Number} playerid
 * @param {Number} FromX
 * @param {Number} FromY
 * @param {Number} FromZ
 * @param {Number} ToX
 * @param {Number} ToY
 * @param {Number} ToZ
 * @param {Number} time
 * @param {Number} cut
 * @return {Number} retval
 */
function InterpolateCameraPos( playerid, FromX, FromY, FromZ, ToX, ToY, ToZ, time, cut ){
	cut = typeof cut !== 'undefined' ? cut : CAMERA_CUT;
	var out = CallNativeGDK( "InterpolateCameraPos", "iffffffii", playerid, FromX, FromY, FromZ, ToX, ToY, ToZ, time, cut );
	return out;
}
/**
 * InterpolateCameraLookAt
 * @see https://wiki.sa-mp.com/wiki/InterpolateCameraLookAt
 * @param {Number} playerid
 * @param {Number} FromX
 * @param {Number} FromY
 * @param {Number} FromZ
 * @param {Number} ToX
 * @param {Number} ToY
 * @param {Number} ToZ
 * @param {Number} time
 * @param {Number} cut
 * @return {Number} retval
 */
function InterpolateCameraLookAt( playerid, FromX, FromY, FromZ, ToX, ToY, ToZ, time, cut ){
	cut = typeof cut !== 'undefined' ? cut : CAMERA_CUT;
	var out = CallNativeGDK( "InterpolateCameraLookAt", "iffffffii", playerid, FromX, FromY, FromZ, ToX, ToY, ToZ, time, cut );
	return out;
}
/**
 * IsPlayerConnected
 * @see https://wiki.sa-mp.com/wiki/IsPlayerConnected
 * @param {Number} playerid
 * @return {Number} retval
 */
function IsPlayerConnected( playerid ){
	var out = CallNativeGDK( "IsPlayerConnected", "i", playerid );
	return out;
}
/**
 * IsPlayerInVehicle
 * @see https://wiki.sa-mp.com/wiki/IsPlayerInVehicle
 * @param {Number} playerid
 * @param {Number} vehicleid
 * @return {Number} retval
 */
function IsPlayerInVehicle( playerid, vehicleid ){
	var out = CallNativeGDK( "IsPlayerInVehicle", "ii", playerid, vehicleid );
	return out;
}
/**
 * IsPlayerInAnyVehicle
 * @see https://wiki.sa-mp.com/wiki/IsPlayerInAnyVehicle
 * @param {Number} playerid
 * @return {Number} retval
 */
function IsPlayerInAnyVehicle( playerid ){
	var out = CallNativeGDK( "IsPlayerInAnyVehicle", "i", playerid );
	return out;
}
/**
 * IsPlayerInCheckpoint
 * @see https://wiki.sa-mp.com/wiki/IsPlayerInCheckpoint
 * @param {Number} playerid
 * @return {Number} retval
 */
function IsPlayerInCheckpoint( playerid ){
	var out = CallNativeGDK( "IsPlayerInCheckpoint", "i", playerid );
	return out;
}
/**
 * IsPlayerInRaceCheckpoint
 * @see https://wiki.sa-mp.com/wiki/IsPlayerInRaceCheckpoint
 * @param {Number} playerid
 * @return {Number} retval
 */
function IsPlayerInRaceCheckpoint( playerid ){
	var out = CallNativeGDK( "IsPlayerInRaceCheckpoint", "i", playerid );
	return out;
}
/**
 * SetPlayerVirtualWorld
 * @see https://wiki.sa-mp.com/wiki/SetPlayerVirtualWorld
 * @param {Number} playerid
 * @param {Number} worldid
 * @return {Number} retval
 */
function SetPlayerVirtualWorld( playerid, worldid ){
	var out = CallNativeGDK( "SetPlayerVirtualWorld", "ii", playerid, worldid );
	return out;
}
/**
 * GetPlayerVirtualWorld
 * @see https://wiki.sa-mp.com/wiki/GetPlayerVirtualWorld
 * @param {Number} playerid
 * @return {Number} retval
 */
function GetPlayerVirtualWorld( playerid ){
	var out = CallNativeGDK( "GetPlayerVirtualWorld", "i", playerid );
	return out;
}
/**
 * EnableStuntBonusForPlayer
 * @see https://wiki.sa-mp.com/wiki/EnableStuntBonusForPlayer
 * @param {Number} playerid
 * @param {Number} enable
 * @return {Number} retval
 */
function EnableStuntBonusForPlayer( playerid, enable ){
	var out = CallNativeGDK( "EnableStuntBonusForPlayer", "ii", playerid, enable );
	return out;
}
/**
 * EnableStuntBonusForAll
 * @see https://wiki.sa-mp.com/wiki/EnableStuntBonusForAll
 * @param {Number} enable
 * @return {Number} retval
 */
function EnableStuntBonusForAll( enable ){
	var out = CallNativeGDK( "EnableStuntBonusForAll", "i", enable );
	return out;
}
/**
 * TogglePlayerSpectating
 * @see https://wiki.sa-mp.com/wiki/TogglePlayerSpectating
 * @param {Number} playerid
 * @param {Number} toggle
 * @return {Number} retval
 */
function TogglePlayerSpectating( playerid, toggle ){
	var out = CallNativeGDK( "TogglePlayerSpectating", "ii", playerid, toggle );
	return out;
}
/**
 * PlayerSpectatePlayer
 * @see https://wiki.sa-mp.com/wiki/PlayerSpectatePlayer
 * @param {Number} playerid
 * @param {Number} targetplayerid
 * @param {Number} mode
 * @return {Number} retval
 */
function PlayerSpectatePlayer( playerid, targetplayerid, mode ){
	mode = typeof mode !== 'undefined' ? mode : SPECTATE_MODE_NORMAL;
	var out = CallNativeGDK( "PlayerSpectatePlayer", "iii", playerid, targetplayerid, mode );
	return out;
}
/**
 * PlayerSpectateVehicle
 * @see https://wiki.sa-mp.com/wiki/PlayerSpectateVehicle
 * @param {Number} playerid
 * @param {Number} targetvehicleid
 * @param {Number} mode
 * @return {Number} retval
 */
function PlayerSpectateVehicle( playerid, targetvehicleid, mode ){
	mode = typeof mode !== 'undefined' ? mode : SPECTATE_MODE_NORMAL;
	var out = CallNativeGDK( "PlayerSpectateVehicle", "iii", playerid, targetvehicleid, mode );
	return out;
}
/**
 * StartRecordingPlayerData
 * @see https://wiki.sa-mp.com/wiki/StartRecordingPlayerData
 * @param {Number} playerid
 * @param {Number} recordtype
 * @param {String} recordname
 * @return {Number} retval
 */
function StartRecordingPlayerData( playerid, recordtype, recordname ){
	var out = CallNativeGDK( "StartRecordingPlayerData", "iis", playerid, recordtype, recordname );
	return out;
}
/**
 * StopRecordingPlayerData
 * @see https://wiki.sa-mp.com/wiki/StopRecordingPlayerData
 * @param {Number} playerid
 * @return {Number} retval
 */
function StopRecordingPlayerData( playerid ){
	var out = CallNativeGDK( "StopRecordingPlayerData", "i", playerid );
	return out;
}
/**
 * SelectTextDraw
 * @see https://wiki.sa-mp.com/wiki/SelectTextDraw
 * @param {Number} playerid
 * @param {Number} hovercolor
 * @return {Number} retval
 */
function SelectTextDraw( playerid, hovercolor ){
	var out = CallNativeGDK( "SelectTextDraw", "ii", playerid, hovercolor );
	return out;
}
/**
 * CancelSelectTextDraw
 * @see https://wiki.sa-mp.com/wiki/CancelSelectTextDraw
 * @param {Number} playerid
 * @return {Number} retval
 */
function CancelSelectTextDraw( playerid ){
	var out = CallNativeGDK( "CancelSelectTextDraw", "i", playerid );
	return out;
}
/**
 * CreateExplosionForPlayer
 * @see https://wiki.sa-mp.com/wiki/CreateExplosionForPlayer
 * @param {Number} playerid
 * @param {Number} X
 * @param {Number} Y
 * @param {Number} Z
 * @param {Number} type
 * @param {Number} Radius
 * @return {Number} retval
 */
function CreateExplosionForPlayer( playerid, X, Y, Z, type, Radius ){
	var out = CallNativeGDK( "CreateExplosionForPlayer", "ifffif", playerid, X, Y, Z, type, Radius );
	return out;
}