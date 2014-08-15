var AuthenticationGateway = function(){
}

AuthenticationGateway.prototype.credentialsAreValid = function(username, password) {
	return false;
}

module.exports = AuthenticationGateway;
