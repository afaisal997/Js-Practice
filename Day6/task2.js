//WAP
// cost of egg = 7 Rs
// if someone purchases 1 t0 5 eggs then 1% discount
// if someone purchases 6 t0 12 eggs then 1.5% discount
// for more than 12 eggs then 2% discount

// OutPUT
// Egg price = ?
// Discount = ?
// Final PAy = ?

const eggPrice = 7;
let eggs = Number(prompt("Enter number of eggs: "));
let discount = 0;

if (eggs >= 1 && eggs <= 5) {
  discount = 1;
} else if (eggs >= 6 && eggs <= 12) {
  discount = 1.5;
} else {
  discount = 2;
}
let finalpay = eggs * eggPrice - eggs * eggPrice * (discount / 100);
alert(
  `Price of Egg = ${eggPrice}\nYour Total No. of Eggs = ${eggs}\nYour Egg price = ${
    eggs * eggPrice
  }\nYour Discount = ${discount}%\nFinal Pay = ${finalpay}`
);
