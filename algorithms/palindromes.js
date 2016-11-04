function palindrome(str) {
  var small = str.toLowerCase();
  var alpha = small.replace(/\W/g, ''); //removing all non-alphanumeric characters
  var beta = alpha.replace(/_/, '');    //except underscores which are removed here
  var splitArray = beta.split("");
  splitArray.reverse();
  var backward = splitArray.reduce(function (a, b) {
    return a + b;
  });
  if (backward == beta) {
    return true;
  }
  return false;
}

palindrome("0_0 (: /-\ :) 0-0");
