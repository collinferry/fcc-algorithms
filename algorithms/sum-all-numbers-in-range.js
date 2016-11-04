function sumAll(arr) {

  var max = Math.max.apply(null, arr);
  var min = Math.min.apply(null, arr);
  var sum = 0;
  var myArray = [];

  for (i = min; i <= max; i++) {

    myArray.push(i);

  }

  sum = myArray.reduce(function(a, b) {
  return a + b;
  });

  return sum;
}

sumAll([1, 4]);
