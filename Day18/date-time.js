// To Print Date and Time
// 1. 1st style : new Date() : return current date and time

var date = new Date();
// console.log(date.toString());
// console.log(date);

// 2. 2nd style : new Date(year, month, day, hour, minute, second, milisecond)

var a = new Date(2024, 3, 25, 9, 35, 20, 400);
var b = new Date(2024, 3, 25, 9, 35, 20);
var c = new Date(2024, 3, 25, 9, 35);
var d = new Date(2024, 3, 25, 9);
var e = new Date(2024, 3, 25);
var f = new Date(2024, 3);

console.log(a.toString());
console.log(b.toString());
console.log(c.toString());
console.log(d.toString());
console.log(e.toString());
console.log(f.toString());
