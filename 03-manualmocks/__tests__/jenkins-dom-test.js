jest.dontMock('../jenkins-dom')
    .dontMock('jquery');

describe('jenkins-dom', function() {
	describe('showJobs', function(){
		beforeEach(function() {
			document.body.innerHTML =
                                '<div>' +
                                '  <span id="domain">rbrjenkins</span>' +
                                '  <button id="showJobs" />' +
                                '  <span id="jobs" />' +
                                '</div>';

			require('../jenkins').__setJobs(['Job1', 'Job2', 'Job3']);
		});
		
		it('updates the dom correctly', function() {
			var showDescription = require('../jenkins-dom');
			var $ = require('jquery');
			var jenkins = require('../jenkins');

			$('#showJobs').click();
			
			expect($('#jobs').text()).toEqual('Job1,Job2,Job3');
		});
	});
});
