//using map()
const arr = [1, 2, 3, 4, 5];
const newArr = arr.map((num) => num + 2);
console.log(newArr);

//using map() with map()

const arr1 = [1, 2, 3, 4, 5];
const newArr1 = arr.map((num) => num + 2).map((x) => x * 3);
console.log(newArr1);

//using map() with map() with filter

const arr2 = [1, 2, 3, 4, 5];
const newArr2 = arr
  .map((num) => num + 2)
  .map((x) => x * 3)
  .filter((a) => a > 15);
console.log(newArr2);
