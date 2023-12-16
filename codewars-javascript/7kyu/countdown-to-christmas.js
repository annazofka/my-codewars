// // Instructions:
// Polly is 8 years old. She is eagerly awaiting Christmas as she has a bone to pick with Santa Claus. Last year she asked for a horse, and he brought her a dolls house. Understandably she is livid.
// The days seem to drag and drag so Polly asks her friend to help her keep count of how long it is until Christmas, in days. She will start counting from the first of December.
// Your function should take 1 argument (a Date object) which will be the day of the year it is currently. The function should then work out how many days it is until Christmas.
// Watch out for leap years!

// My solution:
function daysUntilChristmas(days) {
  let christmasDay = new Date(days.getFullYear(), 11, 25);
  if (days > christmasDay) {
    christmasDay = new Date(days.getFullYear() + 1, 11, 25);
  }
  return Math.ceil(
    Math.abs((christmasDay.getTime() - days.getTime()) / (24 * 60 * 60 * 1000))
  );
}

// Other solutions 1:
function daysUntilChristmas(date) {
  var is_passed = date.getMonth() == 11 && date.getDate() > 25;
  var next = new Date(date.getFullYear() + +is_passed, 11, 25);
  return (next - date) / 86400000;
}

// Other solutions 2:
function daysUntilChristmas(date) {
  var xmas = new Date(date.getFullYear(), 11, 25),
    nextYear = false;
  if (date > xmas) {
    xmas.setFullYear(xmas.getFullYear() + 1);
    nextYear = true;
  }
  var days = (Math.abs(xmas - date) / (24 * 3600 * 1e3)) % 365;
  return days == 0 && nextYear ? 365 : days;
}

// Other solutions 3:
function daysUntilChristmas(days) {
  let currentYear = days.getFullYear();
  let targetDate = new Date(currentYear, 11, 25);
  let result = (targetDate - days) / 1000 / 60 / 60 / 24;

  if (result < 0) {
    currentYear++;
    targetDate = new Date(currentYear, 11, 25);
    result = (targetDate - days) / 1000 / 60 / 60 / 24;
  }

  return result;
}

// Other solutions 4:
function daysUntilChristmas(days) {
  let arr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  let year = days.getFullYear();
  let month = days.getMonth();
  let day = days.getDate();
  let res = 0;

  arr[1] = (year % 100 == 0 ? year % 400 : year % 4) == 0 ? 29 : 28;

  if (month == 11 && day > 25) {
    res =
      (((year + 1) % 100 == 0 ? (year + 1) % 400 : (year + 1) % 4) == 0
        ? 366
        : 365) -
      (day - 25);
  } else {
    res = arr.slice(month, 11).reduce((a, b) => a + b, 0) + 25 - day;
  }

  return res;
}
