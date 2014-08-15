var $ = require('jquery');
var jenkins = require('./jenkins');

$('#showJobs').click(function(){
	var domain = $('#domain').text();
	
	jenkins.getJobs(domain, function(jobs) {
		$('#jobs').text(jobs.toString());
	});
});

$('#showLastFailure').click(function() {
	var domain = $('#domain').text();
	var jobName = $('#jobName').text();

	new jenkins(domain).lastFailedBuild(jobName, function(buildJson) {
		$('#failedBuild').text("Build #" + buildJson.buildNumber + " - failed on " + buildJson.dateTime);
	});
});
