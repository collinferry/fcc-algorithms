function rot13(str) {
  var alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var november = "NOPQRSTUVWXYZABCDEFGHIJKLM";

  var inputArray = str.split('');
  var outputArray = [];

  for (a = 0; a < inputArray.length; a++) {
    var tempChar = inputArray[a];
    var index = alpha.indexOf(tempChar);
    if (index >= 0) {
    outputArray[a] = november[index];
    } else {
      outputArray[a] = inputArray[a];
    }
  }
  var solution = outputArray.join('');

  return solution;
}

rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.");
