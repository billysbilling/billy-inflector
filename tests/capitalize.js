var assert = require('assert'),
    inflector = require('../index');

describe('capitalize', function() {
	it('id to Id', function() {
		assert.equal(inflector.capitalize('id'), 'Id');
	});
	it('ENTRY to Entry', function() {
		assert.equal(inflector.capitalize('ENTRY'), 'Entry');
	});
	it('House to House', function() {
		assert.equal(inflector.capitalize('House'), 'House');
	});
	it('FooBarFoo to Foobarfoo', function() {
		assert.equal(inflector.capitalize('FooBarFoo'), 'Foobarfoo');
	});
});
