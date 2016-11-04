function steamroller(arr) {

  return arr.reduce(function (flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? steamroller(toFlatten) : toFlatten);
  }, []);
}

steamroller([1, [], [3, [[4]]]]);

/*
Note: struggled with accomplishing this via nested loops, ultimately learned of some new array methods on StackOverflow which made this much cleaner. Info here: http://bit.ly/1TouNUU
*/
