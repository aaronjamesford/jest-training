var Request = require('./Request');
var Response = require('./Response');
var SingleSignOnRegistry = require('./SingleSignOnRegistry');

var MyService = function(registry) {
	this.registry = registry;
}

MyService.prototype.handleRequest = function(request) {
	// TODO : check request has a valid SSOToken
	return new Response("hello " + request.getName() + "!");
}

module.exports = MyService;
