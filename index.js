(function() {

	var root = this;

	var inflectors = function(obj) {
		if (obj instanceof inflectors) return obj;
		if (!(this instanceof inflectors)) return new _(obj);
		this._wrapped = obj;
	};

	if (typeof exports !== 'undefined') {
		if (typeof module !== 'undefined' && module.exports) {
			exports = module.exports = inflectors;
		}
		exports.inflectors = inflectors;
	} else {
		root.inflectors = inflectors;
	}

	var plurals = {};
	var singulars = undefined;

	// Add rule with plural form and singular form (overrides default patterns)
	inflectors.addRule = function(plural, singular) {
		plurals[plural] = singular;
		_updateSingulars();
	};
	// Remove rule by plural form
	inflectors.removeRule = function(plural) {
		delete plurals[plural];
		_updateSingulars();
	};

	// Pluralize, overriden by plural rules
	inflectors.pluralize = function(name) {
		if (plurals[name]) {
			return plurals[name];
		} else if (name.slice(-1) == 'y') {
			return name.substring(0, name.length - 1)+'ies';
		} else if (name.slice(-1) == 's') {
			return name+'es';
		} else if (name.slice(-3) == 'tch') {
			return name+'es';
		} else if (name.slice(-1) == 'x') {
			return name+'es';
		} else {
			return name+'s';
		}
	};

	// Singularize, overridden by singular rules (opposites of plural rules)
	inflectors.singularize = function(name) {
		if (!singulars) {
			_updateSingulars();
		}
		if (singulars[name]) {
			return singulars[name];
		} else if (name.slice(-3) == 'ies') {
			return name.substring(0, name.length-3)+'y';
		} else if (name.slice(-4) == 'uses') {
			return name.substring(0, name.length-1);
		} else if (name.slice(-3) == 'ses') {
			return name.substring(0, name.length-2);
		} else if (name.slice(-5) == 'tches') {
			return name.substring(0, name.length-2);
		} else if (name.slice(-3) == 'xes') {
			return name.substring(0, name.length-2);
		} else {
			return name.substring(0, name.length-1);
		}
	};

	// Clears singular rules and recreates from opposites of plural rules
	_updateSingulars = function() {
		singulars = {};
		for (var k in plurals) {
			if (!plurals.hasOwnProperty(k)) continue;
			singulars[plurals[k]] = k;
		}
	};

	// Classify, upper case first character and ignore rest
	inflectors.classify = function(name) {
		return name.substring(0, 1).toUpperCase()+name.substring(1);
	};

	// Capitalize, upper case first character and lower case rest
	inflectors.capitalize = function(name) {
		return name.substring(0, 1).toUpperCase()+name.substring(1).toLowerCase();
	};

}).call(this);
