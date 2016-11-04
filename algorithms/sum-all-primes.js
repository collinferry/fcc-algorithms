function sumPrimes(num) {

  var sum = 0;
  var prime = [2];

// Loop to build out array of all prime numbers up to and including input integer

  for (var i = 3; i <= num; i++) {

  var check = false;

    for (var x = 2; x < i; x++) {

      if (i % x === 0) {
        check = true;
        break;
      }

    }

  if (check === false) {
      prime.push(i);
  }

  }

// Sum the array and return it

  sum = prime.reduce(function(a, b) {
    return a + b;
  });

  return sum;
}

sumPrimes(100);
