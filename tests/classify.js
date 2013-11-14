var assert = require('assert'),
    inflectors = require('../index');

describe('classify', function() {
	it('id to Id', function() {
		assert.equal(inflectors.classify('id'), 'Id');
	});
	it('ENTRY to ENTRY', function() {
		assert.equal(inflectors.classify('ENTRY'), 'ENTRY');
	});
	it('House to House', function() {
		assert.equal(inflectors.classify('House'), 'House');
	});
	it('FooBarFoo to FooBarFoo', function() {
		assert.equal(inflectors.classify('FooBarFoo'), 'FooBarFoo');
	});
});
