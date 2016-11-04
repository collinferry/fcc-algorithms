function pairwise(arr, arg) {

  var indexArray = [];
  var sum = 0;

  // Loop through arrays finding matches that add up to arg

  for (var a = 0; a < arr.length; a++) {

    var betterHalf = arg - arr[a]; // Defines the integer we should look for to pair with "a"

    for (var c = 0; c < arr.length; c++) {

      // If we find a match that isn't the same index...

      if ((c != a) && (arr[c] == betterHalf)) {

        // And if they haven't already been pushed to the index array...push them!

        if ((indexArray.indexOf(a) === -1) && (indexArray.indexOf(c) === -1)) {

            indexArray.push(a);
            indexArray.push(c);
        }

      }

    }

  }

  // Sum the indices (if there is an array to sum)

  if (indexArray.length > 0) {

    sum = indexArray.reduce(function(a, b) {
    return a + b;
  });

  }

  // And then...

  return sum;
}

pairwise([0, 0, 0, 0, 1, 1], 1);
