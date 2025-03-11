var num1 = Number(prompt("Enter first number: "));
var num2 = Number(prompt("Enter second number: "));
var operator = prompt(
  "Press + for addition\nPress - for subtraction\nPress * for multiplication\nPress / for division \nPress % for modulus \nPress ** for power\n"
);

switch (operator) {
  case "+":
    alert(`${num1} + ${num2} is ${num1 + num2}`);
    break;
  case "-":
    alert(`${num1} - ${num2} is ${num1 - num2}`);
    break;
  case "*":
    alert(`${num1} * ${num2} is ${num1 * num2}`);
    break;
  case "/":
    alert(`${num1} / ${num2} is ${num1 / num2}`);
    break;
  case "%":
    alert(`${num1} % ${num2} is ${num1 % num2}`);
    break;
  case "**":
    alert(`${num1} ** ${num2} is ${num1 ** num2}`);
    break;
  default:
    alert("Invalid operator");
    break;
}
