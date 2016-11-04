function largestOfFour(arr) {

  var bigArray = [1, 1, 1, 1];
  var bigNumber = 0;

  for (a = 0; a < arr.length; a++) {
      arr[a].sort(function(c, d) {
        return c - d;
      });
      bigArray[a] = arr[a][3];
      }

  return bigArray;
}

largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
