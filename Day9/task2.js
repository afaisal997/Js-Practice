//Q2) WAP to count even and odd digits in a specific numbers

let num = Number(prompt("Enter a number: "));
// let num = 23;

let even = 0;
let odd = 0;

while (num > 0) {
  let digit = num % 10;
  if (digit % 2 === 0) {
    even++;
  } else {
    odd++;
  }
  num = Math.floor(num / 10);
}
alert(`Even: ${even}, Odd: ${odd}`);

// console.log(`Even: ${even}, Odd: ${odd}`);
