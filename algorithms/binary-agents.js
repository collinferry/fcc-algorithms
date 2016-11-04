function binaryAgent(str) {

  var split = str.split(" ");
  var translate = [];

  for (var i = 0; i < split.length; i++){
    translate.push((String.fromCharCode(parseInt(split[i], 2))));
  }

  return translate.join("");
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");


// Note: Again, had to turn to StackOverflow and had to dig into what parseInt() actually does. The MDN page (http://mzl.la/1Ize5HY) does not explicitly state that a radix of '2' is required for binary integers. 
