function truncate(str, num) {

  var newString = "";

  if (num >= str.length) {
    return str;
  }

  if (num > 3) {
  newString = str.slice(0, num - 3);
  newString = newString + "...";
  } else {
  newString = str.slice(0, num);
  newString = newString + "...";
  }

  return newString;
}

truncate("A-tisket a-tasket A green and yellow basket", 11);
