// Q1 WAP  to swap a given number without third variable.

let a = Number(prompt("Enter the 1st number"));
let b = Number(prompt("Enter the 2nd number"));
alert(`Before Swapping\na = ${a} b = ${b}`);

a = a + b;
b = a - b;
a = a - b;

alert(`After Swapping\na = ${a} b = ${b}\n`);

// Q2 WAP to create simple calculator (+, -, /, *, %, **)
let num1 = Number(prompt("Enter the 1st number"));
let num2 = Number(prompt("Enter the 2nd number"));
let operator = prompt("Enter the operator (+, -, /, *, %, **)");
switch (operator) {
  case "+":
    alert(`Result = ${num1 + num2}`);
    break;
  case "-":
    alert(`Result = ${num1 - num2}`);
    break;
  case "/":
    if (num2 != 0) {
      alert(`Result = ${num1 / num2}`);
    } else {
      alert("Error! Division by zero is not allowed");
    }
    break;
  case "*":
    alert(`Result = ${num1 * num2}`);
    break;
  case "%":
    alert(`Result = ${num1 % num2}`);
    break;
  case "**":
    alert(`Result = ${num1 ** num2}`);
    break;
  default:
    alert("Invalid operator");
    break;
}

// Q3 WAP to find sqaure of a given number

let num = Number(prompt("Enter the number "))
let square = num ** 2;
alert(`Sqaure of ${num} is ${square}`)