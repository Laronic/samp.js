#include "io/HTTP.h"
#include "io/UriParser.hpp"

#include "utils/Utils.h"
#include "utils/Helpers.h"

#include <iostream>
#include <string>
#include <boost/asio.hpp>

#include <future>

using namespace sampjs;
using namespace boost::asio::ip;
using namespace std;

std::map<int, HTTP_Request*> HTTPJS::requests;
int HTTPJS::requests_id = 0;

void HTTPJS::Init(Local<Context> context){
	V8CONTEXT(context->GetIsolate(), context)
	JS_Object global(context->Global());
	global.Set("$get", HTTPJS::JS_Get);
}

void HTTPJS::Shutdown(){
	for (auto request : requests){
		request.second->callback.Reset();
		request.second->context.Reset();
		requests.erase(request.first);
	}
}

void HTTPJS::JS_Get(const FunctionCallbackInfo<Value> & args){
	if (args.Length() < 1){
		return;
	}
	string url = JS2STRING(args[0]);

	
	if (args.Length() > 1 && args[1]->IsFunction()){

		int id = requests_id++;
		requests[id] = new HTTP_Request(url, Local<Function>::Cast(args[1]));

		async(launch::async, [id](){
			HTTP_Request *request = HTTPJS::requests[id];
			string data = HTTPJS::Get(request->url);
			
			V8PCONTEXT(request->isolate, request->context)

			Local<Function> func = Local<Function>::New(request->isolate, request->callback);

			Local<Value> argv[1] = { String::NewFromUtf8(request->isolate, data.c_str()) };
			func->Call(func, 1, argv);

			HTTPJS::requests.erase(id);
		});
		return;
	}
	
	args.GetReturnValue().Set(String::NewFromUtf8(args.GetIsolate(),Get(url).c_str()));
}

string HTTPJS::Get(string url){
	http::url parsed = http::ParseHttpUrl(url);

	if (parsed.protocol == "")parsed.protocol = "http";
	if (parsed.path == "") parsed.path = "/";

	tcp::iostream s(parsed.host, parsed.protocol);

	if (!s){
		sjs::logger::error("Could not connect to %s", parsed.host.c_str());
	}
	s << "GET " << parsed.path << " HTTP/1.0\r\n"
		<< "Host: " << parsed.host << "\r\n"
		<< "Accept: */*\r\n"
		<< "Connection: close\r\n\r\n";
	string header;
	while (getline(s, header) && header != "\r");

	stringstream ss;
	ss << s.rdbuf();
	string data = ss.str();
	return data;
}