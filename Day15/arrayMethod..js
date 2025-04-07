// at() method
let arr = [11, 2, 3, 4, "abdullah", 10.2];
console.log(arr.at(3)); //4

// join() method
let arr2 = [11, 2, 3, 4, "abdullah", 10.2];
let x = arr2.join("-");
console.log(x); //11-2-3-4-abdullah-10.2

//pop() method
let arr3 = [12, 3, 6, 122, "faisal", 100.2];
let y = arr3.pop();
console.log(y); //returns the removed element 100.2
console.log(arr3); //[ 12, 3, 6, 122, 'faisal' ]

// shift() method
let arr4 = [121, 23, 63, 12, "faisal", 100.1];
let z = arr4.shift();
console.log(z); //returns the removed element 121
console.log(arr4); //[ 23, 63, 12, 'faisal', 100.1 ]

// unshift() method
let arr5 = [121, 23, 63, 12, "faisal", 100.1];
let a = arr5.unshift("Abdullah");
console.log(a); //Length of the array 7
console.log(arr5); //[ 'Abdullah', 121, 23, 63, 12, 'faisal', 100.1 ]

//delete() method
let arr6 = [121, 23, 63, 12, "faisal", 122.3];
delete arr6[3];
let b = delete arr6[3];
console.log(b); //true
console.log(arr6); //[ 121, 23, 63, <1 empty item>, 'faisal', 122.3 ]

//concat() method

let arr7 = [121, 23, 63, 12, "faisal", 100.1];
let arr8 = [11, 2, 3, 4, "abdullah", 10.2];
let c = arr7.concat(arr8);
console.log(c);

//splice() method

let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "abdullah");
console.log(fruits); //[ 'Banana', 'Orange', 'abdullah', 'Apple', 'Mango' ]

let fruits1 = ["Banana", "Orange", "Apple", "Mango"];
fruits1.splice(2, 1, "abdullah");
console.log(fruits1); //[ 'Banana', 'Orange', 'abdullah', 'Mango' ]

// slice() method
let fruits2 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits2.slice(2, 4)); //[ 'Apple', 'Mango' ]

//reverse() method
let arr9 = [1, 2, 3, 4, 5];
console.log(arr9.reverse()); //[ 5, 4, 3, 2, 1 ]

let arr10 = ["BMW", "Mercedes", "Honda", "BYD"];
console.log(arr10.indexOf("Mercedes")); //1

//lastIndexOf()
console.log(arr10.lastIndexOf("Honda")); //2
console.log(arr10.lastIndexOf("BYD")); //3

//includes()
console.log(arr10.includes("Mercedes")); //true
console.log(arr10.includes("Toyota")); //false
