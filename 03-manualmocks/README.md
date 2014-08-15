03-manualmocks
============

### jenkins.js

This is a simple module that makes an ajax request (using jquery) to fetch a list of jobs from Jenkins.

### jenkins-dom.js

This file contains some $.click() listeners to perform actions when objects on the dom are clicked.

### __mocks__/jenkins.js

A mock implementation of the jenkins module... With added helper functions!

### jenkins-dom-test.js

This test is a basic example of using our new mock object and helper functions

`beforeEach(function() { ... }` This is a setup function we can use that's run before every test

`$('#showJobs').click();` will essentially use our new mock object. As far as I'm aware, you cannot use the .mock on this mock object, hence why there is only one test... :(

#### A note on manual mocking

Straight from the webpage:

> As you can see, it's sometimes useful to do more than what the automatic mocker is capable of doing for us. Of course, one downside to manual mocks is that they're manual – meaning you have to manually update them any time the module they are mocking changes. Because of this, it's best to use the automatic mocker when it works for your needs.

> It's generally an anti-pattern to implement an elaborate, stateful mock for a module. Before going down this route, consider covering the real module completely with tests and then whitelisting it with config.unmockedModulePathPatterns, so that any tests that require() it will always get the real implementation (rather than a complicated mock version).

> In cases where this kind of elaborate mock is unavoidable, it's not necessarily a bad idea to write a test that ensures that the mock and the actual implementation are in sync. Luckily, this is relatively easy to do with the API provided by jest, which allows you to explicitly require both the real module (using require.requireActual()) and the manually mocked implementation of the module (using require()) in a single test!
