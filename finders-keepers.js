function find(arr, func) {

  var searched = arr.filter(func);

  return searched[0];

}

find([1, 2, 3, 4], function(num){ return num % 2 === 0; });

// Note: Knocked this one out in 5 minutes. Whoo!
