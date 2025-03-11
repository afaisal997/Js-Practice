//Q2) WAP to print name of month according to days.

let days = prompt("Enter the number of days in a month: ");
switch (true) {
  case days == "31":
    alert(
      `There are ${days} days in these months January, March, May, July, August, October, December`
    );
    break;
  case days == "30":
    alert(
      `There are ${days} days in these months April, June, September, November`
    );
    break;
  case days == "28" || days == "29":
    alert(`There are ${days} days in February`);
    break;
  default:
    alert(`Invalid input`);
    break;
}
