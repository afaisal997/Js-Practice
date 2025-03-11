//Q1) WAP to print name of weekday using Switch Statement.

let day = prompt("Enter a number between 1 to 7");
switch (day) {
  case "1":
    alert("Monday");
    break;
  case "2":
    alert(`Tuesday`);
    break;
  case "3":
    alert(`Wednesday`);
    break;
  case "4":
    alert(`Thursday`);
    break;
  case "5":
    alert(`Friday`);
    break;
  case "6":
    alert(`Saturday`);
    break;
  case "7":
    alert(`Sunday`);
    break;
  default:
    alert(`Invalid Input`);
    break;
}
