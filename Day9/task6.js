//Q6) WAP to check whether a number is Palindrome number or not

let num = Number(prompt("Enter a Number: "));
// const num = 75257;

let temp = num;
let rev = 0;

while (temp != 0) {
  let rem = temp % 10;
  rev = rev * 10 + rem;
  temp = parseInt(temp / 10);
}
if (rev === num) {
  alert(`${num} is a Palindrome Number`);
  //   console.log(`${num} is a Palindrome Number`);
} else {
  alert(`${num} is not a Palindrome Number`);
  //   console.log(`${num} is not a Palindrome Number`);
}
