// Funtion with no argument and no return value

// function fun1() {
//   var x = 10;
//   var y = 20;
//   console.log(x + y);
// }

// function test() {
//   fun1();
// }

// test();

// Funtion with no argument and return value

// function test() {
//   var x = 10;
//   var y = 20;
//   var c = x + y;
//   return c;
// }

// function show() {
//   var res = test();
//   console.log(res);
// }

// show();

// Funtion with argument and no return value

// function sum(x, y) {
//   var c = x + y;
//   console.log(c);
// }
// function test() {
//   let a = 10;
//   let b = 5;
//   sum(a, b);
// }
// test();

// Funtion with argument and no return value

// function sum(x, y) {
//   var c = x + y;
//   return c;
// }

// function show() {
//   let a = 10;
//   let b = 36;
//   let ans = sum(a, b);
//   console.log(ans);
// }

// show();

// Default funtion parameters

function test(a = 0, b = 0, c = 0) {
  console.log(`a = ${a} b = ${b} c = ${c}`);
}

test(11, 22, 33);
test(11, 22);
test(11);
test();

// function returning an Array

function test1() {
  return [11, 12, 13, 14];
}

console.log(test1());

// Anonymous function

let any = function () {
  console.log(`I am an Anonymous function`);
};

any();

// ARROW OF FAT ARROW FUNTION

var tes = () => console.log(`I am an Arrow funtion`);

tes();

const add = (x, y) => x + y;
{
  console.log(add(10, 20));
}
add();

// SELF INVOLKED FAT ARROW FUNCTION

((x, y) => console.log(x + y))(10, 20);
