// Q1 WAP  to swap a given number without third variable.

let a = Number(prompt("Enter the 1st number"))
let b = Number(prompt("Enter the 2nd number"))
alert(`Before Swapping\na = ${a} b = ${b}`);

a = a+b;
b = a-b;
a = a-b;

alert(`After Swapping\na = ${a} b = ${b}\n`)

// Q2 WAP to swap a given number with third varible.

a = Number(prompt("Enter the 1st number"));
b = Number(prompt("Enter the 2nd number"))
let temp;
alert(`Before Swapping\na = ${a} b = ${b}`);

temp = a;
a=b;
b=temp;
alert(`After Swapping\na = ${a} b = ${b}\n`);

// WAP to print area of circle. 

let radius = Number(prompt("Enter the radius"));
let area = (3.14 * radius * radius).toFixed(2);
alert(`Area of Circle is ${area}\n`);

// WAP to print area of rectangle.
let length = Number(prompt("Enter the length"));
let breadth = Number(prompt("Enter the breadth"));

area = length * breadth ;
alert(`Area of Rectangle is ${area}\n`);

// WAP to print area of square.
let side = Number(prompt("Enter the side"));
area = side * side;
alert(`Area of Square is ${area}\n`);

