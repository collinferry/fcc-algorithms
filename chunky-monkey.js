function chunk(arr, size) {
  var bigArray = [];
  var count = 0;

  for (a = 0; a < (arr.length / size); a++) {
  bigArray[a] = [];

    for (b = count; b < count + size; b++){
      if (arr[b] || arr[b] === 0) {
      bigArray[a].push(arr[b]);
      }
    }

   count += size;
  }

  return bigArray;
}

chunk([0, 1, 2, 3, 4, 5, 6, 7, 8], 4);
