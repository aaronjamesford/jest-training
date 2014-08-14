var $ = require('jquery');

function Jenkins(domain) {
	this.domain = domain;
}

Jenkins.prototype.jobDescription = function(jobName, callback) {
	return $.ajax({
		type : 'GET',
		url : 'http://' + this.domain + '/job/' + jobName + '/api/json',
		success : function(jobJson) {
			callback(jobJson.description);
		}
	});
}

Jenkins.prototype.lastFailedBuild = function(jobName, callback) {
	return $.ajax({
		type: 'GET',
		url : 'http://' + this.domain + '/job/' + jobname + '/lastFailedBuild/api/json',
		success : function(buildJson) {
			callback({
				dateTime : new Date(buildJson.timestamp),
				buildNumber : buildJson.number
			});
		}
	});
}

module.exports = Jenkins;
