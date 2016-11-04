function drawer(price, cash, cid) {

  var change = cash - price;
  var drawerTotal = cid[0][1] + cid[1][1] + cid[2][1] + cid[3][1] + cid[4][1] + cid[5][1] + cid[6][1] + cid[7][1] + cid[8][1];
  var cashBack = [["PENNY", 0.00], ["NICKEL", 0.00], ["DIME", 0.00], ["QUARTER", 0.00], ["ONE", 0.00], ["FIVE", 0.00], ["TEN", 0.00], ["TWENTY", 0.00], ["ONE HUNDRED", 0.00]];
  var multiple = [0.01, 0.05, 0.10, 0.25, 1, 5, 10, 20, 100];

  var available;
  var toPay;
  var paid;

  // Initially check how the cash-in-drawer compares to the change and return the relevant string

  if (drawerTotal < change) {
    return "Insufficient Funds";
  } else if (drawerTotal == change) {
    return "Closed";
  } else {

    // Loop through each currency and calculate how much to return, updating the amount paid/toPay on each iteration

    for (var a = 8; a >= 0; a--) {

    available = cid[a][1];
    toPay = Math.floor(change / multiple[a]) * multiple[a];

      if (toPay <= available) {
      cashBack[a][1] = toPay;
        paid = toPay;
      } else {
        cashBack[a][1] = available;
        paid = available;
      }

    change -= paid;

    }

    // Due to floating point issues, we need to check for a loose penny

    if (change > 0 && change < 0.01) {
      cashBack[0][1] += 0.01;
    }

    // If there is still change owed that can't be paid

    if (change > 0.01) {
      return "Insufficient Funds";
    }

  }

  // Loop through cashback array and splice out any zero value currencies

  for (var b = 8; b >= 0; b--) {

    if (cashBack[b][1] === 0) {
      cashBack.splice(b, 1);
    }

  }

  // Now to reverse the order of the cashBack array to make it friendlier

  cashBack.reverse();

  // Finally, return the result!

  return cashBack;
}

drawer(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);


/* Notes:

Although the instructions say to return "insufficient funds" if the CID is less than the change due, it's a bit more complicated, because what they really mean is not "if the total in the drawer is too little", but if it's impossible to provide the correct change (for example, returning 50 cents when the drawer holds only a $1 bill). 

Also, we must also consider cases where an absence of one currency can be made up with another (for instance, someone needs 10 cents and we only have nickels).

It doesn't appear that the FCC checker cares if a result is returned as 0.5 instead of 0.50, which is great, because I can't figure out how to display an extra zero on the integer without converting it to a string.

Useful resource regarding decimal rounding and floating points: http://stackoverflow.com/a/2283670

*/
