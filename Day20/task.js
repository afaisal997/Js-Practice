// WAP to create a simple calculator (+, -, /, *, %, **) using single inheritance.

class Count {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
}

class Calculator extends Count {
  add() {
    console.log(`${this.a} + ${this.b} = ${this.a + this.b}`);
  }
  subtract() {
    console.log(`${this.a} - ${this.b} = ${this.a - this.b}`);
  }
  divide() {
    console.log(`${this.a} / ${this.b} = ${this.a / this.b}`);
  }
  multiply() {
    console.log(`${this.a} * ${this.b} = ${this.a * this.b}`);
  }
  modulus() {
    console.log(`${this.a} % ${this.b} = ${this.a % this.b}`);
  }
  power() {
    console.log(`${this.a} ** ${this.b} = ${this.a ** this.b}`);
  }
}
let obj = new Calculator(11, 22);
obj.add();
obj.subtract();
obj.divide();
obj.multiply();
obj.modulus();
obj.power();
