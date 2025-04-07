// 2. 2nd type to create an array using empty array

let arr = [];
arr[0] = 11;
arr[1] = "Hello world";
arr[2] = 11.2;

console.log(arr);

arr.push(12);
arr.push("world");
arr.push(10.1);

for (let i of arr) {
  console.log(`${i}`);
}
