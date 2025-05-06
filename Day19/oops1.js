// without constructor

class Emp {
  show() {
    //show() is method inside Emp class
    console.log("Show method in Emp Class");
  }
}
let x = new Emp(); //x object is created of Emp class
x.show(); //show() is called on object x

class Sum {
  add(a, b) {
    this.a = a;
    this.b = b;
    this.res = this.a + this.b;
  }
  display() {
    console.log(`${this.a} + ${this.b} = ${this.res}`);
  }
}
let y = new Sum();
y.add(10, 20);
y.display();
