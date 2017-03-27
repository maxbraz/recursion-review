// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (typeof(obj) === 'number') {
  	return obj.toString();
  }

  if (obj === null) {
  	return '' + obj;
  }

  if (typeof(obj) === 'boolean') {
  	return obj.toString();
  }

  if (typeof(obj) === 'string') {
  	return '"' + obj + '"';
  }

  if (Array.isArray(obj)) {
  	var tempArray = [];

  	obj.forEach(function(element) {
  		tempArray.push(stringifyJSON(element))
  	});

  	return '[' + tempArray.toString() + ']';
  }

  if (obj === Object(obj)) {
  	var objectString = '{';

  	if (Object.keys(obj).length === 0) {
  		return '{}';
  	}

  	for (var key in obj) {

  		if (obj[key] === undefined || typeof(obj[key]) === 'function'){
  		  continue;
  		} 
  		
  		objectString += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',';
  	}

  	if (objectString.slice(-1) === ',') { 
  		objectString = objectString.slice(0, -1) ;
    }

  	return objectString + '}';
  }
};