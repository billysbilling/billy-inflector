var assert = require('assert'),
    inflector = require('../index');

describe('classify', function() {
	it('id to Id', function() {
		assert.equal(inflector.classify('id'), 'Id');
	});
	it('ENTRY to ENTRY', function() {
		assert.equal(inflector.classify('ENTRY'), 'ENTRY');
	});
	it('House to House', function() {
		assert.equal(inflector.classify('House'), 'House');
	});
	it('FooBarFoo to FooBarFoo', function() {
		assert.equal(inflector.classify('FooBarFoo'), 'FooBarFoo');
	});
});
