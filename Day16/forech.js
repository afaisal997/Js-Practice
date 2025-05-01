let arr = [11, 22, 33, 24, 55, 66];
let sum = 0;

arr.forEach(myFun);

function myFun(item) {
  sum = sum + item;
}
console.log(sum);
