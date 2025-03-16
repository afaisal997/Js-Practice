//Q4) WAP to reverse number

let num = Number(prompt("Enter a number: "));
// let num = 12345543;
let reverse = 0;

while (num > 0) {
  let digit = num % 10;
  reverse = reverse * 10 + digit;
  num = parseInt(num / 10);
}
alert(`Reversed Number is ${reverse}`);
// console.log(reverse); // 34554321
