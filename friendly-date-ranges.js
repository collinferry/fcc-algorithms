function friendly(arr) {

  // Create objects to hold the individual date values and range

  var firstDate = {
  year: arr[0].slice(0, 4),
  month: arr[0].slice(5, 7),
  day: parseInt(arr[0].slice(8, 11), 10)
  };

  var secondDate = {
  year: arr[1].slice(0, 4),
  month: arr[1].slice(5, 7),
  day: parseInt(arr[1].slice(8, 11), 10)
  };

  var months = {'01':'January', '02':'February', '03':'March', '04':'April', '05':'May', '06':'June', '07':'July', '08':'August', '09':'September', '10':'October', '11':'November', '12':'December'};

  // Function to calculate the number of days between two dates

  function daysBetween(first, second) {

    // Copy date parts of the timestamps, discarding the time parts.
    var one = new Date(firstDate.year, firstDate.month, firstDate.day);
    var two = new Date(secondDate.year, secondDate.month, secondDate.day);

    // Do the math.
    var millisecondsPerDay = 1000 * 60 * 60 * 24;
    var millisBetween = two.getTime() - one.getTime();
    var days = millisBetween / millisecondsPerDay;

    // Round down.
    return Math.floor(days);
}

  // Assign a range variable with the days between the two dates

  var range = daysBetween(firstDate, secondDate);

  // Function to calculate friendly dates

  function getOrdinal(n) {
    var s=["th","st","nd","rd"],
    v=n%100;
    return n+(s[(v-20)%10]||s[v]||s[0]);
  }

  // Convert all values to friend values

  firstDate.day = getOrdinal(firstDate.day);
  secondDate.day = getOrdinal(secondDate.day);
  firstDate.month = months[firstDate.month] + " ";
  secondDate.month = months[secondDate.month] + " ";

  // If the range begins this year (2016) and is under a year, clear the year to prevent it from displaying

  if (firstDate.year == 2016 && range < 365) {
    firstDate.year = "";
  } else {
    firstDate.year = ", " + firstDate.year;
  }

  // If the range is less than one year, clear the  second year to prevent it from displaying

   if (range < 365) {
    secondDate.year = "";
  } else {
    secondDate.year = ", " + secondDate.year;
  }

  // If the second date is in the same month, clear the second month

  if (firstDate.month == secondDate.month && firstDate.year == secondDate.year) {
    secondDate.month = "";
  }

  // Create final dates in a friendly format and generate strings

  var firstFinal = firstDate.month + firstDate.day + firstDate.year;
  var secondFinal = secondDate.month + secondDate.day + secondDate.year;
  var finalFriend = [firstFinal, secondFinal];

  // Finally, if the dates are identitcal for some fool reason, clear the second date!

  if (range === 0) {
    finalFriend = [firstFinal];
  }

  return finalFriend;

}

friendly(["2018-01-13", "2018-01-13"]);

/* First impressions: This assignment is ugly and non-intuitive. Even if these things can be "inferred" the resulting output isn't useful or human friendly.

Initially I tried to calculate the range in days/months/years with simple math, but ultimately found a better solution in the form of a function for calculating the days alone: http://stackoverflow.com/a/2483476

Also, I was going to create an ugly array to map the friendly days (ie 1st, 2nd, 3rd) but found a cleaner function here: http://stackoverflow.com/a/2483476

*/
