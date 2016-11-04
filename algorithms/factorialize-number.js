function factorialize(num) {
  if (num === 0) {
    return 1;
  }
  var limit = num;
  for (a = 1; a < limit; a++) {
    num *= a;
  }
  return num;
}

factorialize(5);
