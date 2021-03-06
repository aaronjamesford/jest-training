02-automocks
============

### jenkins.js

This is a simple module that makes an ajax request (using jquery) to fetch a job description or a last build failure.

### jenkins-dom.js

This file contains some $.click() listeners to perform actions when objects on the dom are clicked.

### jenkins-test.js

`jest.dontMock('../jenkins')` is explicitly telling Jest not to mock the jenkins module as this is the object we are wanting to test.

`it('makes request to the correct url', function() { ...` is testing that the jenkins module calls $.ajax with the correct parameters. Note that jquery is being mocked here as we don't want jquery to actually attempt the ajax request, and we can then inspect the calls to $.ajax.

`it('makes callback with correct value', function() { ...` is using a mock function as a callback passed to jobDescription to check that the correct parameter is passed. We are also calling the method passed as the success element in the first call to $.ajax so that the callback will be invoked.

`describe('lastFailedBuild', function() { ...` needs completing. The two tests are almost identical to the tests describing jobDescription.

### jenkins-dom-test.js

Jest comes packaged with jsdom, we can use this to emulate a dom environment and test the interactions.

`jest.dontMock('../jenkins-dom').dontMock('jquery');` In these tests we do not want to mock jquery so that the event listeners can be invoked and inspect the changes of the dom. We will, however, mock the jenkins module.

`expect(jenkins.prototype.constructor).toBeCalledWith('rbrjenkins');` jest automatically mocks entire modules, we can now expect conditions on the Jenkins module.

```
jenkins.prototype.jobDescription.mockImplementation(function(jn, cb) {
				cb("This is a job description");
			});
```
We can also create our own mock implementations if needed.

```
describe('showLastFailure', function() {
		// TODO
	});
```
Write tests similar to that describing the showDescription feature, but for the correct events for showLastFailure in jenkins-dom.js obviously ;)
