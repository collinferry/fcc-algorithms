function end(str, target) {
 
  var endLength = str.length - target.length;
  var subString = str.substr(endLength);

  if (subString == target) {
    return true;
  }
  return false;

}

end("Bastian", "n");
