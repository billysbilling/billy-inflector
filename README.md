Inflectors [![Build Status](https://travis-ci.org/billysbilling/inflectors.png)](https://travis-ci.org/billysbilling/inflectors)
===============

Pluralize, singularize, capitalize, classify, and so on..

Primarily extracted from [Billy Data](https://github.com/billysbilling/billy-data).

## Usage

### Node JS
NPM: `npm install inflectors`

```javascript
var inflectors = require('inflectors');
console.log(inflectors.pluralize('computer'));
```

## API

### Pluralize
Pluralize a string based on added rules and common patterns.

#### Example
```javascript
inflectors.pluralize('entry'); //-> entries
```

### Singularize
Singularize a string based on added rules and common patterns.

#### Example
```javascript
inflectors.singularize('fixes'); //-> fix
```

### Classify
Classify a string.

#### Example
```javascript
inflectors.classify('accessLevel'); //-> AccessLevel
```

### Capitalize
Capitalize a string.

#### Example
```javascript
inflectors.capitalize('watch'); //-> Watch
```
