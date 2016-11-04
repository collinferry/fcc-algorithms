function inventory(arr1, arr2) {

  var amount = 0;
  var updated = [];
  var finalInv = [];

  // Nested loops run through each array separately looking for matched items

  for (var x = 0; x < arr1.length; x++){

    for (var y = 0; y < arr2.length; y++){

      if (arr1[x][1] == arr2[y][1]) {

        // Push the matched item type to the array "updated" for later comparison

        updated.push(arr1[x][1]);

        // Add the amounts together and push the updated items to "finalInv"

        amount = (arr1[x][0] + arr2[y][0]);
        finalInv.push([amount, arr1[x][1]]);

      }
    }
  }

  // Loop through first array and push each unique item to finalInv (those which don't exist in "updated")

  for (var a = 0; a < arr1.length; a++) {

          if (updated.indexOf(arr1[a][1]) < 0) {
            finalInv.push(arr1[a]);
          }

        }

  // Repeat for second array

  for (var b = 0; b < arr2.length; b++) {

          if (updated.indexOf(arr2[b][1]) < 0) {
            finalInv.push(arr2[b]);
          }

        }

  // Sort finalInv alphabetically

  finalInv.sort(function(a,b) {
        return a[1] > b[1];
    });

  return finalInv;
}

inventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]);

/* 
Note: the checked returns are listing the arrays in alphabetical order by item

Resource that helped with sorting the inventory alphabetically: http://stackoverflow.com/a/16096900
*/
