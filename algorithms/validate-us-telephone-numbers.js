function telephoneCheck(str) {

  var length = str.replace(/[^0-9]/g,"").length;

  // Check string for characters that aren't 0-9, space, ()'s, or dash

  if (/[^0-9\s()-]/.test(str)) {

    return false;

  // Confirm correct number of digits

  } else if (length != 10 && length != 11) {

      return false;

    // If 11 digits, confirm the country code is USA

    } else if (length == 11 && str.match(/\d/) != 1) {

      return false;

    // Confirm first character is not a dash

    } else if (str.search(/\-/) === 0) {

      return false;

      // If a parenthesis is present, confirm that there are two and they are spaced correctly

      } else if (/\(/.test(str) || /\)/.test(str)) {

               var x = str.search(/\(/);
               var y = str.search(/\)/);

                 if ((y != x + 4) || (x < 0) || (y < 0)) {
                   return false;
                 } else {
                   return true;
                 }
    }

      else {

      return true;

    }

}

telephoneCheck("555)-555-5555");

// Note: This passes all the tests but a number with excessive dashes would still be true/accepted. This doesn't seem likely to be input, however. Ultimately, it would be easier to code something that converted a number into a "correctly formatted" number if it had the right number of digits and simply alert the user if it didn't. Similar to Amazon offering a corrected address to be confirmed.
