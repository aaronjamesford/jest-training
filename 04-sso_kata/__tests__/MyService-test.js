jest.dontMock('../MyService')
    .dontMock('../Request')
    .dontMock('../Response');

describe('MyService', function() {
	describe('handleRequest', function() {
		it('is rejected when invalid SSO token', function() {
			var Request = require('../Request');
			var Response = require('../Response');
			var SingleSignOnRegistry = require('../SingleSignOnRegistry');
			var MyService = require('../MyService');

			var response = new MyService(null).handleRequest(new Request('Foo', null));
			expect(response.getText()).not.toEqual("hello Foo!");
		});
	});
});
