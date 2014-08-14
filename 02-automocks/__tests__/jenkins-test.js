jest.dontMock('../jenkins');

describe('jenkins', function() {
	describe('jobDescription', function() {
		it('makes request to the correct url', function() {
			var $ = require('jquery');
			var jenkins = require('../jenkins');

			var callback = function() {}
			new jenkins('rbrjenkins').jobDescription('3D', callback);

			expect($.ajax).toBeCalledWith({
				type: 'GET',
				url: 'http://rbrjenkins/job/3D/api/json',
				success: jasmine.any(Function)
			});
		});

		it('makes callback with correct value', function() {
			var $ = require('jquery');
			var jenkins = require('../jenkins');

			var callback = jest.genMockFunction();
			new jenkins('rbrjenkins').jobDescription('3D', callback);

			// function calls and arguments are stored in a 2D array
			// calls[0] == array of arguments for the first call
			// calls[0][0] == value of first argument in the first call to the function
			$.ajax.mock.calls[0][0].success({
				description : "This is a jenkins job"
			});

			expect(callback.mock.calls[0][0]).toEqual("This is a jenkins job");
		});
	});

	describe('lastFailedBuild', function() {
		it('makes callback with correct information', function() {
			var $ = require('jquery');
			var jenkins = require('../jenkins');
		});

		it('makes request to the correct url', function() {
                        var $ = require('jquery');
                        var jenkins = require('../jenkins');
                });
	});
});
