function convert(num) {

  var roman = [];
  var romanOnes = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
  var romanTens = ["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
  var romanHundreds = ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];

  var thousands = Math.floor(num / 1000);
  var hundreds = Math.floor((num % 1000)/100) - 1;
  var tens = Math.floor((num % 100)/10) - 1;
  var ones = Math.floor((num % 10)) - 1;

  for (i = 0; i < thousands; i++) {
    roman.push("M");
  }

  roman.push(romanHundreds[hundreds]);
  roman.push(romanTens[tens]);
  roman.push(romanOnes[ones]);

  var finalRoman = roman.join("");

 return finalRoman;
}

convert(3999);

// Notes: "-1" is added onto the ones/tens/hundreds for the array call further down. The thousands variable is left alone because it's fancified with a for loop. This will not work for numerals larger than 3999. //
