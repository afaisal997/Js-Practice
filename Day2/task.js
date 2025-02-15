// Q1 WAP  to swap a given number without third variable.

let a = 10;
let b = 20;
console.log(`Before Swapping\na = ${a} b = ${b}`);

a = a+b;
b = a-b;
a = a-b;

console.log(`After Swapping\na = ${a} b = ${b}\n`);

// Q2 WAP to swap a given number with third varible.

a = 10;
b = 20;
let temp;
console.log(`Before Swapping\na = ${a} b = ${b}`);

temp = a;
a=b;
b=temp;
console.log(`After Swapping\na = ${a} b = ${b}\n`);

// WAP to print area of circle. 

let radius = 3;
let area = (3.14 * radius * radius).toFixed(2);
console.log(`Area of Circle is ${area}\n`);

// WAP to print area of rectangle.
let length = 7;
let breadth = 5;

area = length * breadth ;
console.log(`Area of Rectangle is ${area}\n`);

// WAP to print area of square.
let side = 12;
area = side * side;
console.log(`Area of Square is ${area}\n`);

