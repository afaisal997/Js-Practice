class Parent {
  constructor() {
    this.a = [11, 22, 33, 44, 55];
  }
}

class Child1 extends Parent {
  display() {
    console.log(`${this.a}`);
  }
}

class Child2 extends Parent {
  reverse() {
    console.log(this.a.reverse());
  }
}

let obj = new Child1();
obj.display();
let obj2 = new Child2();
obj2.reverse();
