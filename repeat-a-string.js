function repeatStringNumTimes(str, num) {
  var final = '';
  
  while (num > 0) {
    final += str;
    num--;
  }

  return final;
}
