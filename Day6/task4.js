// WAP to print name of month according to days

numberOfDays = Number(prompt("Enter number of days: "));
if (numberOfDays === 28 || numberOfDays === 29) {
  alert(`February`);
} else if (numberOfDays === 30) {
  alert(`April, June, September, November`);
} else if (numberOfDays === 31) {
  alert(`January, March, May, July, August, October, December`);
} else {
  alert(`Invalid number of days`);
}
