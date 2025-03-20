// Q6) WAP to find  fibbonaci series 1 to 10

// OUTPUT 1 1 2 3 5 8

let first = 0;
let second = 1;
let fibb = 1;

while (fibb <= 10) {
  console.log(`${fibb}`);
  fibb = first + second;
  first = second;
  second = fibb;
}
