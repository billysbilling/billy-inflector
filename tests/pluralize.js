var assert = require('assert'),
    inflectors = require('../index');

describe('pluralize', function() {
	describe('standard', function() {
		it('id to ids', function() {
			assert.equal(inflectors.pluralize('id'), 'ids');
		});
		it('entry to entries', function() {
			assert.equal(inflectors.pluralize('entry'), 'entries');
		});
		it('prefix to prefixes', function() {
			assert.equal(inflectors.pluralize('prefix'), 'prefixes');
		});
		it('watch to watches', function() {
			assert.equal(inflectors.pluralize('watch'), 'watches');
		});
		it('house to houses', function() {
			assert.equal(inflectors.pluralize('house'), 'houses');
		});
		it('stat to stats', function() {
			assert.equal(inflectors.pluralize('stat'), 'stats');
		});
		it('status to statuses', function() {
			assert.equal(inflectors.pluralize('status'), 'statuses');
		});
		it('invoice to invoices', function() {
			assert.equal(inflectors.pluralize('invoice'), 'invoices');
		});
		it('invoiceLine to invoiceLines', function() {
			assert.equal(inflectors.pluralize('invoiceLine'), 'invoiceLines');
		});
		it('country to countries', function() {
			assert.equal(inflectors.pluralize('country'), 'countries');
		});
		it('currency to currencies', function() {
			assert.equal(inflectors.pluralize('currency'), 'currencies');
		});
		it('access to accesses', function() {
			assert.equal(inflectors.pluralize('access'), 'accesses');
		});
		it('batch to batches', function() {
			assert.equal(inflectors.pluralize('batch'), 'batches');
		});
		it('bankLineMatch to bankLineMatches', function() {
			assert.equal(inflectors.pluralize('bankLineMatch'), 'bankLineMatches');
		});
	});
	describe('custom', function() {
		before(function() {
			inflectors.addRule('foo', 'bar');
			inflectors.addRule('foofoo', 'barbar');
			inflectors.removeRule('foofoo');
			inflectors.addRule('stats', 'stats');
			inflectors.addRule('status', 'status');
		});
		after(function() {
			inflectors.removeRule('foo');
			inflectors.removeRule('stats');
			inflectors.removeRule('status');
		});
		it('foo to bar', function() {
			assert.equal(inflectors.pluralize('foo'), 'bar');
		});
		it('foofoo to foofoos, not barbar', function() {
			assert.equal(inflectors.pluralize('foofoo'), 'foofoos');
		});
		it('stats to stats', function() {
			assert.equal(inflectors.pluralize('stats'), 'stats');
		});
		it('status to status', function() {
			assert.equal(inflectors.pluralize('status'), 'status');
		});
	});
});
