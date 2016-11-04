function add() {

  var sum = arguments[0];

  function checkNum(x) {

    if (typeof x !== "number") {
      return undefined;
    } else {
      return x;
    }

  }

  if (arguments.length > 1) {

     if (checkNum(arguments[0]) === undefined || checkNum(arguments[1]) === undefined) {

        return undefined;

    } else {

      return arguments[0] + arguments[1];

    }

  } else {

    if (checkNum(arguments[0])) {
      return function(y) {
        if (checkNum(arguments[0])) {
        return sum + y;
            } else {
            return undefined;
            }
      };

    } else {
      return undefined;
    }

  }
}

add(2)([3]);
