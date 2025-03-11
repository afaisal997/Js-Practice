//Q3) WAP to sum of even and odd numbers in specific Range

let startNum = Number(prompt("Enter the starting number: "));
let endNum = Number(prompt("Enter the ending number: "));
let evenSum = 0;
let oddSum = 0;

for (let i = startNum; i <= endNum; i++) {
  if (i % 2 === 0) {
    evenSum += i;
  } else {
    oddSum += i;
  }
}
alert(
  `Sum of even numbers from ${startNum} to ${endNum} is ${evenSum}\nSum of odd numbers from ${startNum} to ${endNum} is ${oddSum}`
);
