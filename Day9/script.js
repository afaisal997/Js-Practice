do {
  var num1 = parseInt(prompt("Enter a number: "));
  var num2 = parseInt(prompt("Enter another number: "));
  let rest = num1 + num2;
  alert(`The sum of ${num1} and ${num2} is ${rest}`);
  var cont = prompt("Do you want to continue? (y/n)");
} while (cont == "y" || cont == "Y");
alert("Thanks for using our services!");
