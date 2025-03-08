// WAP to smaller number between three numbers.

let num1 = Number(prompt("Enter first number"));
let num2 = Number(prompt("Enter second number"));
let num3 = Number(prompt("Enter third number"));

if (num1 < num2 && num1 < num3) {
  alert(`${num1} is the smallest number`);
} else if (num2 < num1 && num2 < num3) {
  alert(`${num2} is the smallest number`);
} else {
  alert(`${num3} is the smallest number`);
}
