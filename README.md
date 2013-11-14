Billy Inflector [![Build Status](https://travis-ci.org/billysbilling/billy-inflector.png)](https://travis-ci.org/billysbilling/billy-inflector)
===============

Pluralize, singularize, capitalize, classify, and so on..

Primarily extracted from [Billy Data](https://github.com/billysbilling/billy-data).

## Usage

### Node JS
```javascript
var inflector = require('billy-inflector');
console.log(inflector.pluralize('computer'));
```

## API

### Pluralize
Pluralize a string based on added rules and common patterns.

#### Example
```javascript
inflector.pluralize('entry'); //-> entries
```

### Singularize
Singularize a string based on added rules and common patterns.

#### Example
```javascript
inflector.singularize('fixes'); //-> fix
```

### Classify
Classify a string.

#### Example
```javascript
inflector.classify('accessLevel'); //-> AccessLevel
```

### Capitalize
Capitalize a string.

#### Example
```javascript
inflector.capitalize('watch'); //-> Watch
```
