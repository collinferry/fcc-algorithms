function convert(str) {

  var i = str.length,
      charString = [],
      match = {
        38: "amp",
        60: "lt",
        62: "gt",
        34: "quot",
        39: "apos"};

  while (i--) {
    var loc = str[i].charCodeAt();
    if (loc == 38 || loc == 60 || loc == 62 || loc == 34 || loc == 39) {
      charString[i] = '&'+match[loc]+';';
    } else {
      charString[i] = str[i];
    }

   }
   return charString.join('');

}

convert("Dolce & Gabbana");

// Note: Well, this one got weird. I'm not sure if this is the cleanest way to do this, but it works, and I learned about using the .length/i-- condition on a while loop to run backward through an array. First time I've used an object in awhile too. Resource that helped: http://bit.ly/212jyR7 and
