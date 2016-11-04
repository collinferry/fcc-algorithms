function translate(str) {

  function isVowel(c) {
    return ['a', 'e', 'i', 'o', 'u'].indexOf(c.toLowerCase()) !== -1;
  }

  var array = str.split("");

  if (isVowel(array[0]) === true) {

    str += "way";

  } else {

  while (isVowel(array[0]) !== true) {

      var mover = array[0];
      array.shift();
      array.push(mover);

    }

     array.push("ay");
     str = array.join("");

    }

  return str;

}

translate("california");
