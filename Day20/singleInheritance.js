// EXAMPLE 1

// class Parent {
//   constructor() {
//     console.log(`Constructor is called`);
//   }
//   show() {
//     console.log(`Parent method is called`);
//   }
// }
// class Child extends Parent {
//   display() {
//     console.log(`Child method is called`);
//   }
// }
// var obj = new Child();
// obj.show();
// obj.display();

// EXAMPLE 2

class Parent {
  show() {
    console.log(`Parent method is called`);
  }
}
class Child extends Parent {
  constructor() {
    super();
    console.log(`Constructor is called`);
  }
  display() {
    console.log(`Child method is called`);
  }
}
var obj = new Child();
obj.show();
obj.display();
