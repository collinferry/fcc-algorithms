//

function permAlone(str) {

  // Function mimicking Heap's algorithm

  function permutate(str) {

    var arr = (str + '').split(''),
    permutations = [];

    function swap(a, b)
    {
      var tmp = arr[a];
      arr[a] = arr[b];
      arr[b] = tmp;
    }

    function generate(n) {
      if (n == 1) {
        permutations.push(arr.join());
      } else {
        for (var i = 0; i != n; ++i) {
          generate(n - 1);
          swap(n % 2 ? 0 : i, n - 1);
        }
      }
    }

    generate(arr.length);
    return permutations;

  }

  // End of Heap's Algorithm
  // Declare variable to absorb the results of the function

  var permutations = permutate(str);
  var current = "";
  var prev = "";
  var toRemove = [];

  // Remove the commas from the returned permutations

  for (var a = 0; a < permutations.length; a++) {

    permutations[a] = permutations[a].replace(/[^a-z]/g, "");

  }

  // Collect permutations with repeated consecutive letters

  for (var b = 0; b < permutations.length; b++) {

    for (var c = 0; c < permutations[b].length; c ++) {

      current = permutations[b].charAt(c);

      if (current == prev) {

        toRemove.push(b);
        break;

      }

      prev = current;

    }

    current = "";
    prev = "";

  }

  // Eliminate the collected permutations

  for (var d = toRemove.length - 1; d >= 0; d--) {

    permutations.splice(toRemove[d], 1);

  }

  // Count the length of the array, huzzah!

  return permutations.length;

}

permAlone("abfdefa");

/* Notes:
In a rare occurence I did need to check the hints to learn of Heap's algorithm and, after attempting to convert the psuedocode to JS myself and failing, I found this on StackOverflow: http://stackoverflow.com/a/27540053

This code runs noticeably slower than previous algorithm solutions due to running through the extensive loops in the checks.

Had to use "// " to override a potential infinite loop on line 51
*/
