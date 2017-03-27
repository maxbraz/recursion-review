// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
   
  var elements = [];

  // create a function that looks for matching className
  // if the index of the classList 
  var recursiveFindClass = function(node) {
    if (_.contains(node.classList, className)) {
      elements.push(node);
    } 
      
    if (node.childNodes.length) {
      _.each(node.childNodes, function(child) {
        recursiveFindClass(child);
      });
    }
  };

  recursiveFindClass(document.body);
  
  return elements;
};
