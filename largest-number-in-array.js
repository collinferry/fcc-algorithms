function largestOfFour(arr) {

 var maxArray = []; 
  
 for (var i=0; i<arr.length; i++) {
   var thisArray = arr[i];
   
   thisArray.sort(function(a,b) {
     return a-b;
   });
   
   maxArray.push(thisArray[thisArray.length-1]);
 }
  
 return maxArray; 
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
