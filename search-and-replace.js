function myReplace(str, before, after) {

 return str.replace(before, function() {

   if (before.charAt(0) == before.charAt(0).toUpperCase()) {

     var bigLetter = after.charAt(0).toUpperCase();
     after = after.replace(after.charAt(0), bigLetter);
     return after;

   } else {
     return after;
   }
 
 });

}

myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");
