function destroyer(arr) {
  var initialArray = Array.prototype.slice.call(arguments);
  initialArray.splice(0, 1);
  return arr.filter(function(a) {
    return initialArray.indexOf(a) === -1;
  });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
