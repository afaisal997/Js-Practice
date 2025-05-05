let arr = [11, 22, 33, 44, 55];
console.log(arr);
let setData = new Set(arr);
console.log(setData);

let arr1 = [11, 22, 33, 44, 55];
let setData1 = new Set(arr1);
console.log(setData1);
let x = Array.from(setData1); //converting set to array
console.log(x);

// to add element in set "add()"
let arr2 = [111, 221, 331, 44, 55];
let y = new Set(arr2);
y.add(88);
console.log(y);

// to delete element in set "delete()"

let arr3 = [111, 221, 331, 44, 55];
let z = new Set(arr3);
z.delete(44);
console.log(z);

// to remove all element from set "clear()"

let arr4 = [111, 221, 331, 44, 55];
let p = new Set(arr4);
p.clear();
console.log(p);

let arr5 = [111, 221, 331, 44, 55];
let q = new Set(arr5);
console.log(q.size); // to get size of set

let arr6 = [111, 221, 331, 44, 55];
let r = new Set(arr6);
console.log(r.has(44)); // to check element in set

let a = [11, 2, 23, 44, 55, 66, 7, 4, 6, 7, 3, 1, 99, 22, 11, 6];
let b = new Set(a);
console.log(b.values());
console.log(b.keys());
console.log(b.entries());

var emp = new Map([
  ["Khan", 140000],
  ["Malik", 14000],
  ["Faisal", 18000],
  ["Zeeshan", 20000],
  ["Ahmad", 45000],
  ["Ashraf", 50000],
]);
console.log(emp);

emp.set("Malik", 123211); //It will update the malik if exist in the above emp map
console.log(emp);
