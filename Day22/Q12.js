// 12. WAP to check whether a number is ARMSTRONG or not (1,153,370,371,407).

function armstrong(num) {
  let temp = num;
  let sum = 0;
  let count = 0;
  let rem;
  while (temp > 0) {
    temp = parseInt(temp / 10);
    count++;
  }
  temp = num;
  while (temp != 0) {
    rem = temp % 10;
    rem = rem ** count;
    sum = sum + rem;
    temp = parseInt(temp / 10);
  }
  if (sum === num) {
    console.log(`${num} is an Armstrong Number`);
  } else {
    console.log(`${num} is not an Armstrong Number`);
  }
}
armstrong(1);
armstrong(153);
armstrong(370);
armstrong(371);
armstrong(407);
armstrong(21);
armstrong(65);
