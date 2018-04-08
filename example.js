const checksorted = require('./index');

let myfun = function(prev, next) {
  return next.charCodeAt() - prev.charCodeAt();
}

console.log(checksorted(['a', 'b', 'f'], myfun)); // => true
console.log(checksorted(['c', 'z', 'm'], myfun)); // => false