function confirmEnding(str, target) {
  
  var ending = str.substr(str.length-target.length);
  
  if (ending == target) { return true; } else { return false; }

}
