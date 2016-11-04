function mutation(arr) {
  var string = arr[0].toLowerCase();
  var string2 = arr[1].toLowerCase();

  for (a = 0; a < string2.length; a++) {
    if ((string.indexOf(string2[a]) < 0)) {
      return false;
    }

  }
  return true;

}

mutation(["heLLo", "HEY"]);
