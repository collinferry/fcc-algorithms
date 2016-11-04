function sumFibs(num) {

  var y = 0;
  var sum = 0;
  var fib = [1, 1, 2];

  // Run a loop that fills out the Fibonacci array
  for (var x = 2; fib[x] <= num; x++) {
    y = (fib[x] + fib[x-1]);
    fib.push(y);
  }

  //Run a loop that adds each off member of array to sum
  for (var z = 0; z < fib.length - 1; z++) {
    if (fib[z] % 2 !== 0) {
      sum += fib[z];
    }
  }

  return sum;
}

sumFibs(8);
