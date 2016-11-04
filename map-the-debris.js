function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;

  for (var a = 0; a < arr.length; a++) {

    var axis = arr[a].avgAlt + (earthRadius);
    var orbital = Math.round((2 * Math.PI) * (Math.sqrt(Math.pow(axis, 3) / GM)));

    delete arr[a].avgAlt;
    arr[a].orbitalPeriod = orbital;

  }

  return arr;

}

orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]);

// Notes: Required orbital period equation found on Wikipedia here: http://bit.ly/1QBs32K
