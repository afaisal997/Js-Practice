//Q4) WAP to find a factorial of a given number

let num = Number(prompt("Enter a number: "));
let fact = 1;
for (let i = 1; i <= num; i++) {
  fact = fact * i;
}
alert(`Factorial of ${num} is ${fact}`);
// Output: Factorial of 5 is 120
