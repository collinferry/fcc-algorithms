function bouncer(arr) {
  var cleanArray = [];
  for (a = 0; a < arr.length; a++) {
    if (Boolean(arr[a]) === true) {
     cleanArray.push(arr[a]);
  }  
}
  return cleanArray;
}

bouncer([7, "ate", false, 9, 18, 24, "people"]);
