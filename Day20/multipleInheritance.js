class Count {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
}

class Add extends Count {
  add() {
    console.log(`${this.a} + ${this.b} = ${this.a + this.b}`);
  }
}

class Subtract extends Add {
  subtract() {
    console.log(`${this.a} - ${this.b} = ${this.a - this.b}`);
  }
}
class Divide extends Subtract {
  divide() {
    console.log(`${this.a} / ${this.b} = ${this.a / this.b}`);
  }
}

class Multiply extends Divide {
  multiply() {
    console.log(`${this.a} * ${this.b} = ${this.a * this.b}`);
  }
}

let obj = new Subtract(11, 22);
obj.add();
obj.subtract();

let obj2 = new Multiply(2, 3);
obj2.add();
obj2.subtract();
obj2.multiply();
obj2.divide();
