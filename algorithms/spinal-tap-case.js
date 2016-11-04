function spinalCase(str) {

  if ((str.indexOf(" ") < 0) && (str.indexOf("_") < 0)) {
    str = str.replace(/[A-Z]/g, " \$&");
  }
  var newString = str.replace("/[A-Z]/").toLowerCase();
  var spinal = newString.replace(/[^A-Za-z0-9]/g, "-");
  return spinal;
}

spinalCase("thisIsSpinalTap");

// Note: It seems the toLowerCase() function but requires quotation marks becuse the function only accepts strings. The RegExp input still works.

// Perhaps a better way would be to code "if the capital letters are preceded by [a-z] add a space and lowercase, else if the capitals are preceded by a non-letter, replace the nonletter with space and lowercase."
