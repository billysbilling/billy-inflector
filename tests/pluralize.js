var assert = require('assert'),
    inflector = require('../index');

describe('pluralize', function() {
	describe('standard', function() {
		it('id to ids', function() {
			assert.equal(inflector.pluralize('id'), 'ids');
		});
		it('entry to entries', function() {
			assert.equal(inflector.pluralize('entry'), 'entries');
		});
		it('prefix to prefixes', function() {
			assert.equal(inflector.pluralize('prefix'), 'prefixes');
		});
		it('watch to watches', function() {
			assert.equal(inflector.pluralize('watch'), 'watches');
		});
		it('house to houses', function() {
			assert.equal(inflector.pluralize('house'), 'houses');
		});
		it('stat to stats', function() {
			assert.equal(inflector.pluralize('stat'), 'stats');
		});
		it('status to statuses', function() {
			assert.equal(inflector.pluralize('status'), 'statuses');
		});
		it('invoice to invoices', function() {
			assert.equal(inflector.pluralize('invoice'), 'invoices');
		});
		it('invoiceLine to invoiceLines', function() {
			assert.equal(inflector.pluralize('invoiceLine'), 'invoiceLines');
		});
		it('country to countries', function() {
			assert.equal(inflector.pluralize('country'), 'countries');
		});
		it('currency to currencies', function() {
			assert.equal(inflector.pluralize('currency'), 'currencies');
		});
		it('access to accesses', function() {
			assert.equal(inflector.pluralize('access'), 'accesses');
		});
		it('batch to batches', function() {
			assert.equal(inflector.pluralize('batch'), 'batches');
		});
		it('bankLineMatch to bankLineMatches', function() {
			assert.equal(inflector.pluralize('bankLineMatch'), 'bankLineMatches');
		});
	});
	describe('custom', function() {
		before(function() {
			inflector.addRule('foo', 'bar');
			inflector.addRule('foofoo', 'barbar');
			inflector.removeRule('foofoo');
			inflector.addRule('stats', 'stats');
			inflector.addRule('status', 'status');
		});
		after(function() {
			inflector.removeRule('foo');
			inflector.removeRule('stats');
			inflector.removeRule('status');
		});
		it('foo to bar', function() {
			assert.equal(inflector.pluralize('foo'), 'bar');
		});
		it('foofoo to foofoos, not barbar', function() {
			assert.equal(inflector.pluralize('foofoo'), 'foofoos');
		});
		it('stats to stats', function() {
			assert.equal(inflector.pluralize('stats'), 'stats');
		});
		it('status to status', function() {
			assert.equal(inflector.pluralize('status'), 'status');
		});
	});
});
