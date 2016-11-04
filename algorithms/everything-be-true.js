function every(collection, pre) {

  var truth = true;

  for (var i = 0; i < collection.length; i++) {

    var bool = Boolean(collection[i][pre]);

    if (bool === false) {
      truth = false;
    }

  }

  return truth;
}

every([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");


// Note: At first I was failing because I tried using dot notation for the 'pre' variable in the Boolean function.
