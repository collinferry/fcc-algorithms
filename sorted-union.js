function unite(arr1, arr2, arr3) {

  var args = (arguments.length === 1?[arguments[0]]:Array.apply(null, arguments));
  var flatArgs = args.reduce(function(a, b) {
  return a.concat(b);
}, []);

  var united = flatArgs.reduce(function(a,b){
    if (a.indexOf(b) < 0 ) a.push(b);
    return a;
  },[]);

  return united;
}

unite([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]);

// Note: Learned a valuable use-case for nesting an "if" statement inside a .reduce function. Examples at http://bit.ly/1GfEhsu
