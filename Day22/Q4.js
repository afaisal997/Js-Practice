// 4. Explain the map method with an example.
// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
const arr = [1, 2, 3, 4, 5];
const newArr = arr.map((num) => num - 1);
console.log(newArr);
