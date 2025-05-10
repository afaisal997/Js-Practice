// 5. what is the purpose of the find method explain with an example.
// The find() method returns the value of the first element in the provided array that satisfies the provided condition or funstion.
const arr = [1, 2, 3, 4, 5];
const newArr = arr.find((num) => num > 3);
console.log(newArr);
