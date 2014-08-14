jest.dontMock('../jenkins-dom')
    .dontMock('jquery');

describe('jenkins-dom', function() {
	describe('showDescription', function(){
		it('calls correct jenkins function with correct parameters', function() {
			document.body.innerHTML = 
				'<div>' + 
				'  <span id="domain">rbrjenkins</span>' + 
				'  <span id="jobName">3D</span>' +
				'  <button id="showDescription" />' + 
				'  <span id="description" />' +
				'</div>';
			
			var showDescription = require('../jenkins-dom');
			var $ = require('jquery');
			var jenkins = require('../jenkins');

			$('#showDescription').click();
			
			expect(jenkins.prototype.constructor).toBeCalledWith('rbrjenkins');
			expect(jenkins.prototype.jobDescription).toBeCalledWith('3D', jasmine.any(Function));
		});

		it('displays correct job description', function() {
			document.body.innerHTML =
                                '<div>' +
                                '  <span id="domain">rbrjenkins</span>' +
                                '  <span id="jobName">3D</span>' +
                                '  <button id="showDescription" />' +
                                '  <span id="description" />' +
                                '</div>';

                        var showDescription = require('../jenkins-dom');
                        var $ = require('jquery');
                        var jenkins = require('../jenkins');

			jenkins.prototype.jobDescription.mockImplementation(function(jn, cb) {
				cb("This is a job description");
			});

                        $('#showDescription').click();

			expect($('#description').text()).toEqual("This is a job description");
		});
	});

	describe('showLastFailure', function() {
		// TODO
	});
});
