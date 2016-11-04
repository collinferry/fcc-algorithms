function sym(args) {

  var finalArray = Array.prototype.slice.call(arguments);

  //Function returns only the unique values present in one of the two arrays

  function symmDiff(firstArray, secondArray) {

    // Variables to hold values unique to their respective arrays

    var firstBin = secondArray.filter(function(value) {
      return firstArray.indexOf(value) === -1;
    });

    var secondBin = firstArray.filter(function(value) {
      return secondArray.indexOf(value) === -1;
    });

    // Combine the arrays and filter again for unique values

    var uniques = secondBin.concat(firstBin).filter(function(value, index, array) {
        return array.indexOf(value) === index;
    });

    return uniques;
  }

  // Filter out all those that aren't unique, leaving the symmetric difference

  return finalArray.reduce(symmDiff);

}

sym([1, 2, 3], [5, 2, 1, 4]);


/* Notes

Resource that finally made it all click: http://stackoverflow.com/a/35748989

Lesson learned for the nth time: Always look through the checks/returns and think them through. In my original solution I didn't think about accidently removing a duplicate that appeared twice in one array.

Other lesson learned when working with arrays: Combine them into a nested array to manipulate them, then use .reduce to break them back apart again. This avoids the initial problems I had from just concatenating them.

*/
