//Q3) WAP to check whether a number is Neon Number or not

let num = Number(prompt("Enter a number: "));
// let num = 45;
let sum = 0;
let digit = 0;

let temp = num ** 2;
while (temp > 0) {
  digit = temp % 10;
  sum = sum + digit;
  temp = Math.floor(temp / 10);
}
if (sum === num) {
  //   console.log(`${num} is a Neon Number`);
  alert(`${num} is a Neon Number`);
} else {
  //   console.log(`${num} is not a Neon Number`);
  alert(`${num} is not a Neon Number`);
}
