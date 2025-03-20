// Q1) WAP To check entered number is prime or not

let num = Number(prompt("Enter a number: "));
let isPrime = true;

if (num === 1 || num === 0) {
  alert(`${num} is neither prime nor composite`);
} else if (num > 1) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    alert(`${num} is a prime number`);
  } else {
    alert(`${num} is not a prime number`);
  }
}
