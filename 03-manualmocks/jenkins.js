var $ = require('jquery');

var getJobs = function(domain, callback) {
	return $.ajax({
		type : 'GET',
		url : 'http://' + domain + '/api/json',
		success : function(jobJson) {
			var jobs = jobJson.jobs.map(function(job) { return job.name; });
			callback(jobs);
		}
	});
}

exports.getJobs = getJobs;
