var assert = require('assert'),
    inflector = require('../index');

describe('singularize', function() {
	describe('standard', function() {
		it('ids to id', function() {
			assert.equal(inflector.singularize('ids'), 'id');
		});
		it('entries to entry', function() {
			assert.equal(inflector.singularize('entries'), 'entry');
		});
		it('prefixes to prefix', function() {
			assert.equal(inflector.singularize('prefixes'), 'prefix');
		});
		it('watches to watch', function() {
			assert.equal(inflector.singularize('watches'), 'watch');
		});
		it('houses to house', function() {
			assert.equal(inflector.singularize('houses'), 'house');
		});
		it('stats to stat', function() {
			assert.equal(inflector.singularize('stats'), 'stat');
		});
		it('invoices to invoice', function() {
			assert.equal(inflector.singularize('invoices'), 'invoice');
		});
		it('invoiceLines to invoiceLine', function() {
			assert.equal(inflector.singularize('invoiceLines'), 'invoiceLine');
		});
		it('countries to country', function() {
			assert.equal(inflector.singularize('countries'), 'country');
		});
		it('currencies to currency', function() {
			assert.equal(inflector.singularize('currencies'), 'currency');
		});
		it('accesses to access', function() {
			assert.equal(inflector.singularize('accesses'), 'access');
		});
		it('batches to batch', function() {
			assert.equal(inflector.singularize('batches'), 'batch');
		});
		it('bankLineMatches to bankLineMatch', function() {
			assert.equal(inflector.singularize('bankLineMatches'), 'bankLineMatch');
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
		it('bar to foo', function() {
			assert.equal(inflector.singularize('bar'), 'foo');
		});
		it('barbar to barba, not foofoo', function() {
			assert.equal(inflector.singularize('barbar'), 'barba');
		});
		it('stats to stats', function() {
			assert.equal(inflector.singularize('stats'), 'stats');
		});
		it('status to status', function() {
			assert.equal(inflector.singularize('status'), 'status');
		});
	});
});
