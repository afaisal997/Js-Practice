// 10. WAP to find factorial of a number.

let num = 0;
function fact(num) {
  let facto = 1;
  for (let i = 1; i <= num; i++) {
    facto = facto * i;
  }
  return facto;
}
console.log(fact(5));
console.log(fact(6));
