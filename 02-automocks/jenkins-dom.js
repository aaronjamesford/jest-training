var $ = require('jquery');
var jenkins = require('./jenkins');

$('#showDescription').click(function(){
	var domain = $('#domain').text();
	var jobName = $('#jobName').text();
	
	new jenkins(domain).jobDescription(jobName, function(description) {
		$('#description').text(description);
	});
});

$('#showLastFailure').click(function() {
	var domain = $('#domain').text();
	var jobName = $('#jobName').text();

	new jenkins(domain).lastFailedBuild(jobName, function(buildJson) {
		$('#failedBuild').text("Build #" + buildJson.buildNumber + " - failed on " + buildJson.dateTime);
	});
});
