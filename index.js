(function() {

	var root = this;

	var inflector = function(obj) {
		if (obj instanceof inflector) return obj;
		if (!(this instanceof inflector)) return new _(obj);
		this._wrapped = obj;
	};

	if (typeof exports !== 'undefined') {
		if (typeof module !== 'undefined' && module.exports) {
			exports = module.exports = inflector;
		}
		exports.inflector = inflector;
	} else {
		root.inflector = inflector;
	}

	var plurals = {};
	var singulars = undefined;

	// Add rule with plural form and singular form (overrides default patterns)
	inflector.addRule = function(plural, singular) {
		plurals[plural] = singular;
		_updateSingulars();
	};
	// Remove rule by plural form
	inflector.removeRule = function(plural) {
		delete plurals[plural];
		_updateSingulars();
	};

	// Pluralize, overriden by plural rules
	inflector.pluralize = function(name) {
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
	inflector.singularize = function(name) {
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
	inflector.classify = function(name) {
		return name.substring(0, 1).toUpperCase()+name.substring(1);
	};

	// Capitalize, upper case first character and lower case rest
	inflector.capitalize = function(name) {
		return name.substring(0, 1).toUpperCase()+name.substring(1).toLowerCase();
	};

}).call(this);
