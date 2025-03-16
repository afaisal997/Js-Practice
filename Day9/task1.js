//Q1) WAP to sum of odd numbers in a specific Range using while loop

let num1 = parseInt(prompt("Enter the first number: "));
let num2 = parseInt(prompt("Enter the second number: "));
let sum = 0;
let odd = "";

while (num1 <= num2) {
  if (num1 % 2 != 0) {
    odd = odd + `${num1} `;
    sum += num1;
  }

  num1++;
}
alert(`Odd numbers are: ${odd} \nSum of odd numbers is: ${sum}`);
