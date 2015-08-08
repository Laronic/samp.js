#ifndef __SAMPJS__
#define __SAMPJS__

#include <cstring>
#include <string>
#include <map>
#include <memory>

#include "Script.h"

#include <sdk.h>

using namespace std;

class ArrayBufferAllocator : public v8::ArrayBuffer::Allocator {
public:
	virtual void* Allocate(size_t length) {
		void* data = AllocateUninitialized(length);
		return data == NULL ? data : memset(data, 0, length);
	}
	virtual void* AllocateUninitialized(size_t length) { return malloc(length); }
	virtual void Free(void* data, size_t) {  free(data); }
};


namespace sampjs {
	class Script;
	class SAMPJS {
	public:
		static Platform* platform;
		static AMX *amx;
		static AMX_HEADER *amx_hdr;
		static string v8flags;
		static ArrayBufferAllocator array_buffer_allocator;

		static void Init();
		static void Shutdown();
		static void ProcessTick();

		static bool CreateScript( string filename );
		static void RemoveScript( string filename );
		static bool ScriptLoaded( string filename );

		static void ScriptInit();

		static void SetAMX(AMX *amx);

		static void JS_Load(const FunctionCallbackInfo<Value> & args);
		static void JS_Unload(const FunctionCallbackInfo<Value> & args);
		static void JS_Reload(const FunctionCallbackInfo<Value> & args);

		static void JS_GlobalEvent(const FunctionCallbackInfo<Value> & args);

		static int PublicCall(const char *name, cell *params, cell *retval);

		static Local<Value> ExecuteCode(Local<Context> context, string name, string code, int offset=1);


		static vector<string> GetScripts();

		static shared_ptr<Script> GetScript(string name);

		
	
		static vector<string> scripts;
		static unordered_map<string, shared_ptr<Script>> scripts_map;
	};
};

#endif