// 11. WAP to check whether a number is NEON or not (1,9).
function neon(num) {
  let sum = 0;
  let digit = 0;
  let temp = num ** 2;
  while (temp > 0) {
    digit = temp % 10;
    sum = sum + digit;
    temp = Math.floor(temp / 10);
  }
  if (sum === num) {
    console.log(`${num} is a Neon Number`);
  } else {
    console.log(`${num} is not a Neon Number`);
  }
}
neon(9);
neon(1);
neon(5);
neon(7);
