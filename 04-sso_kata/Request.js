var SSOToken = require('./SSOToken');

var Request = function(name, token) {
	this.name = name;
	this.token = token;
}

Request.prototype.getSSOToken = function() {
	return this.token;
}

Request.prototype.getName = function() {
	return this.name;
}

module.exports = Request;
