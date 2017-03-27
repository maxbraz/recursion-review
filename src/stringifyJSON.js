// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  //find out the data type number, strings, boolean, function, undefined, and null
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

  //if the constructor is an array
  if (Array.isArray(obj)) {
  	var tempArray = [];

  	obj.forEach(function(element) {
  		tempArray.push(stringifyJSON(element))
  	});

  	return '[' + tempArray.toString() + ']';
  }

  //if the constructor is an object
  if (obj.constructor === Object) {
  	var objectString = '{';
  	console.log(objectString)



  	for (var key in obj) {
  		if (key === undefined) {
  			return '{}';
  		}
  		console.log(key)
  		objectString += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',';
  	}

  	objectString = objectString.slice(0, -1);
  	return objectString
  }
};
