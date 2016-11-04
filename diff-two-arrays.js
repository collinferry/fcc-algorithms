function diff(arr1, arr2) {

  var newArr = [];

  for (i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) < 0) {
      newArr.push(arr1[i]);
    }
  }

  for (i = 0; i < arr2.length; i++) {
   if (arr1.indexOf(arr2[i]) < 0) {
     newArr.push(arr2[i]);
   }
  }

  return newArr;
}

diff([], ["snuffleupagus", "cookie monster", "elmo"]);
