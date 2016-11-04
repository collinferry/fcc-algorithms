function fearNotLetter(str) {

  var start = str.charCodeAt(0);
  var missingCode = 0;
  var missingLetter = "";

  for (var i = 1; i < str.length; i++) {

    if (str.charCodeAt(i) != start + i) {
      missingCode = str.charCodeAt(i) - 1;
      break;
    }

    if ((str.charCodeAt(i) == start + i) && (i == str.length - 1)) {
        return undefined;
    }

  }

  missingLetter = String.fromCharCode(missingCode);

  return missingLetter;
}

fearNotLetter("bcd");

// Note: this is quite a bit easier since all the inputs are lowercase.
