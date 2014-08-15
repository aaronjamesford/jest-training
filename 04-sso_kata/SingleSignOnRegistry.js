require('./SSOToken');

var SingleSignOnRegistry = function(){
}

SingleSignOnRegistry.prototype.registerNewSession = function(username, password){
}

SingleSignOnRegistry.prototype.isValid = function() {
	return false;
}

SingleSignOnRegistry.prototype.unregister = function(){
}

module.exports = SingleSignOnRegistry;
