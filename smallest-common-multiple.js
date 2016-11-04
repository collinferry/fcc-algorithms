function smallestCommons(arr) {

 //Get the larger number of the input aray

 var big = Math.max.apply(null, arr);
 var fullArray = [];
 var checker = 0;
 var multiple = big;

 // Create a full array sequencing from one to max

 for (var i = 1; i <=big; i++) {
   fullArray.push(i);
 }

//Check each multiple of the max for divisibility by each array member, return the first one that's true for the entire array.

var max = Math.pow(big, big - 1);

for (var c = 0; c < max; c++) {

  checker = 0;

  for (var a = 0; a <= fullArray.length; a++) {

    if (multiple % fullArray[a] === 0) {
      checker += 1;
    }

  }

  if (checker == fullArray.length) {

    return multiple;

  } else {

    multiple += big;

  }

}

  return multiple;
}


smallestCommons([1,5]);


// Note: Originally attempted to build a second array for comparison (instead of using the checker varaible) but damn, that was foolish and got messy quick. I guess I've learned to go wild with nested loops but otherwise keep-it-simple-stupid. I'm also not sure if the "max" needs to be that large.
