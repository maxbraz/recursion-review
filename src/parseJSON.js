// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // your code goes here
  
  var determineDataType = function(str) {
  	if (str === "null") {
  		return null;
  	}

  	if ((str === "true") || (str === "false")) {
  		return Boolean(str);
  	} 
  }


  var findAllIndices = function(str, char) {
    var indicesOfChar = [];
    var charArray = str.split('');
    _.each(charArray, function(x, i) {
    	if (x === char) {
          indicesOfChar.push(i); 
    	}
    });
    return indicesOfChar;
  }  
  
  // if see '[' convert to array
  if (json.indexOf('[') !== -1) {
  	var arrContainer = [];
  	if (findAllIndices(json, ',') === []) {
      // pass
  	}
  	return arrContainer;
  }

  // of see '{' convert to object

  
  // if see '"' convert to string 
};
