function drop(arr, func) {

  var newArray = arr.filter(func);
  var cut = arr.indexOf(newArray[0]);

  if (newArray.length > 0) {

    arr = arr.slice(cut);

  } else {
      arr = [];
  }

  return arr;
}

drop([1, 2, 3, 4], function(n) {return n > 5;});

// Note: Owned this own fast too, got slowed down a bit by the empty array problem.
