var assert = require('assert'),
    inflectors = require('../index');

describe('capitalize', function() {
	it('id to Id', function() {
		assert.equal(inflectors.capitalize('id'), 'Id');
	});
	it('ENTRY to Entry', function() {
		assert.equal(inflectors.capitalize('ENTRY'), 'Entry');
	});
	it('House to House', function() {
		assert.equal(inflectors.capitalize('House'), 'House');
	});
	it('FooBarFoo to Foobarfoo', function() {
		assert.equal(inflectors.capitalize('FooBarFoo'), 'Foobarfoo');
	});
});
