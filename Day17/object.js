//object literal

let emp = {
  id: 1,
  name: "John",
  age: 30,
  email: "john@gmail.com",
  dsg: "Developer",
  salary: 50000,
  address: "South Delhi",
};
console.log(emp);

//empty object
let emp1 = {};
(emp1.id = 1),
  (emp1.name = "John"),
  (emp1.age = 30),
  (emp1.email = "john@gmail.com"),
  (emp1.dsg = "Developer"),
  (emp1.salary = 50000),
  (emp1.address = "South Delhi"),
  console.log(emp1);

//using new keyword
let emp2 = new Object();
(emp2.id = 1),
  (emp2.name = "John"),
  (emp2.age = 30),
  (emp2.email = "john@gmail.com"),
  (emp2.dsg = "Developer"),
  (emp2.salary = 50000),
  (emp2.address = "South Delhi"),
  console.log(emp2);

//   Accessing object value with the help of keys.

let emp3 = {
  id: 1,
  name: "John",
  age: 30,
  email: "john@gmail.com",
  dsg: "Developer",
  salary: 50000,
  address: "South Delhi",
};
// console.log(emp3.id);
// console.log(emp3["name"]);
// console.log(emp3["age"]);
// console.log(emp3["email"]);
// console.log(emp3["dsg"]);
// console.log(emp3.salary);
// console.log(emp3.address);

// printing the above using loop
for (let key in emp3) {
  console.log(`${key} = ${emp3[key]}`);
}

// add an item in existing Object
emp3.Phone = 1234567890;
emp3.Pincode = 123456;

for (let key in emp3) {
  console.log(`${key} = ${emp3[key]}`);
}

// delete an item in existing Object

delete emp3.age;
for (let key in emp3) {
  console.log(`${key} = ${emp3[key]}`);
}

//nested object
let emp4 = {
  id: 1,
  name: "John",
  age: 30,
  email: "john@gmail.com",
  dsg: "Developer",
  salary: 50000,
  address: {
    street: "15",
    city: "New Delhi",
    state: "Delhi",
    country: "India",
  },
};

console.log(emp4.address);
console.log(emp4.address.country);

// Function INSIDE object

let emp5 = {
  id: 1,
  name: "John",
  age: 30,
  email: "john@gmail.com",
  dsg: "Developer",
  salary: 50000,
  address: "South Delhi",
  fun1: function show() {
    console.log("Hello, Im a function inside object ");
  },
  fun2: function () {
    console.log("Hello, Im an anonymous function inside object ");
  },
  arrowFun: (chai = () => {
    console.log("Hello, Im an arrow function inside object ");
  }),
};
console.log(emp5);
emp5.fun1();
emp5.fun2();
emp5.arrowFun();
