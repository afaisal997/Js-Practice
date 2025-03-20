// function functionName(Parameters){
//     ----------------------------
//     ----------------------------
//     // code to be executed;
//     ----------------------------
//     ----------------------------
// }
// functionName();          //Calling of function
// functionName(Argument);  //Calling of function with argument

function display() {
  console.log(`Hello I'm a function`);
}
display();

function fun1() {
  console.log("Hello I'm fun1");
  fun2();
}
function fun2() {
  console.log("Hello I'm fun2");
  fun3();
}
function fun3() {
  console.log("Hello I'm fun3");
  fun4();
}
function fun4() {
  console.log("Hello I'm fun4");
}

fun1();
