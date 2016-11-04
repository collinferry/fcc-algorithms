function findLongestWord(str) {
  var wordArray = str.split(" ");
  var big = 0;
  for (a = 0; a < wordArray.length; a++) {
    if (wordArray[a].length > big) {
      big = wordArray[a].length;
    }
  }
  return big;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
