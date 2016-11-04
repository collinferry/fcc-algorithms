function titleCase(str) {
  var lower = str.toLowerCase();
  var myArray = lower.split(" ");
  for (a = 0; a < myArray.length; a++){
    var firstletter = myArray[a].charAt(0);
    var bigLetter = firstletter.toUpperCase();
    var tinyArray = myArray[a].split("");
    tinyArray.shift();
    tinyArray.unshift(bigLetter);
    var newWord = tinyArray.reduce(function(a, b){
      return a + b;
    });
    myArray[a] = newWord;
  }
  var title = myArray.reduce(function(a, b){
    return a + " " + b;
  });
  return title;
}

titleCase("I'm a little tea pot");
