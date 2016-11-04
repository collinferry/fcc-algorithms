function pair(str) {

  var strand = ["A", "T", "C", "G"];
  var pair = ["T", "A", "G", "C"];

  var minorArray = str.split("");
  var majorArray = str.split("");
  var masterArray = [];

  var insert = 1;

  for (var i = 0; i < str.length; i++) {

    for (var c = 0; c < 4; c++) {

      if (minorArray[i] == strand[c]) {
        majorArray.splice(insert, 0, pair[c]);
      }

    }

   insert += 2;

  }

  while (majorArray.length) {
    masterArray.push(majorArray.splice(0,2));
}

  return masterArray;
}

pair("ATCGA");

// Notes: If setting majorArray = minorArray on line 7 the code breaks and I'm not sure why. 
