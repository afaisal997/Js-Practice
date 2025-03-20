// Q3) WAP to create simple calculator (+,-,\,*,%,**)

let num1 = Number(prompt("Enter first number: "));
let num2 = Number(prompt("Enter second number: "));
let operator = prompt("Enter operator: ");
let result = 0;
if (operator == "+") {
  result = num1 + num2;
} else if (operator == "-") {
  result = num1 - num2;
} else if (operator == "*") {
  result = num1 * num2;
} else if (operator == "/") {
  result = num1 / num2;
} else if (operator == "%") {
  result = num1 % num2;
} else if (operator == "**") {
  result = num1 ** num2;
} else {
  result = "Invalid operator";
}
alert(result);
alert(`Result = ${result}`);
