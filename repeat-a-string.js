function repeat(str, num) {
  var flatString = str;
  if (num < 0) {
    return "";
  }
  for (a = 1; a < num; a++) {
    str = str + flatString;
  }
  return str;
}

repeat("abc", 3);
