var assert = require('assert'),
    inflectors = require('../index');

describe('singularize', function() {
	describe('standard', function() {
		it('ids to id', function() {
			assert.equal(inflectors.singularize('ids'), 'id');
		});
		it('entries to entry', function() {
			assert.equal(inflectors.singularize('entries'), 'entry');
		});
		it('prefixes to prefix', function() {
			assert.equal(inflectors.singularize('prefixes'), 'prefix');
		});
		it('watches to watch', function() {
			assert.equal(inflectors.singularize('watches'), 'watch');
		});
		it('houses to house', function() {
			assert.equal(inflectors.singularize('houses'), 'house');
		});
		it('stats to stat', function() {
			assert.equal(inflectors.singularize('stats'), 'stat');
		});
		it('invoices to invoice', function() {
			assert.equal(inflectors.singularize('invoices'), 'invoice');
		});
		it('invoiceLines to invoiceLine', function() {
			assert.equal(inflectors.singularize('invoiceLines'), 'invoiceLine');
		});
		it('countries to country', function() {
			assert.equal(inflectors.singularize('countries'), 'country');
		});
		it('currencies to currency', function() {
			assert.equal(inflectors.singularize('currencies'), 'currency');
		});
		it('accesses to access', function() {
			assert.equal(inflectors.singularize('accesses'), 'access');
		});
		it('batches to batch', function() {
			assert.equal(inflectors.singularize('batches'), 'batch');
		});
		it('bankLineMatches to bankLineMatch', function() {
			assert.equal(inflectors.singularize('bankLineMatches'), 'bankLineMatch');
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
		it('bar to foo', function() {
			assert.equal(inflectors.singularize('bar'), 'foo');
		});
		it('barbar to barba, not foofoo', function() {
			assert.equal(inflectors.singularize('barbar'), 'barba');
		});
		it('stats to stats', function() {
			assert.equal(inflectors.singularize('stats'), 'stats');
		});
		it('status to status', function() {
			assert.equal(inflectors.singularize('status'), 'status');
		});
	});
});
