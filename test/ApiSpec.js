var expect = require('chai').expect;

var Api = require('./../src/Api');


describe('Create new instance for API', function() {
	it('should have methods', function() {
		var api = new Api({hostname: 'localhost'});
		expect(api).to.respondTo('get');
		expect(api).to.respondTo('login');
		expect(api).to.respondTo('logout');
		expect(api).to.respondTo('post');
		expect(api).to.respondTo('put');
		expect(api).to.respondTo('search');
		expect(api).to.respondTo('delete');
		expect(api).to.respondTo('report');
		expect(api).to.respondTo('count');
		expect(api).to.respondTo('copy');
		expect(api).to.respondTo('upload');
		expect(api).to.respondTo('execute');
		expect(api).to.respondTo('namedQuery');
		expect(api).to.respondTo('metadata');
	});

	it('should set correct API path based on passed configuration (version is passed)', function() {
		var api = new Api({version: '2.0'});
		expect(api.httpOptions.path).to.equal('/attask/api/v2.0');
	});

	it('should set correct API path based on passed configuration (version is not passed)', function() {
		var api = new Api({});
		expect(api.httpOptions.path).to.equal('/attask/api');
	});

	it('should set correct API path based on passed configuration (version="internal")', function() {
		var api = new Api({version: 'internal'});
		expect(api.httpOptions.path).to.equal('/attask/api-internal');
	});
});