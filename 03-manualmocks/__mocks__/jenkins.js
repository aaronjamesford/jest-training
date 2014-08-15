var _jobs = [];
var __setJobs = function(jobs) {
	_jobs = jobs;
}

var getJobs = function(domain, callback) {
	callback(_jobs);
}

exports.__setJobs = __setJobs;
exports.getJobs = getJobs;
