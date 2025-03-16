//Q5) WAP to check whether a number is Armstron number or not

let num = Number(prompt("Enter a Number: "));
// let num = 153;
let temp = num;
let sum = 0;
let count = 0;
let rem;
while (temp > 0) {
  temp = parseInt(temp / 10);
  count++;
}
console.log(count);
temp = num;
while (temp != 0) {
  rem = temp % 10;
  rem = rem ** count;
  sum = sum + rem;
  temp = parseInt(temp / 10);
}
console.log(sum);
if (sum === num) {
  //   console.log(`${num} is an Armstrong Number`);
  alert(`${num} is an Armstrong Number`);
} else {
  //   console.log(`${num} is not an Armstrong Number`);
  alert(`${num} is not an Armstrong Number`);
}
