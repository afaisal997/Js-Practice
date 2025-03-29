// function test() {
//   console.log("Test Function");
//   test();
//   console.log("Back to test Function");
// }
// test();

let i = 0;
function test() {
  i++;
  console.log("Test Function");
  if (i <= 2) test();
  console.log("Back to test Function");
}
test();

function fib() {}
