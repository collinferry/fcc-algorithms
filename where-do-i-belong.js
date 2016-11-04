function where(arr, num) {

  var value = arguments[1];
  var index = 0;

  arr.sort(function(a, b) { //first sort the array with a function for numbers (vs strings)
    return a - b;
  });

  for (var i = 0; i < arr.length; i++) {
    if (value > arr[i] && value <= arr[i + 1] ) {
      index = i + 1;
    } else if (value > arr[arr.length-1]) {
      index = arr.length;
    }
  }

  return index;
}

where([2, 5, 10], 15); 
