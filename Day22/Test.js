// // 1. WAP to convert a string to uppercase or lowercase in JavaScript.

// let a = "ABDULLAH";
// let b = "faisal";
// console.log(a.toLowerCase());
// console.log(b.toUpperCase());

// // 2. WAP to Replace a substring within a string in Js.

// let a = "hello Everyone";
// console.log(a.replace("hello", "Good Morning"));

// // 3. What is the difference between slice() and substring()? explain with an example.

// // slice() and substring() both are used to extract a section of a string and return it as a new string. The difference between them is that slice() is used to extract a section of a string and return it as a new string, whereas substring() is used to extract a section of a string and return it as a new string, but it does not include the end index
// // (i.e., it is exclusive).
// let c = "hello";
// console.log(c.slice(1, 3));
// console.log(c.substring(1, 3));
// console.log(c.substr(1, 3));

// // 4. Explain the map method with an example.
// // The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
// const arr = [1, 2, 3, 4, 5];
// const newArr = arr.map((num) => num - 1);
// console.log(newArr);

// // 5. what is the purpose of the find method explain with an example.
// // The find() method returns the value of the first element in the provided array that satisfies the provided condition or funstion.
// const arr = [1, 2, 3, 4, 5];
// const newArr = arr.find((num) => num > 3);
// console.log(newArr);

// // 6. what is the slice method used for, explain with an example.

// // The slice() method is used to extract a section of a string and return it as a new string, without modifying the original string.
// let a = "hello";
// console.log(a.slice(1, 3));
// console.log(a.slice(1));
// console.log(a.slice(-3));

// // 7. What is array destructuring explain with an example.
// // Array destructuring is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.
// const arr = ["hello", "my", "name", "is", "abdullah"];
// const [a, b, c, d, e] = arr;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);

// // 8. What is an anonymous function in Js, explain with an example.
// // An anonymous function is a function that is defined without a name.
// const a = function () {
//   console.log("Hello");
// };
// a();

// // 9. WAP to create simple calculator using functions.

// function add(a, b) {
//   return a + b;
// }
// function sub(a, b) {
//   return a - b;
// }
// function mul(a, b) {
//   return a * b;
// }
// function div(a, b) {
//   return a / b;
// }
// function mod(a, b) {
//   return a % b;
// }
// function power(a, b) {
//   return a ** b;
// }
// console.log(add(2, 3));
// console.log(sub(2, 3));
// console.log(mul(2, 3));
// console.log(div(2, 3));
// console.log(mod(2, 3));
// console.log(power(2, 3));

// // 10. WAP to find factorial of a number.

// let num = 0;
// function fact(num) {
//   let facto = 1;
//   for (let i = 1; i <= num; i++) {
//     facto = facto * i;
//   }
//   return facto;
// }
// console.log(fact(5));
// console.log(fact(6));

// // 11. WAP to check whether a number is NEON or not (1,9).
// function neon(num) {
//   let sum = 0;
//   let digit = 0;
//   let temp = num ** 2;
//   while (temp > 0) {
//     digit = temp % 10;
//     sum = sum + digit;
//     temp = Math.floor(temp / 10);
//   }
//   if (sum === num) {
//     console.log(`${num} is a Neon Number`);
//   } else {
//     console.log(`${num} is not a Neon Number`);
//   }
// }
// neon(9);
// neon(1);
// neon(5);
// neon(7);

// // 12. WAP to check whether a number is ARMSTRONG or not (1,153,370,371,407).

// function armstrong(num) {
//   let temp = num;
//   let sum = 0;
//   let count = 0;
//   let rem;
//   while (temp > 0) {
//     temp = parseInt(temp / 10);
//     count++;
//   }
//   temp = num;
//   while (temp != 0) {
//     rem = temp % 10;
//     rem = rem ** count;
//     sum = sum + rem;
//     temp = parseInt(temp / 10);
//   }
//   if (sum === num) {
//     console.log(`${num} is an Armstrong Number`);
//   } else {
//     console.log(`${num} is not an Armstrong Number`);
//   }
// }
// armstrong(1);
// armstrong(153);
// armstrong(370);
// armstrong(371);
// armstrong(407);
// armstrong(21);
// armstrong(65);

// 13. WAP to check whether a number is palindrom or not (121,111).

function checkPalindrom(num) {
  let temp = num;
  let rev = 0;

  while (temp != 0) {
    let rem = temp % 10;
    rev = rev * 10 + rem;
    temp = parseInt(temp / 10);
  }
  if (rev === num) {
    console.log(`${num} is a Palindrome Number`);
  } else {
    console.log(`${num} is not a Palindrome Number`);
  }
}
checkPalindrom(75257);
checkPalindrom(121);
checkPalindrom(111);
checkPalindrom(123);
