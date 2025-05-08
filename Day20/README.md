## 5. Inheritance:

- Inheritence is a core concept in object oriented programming that allows one class (or object) to inherit properties and methods from another class (or object).
- This mechanism enables code reusability and establishes a hierarchy between classes.
- Inheritance helps in creating a new class based on an existing class, making it easier to manage and extend code.

- Inheritance is a mechanism that allows one class to inherit the properties and behavior of another class.
- The class that is being inherited is called the parent or superclass, and the class that is doing the inheriting is called the child or subclass.

### Class with constructor

- A special member method of class which provide memory initialization to a class object.
- There is no need to class constructor it is called automatically when an object is declared with the help of `new` keyword.
- It can be parametrized.
- If we do not provide definition to a constructor in class then compiler (JIT) provide definition to constructor.
- We cannot return any value from a constructor.

### Types of Inheritance

1. Single Inheritance: A child class inherits from a single parent class.
2. Multilevel Inheritance: A child class inherits from a parent class that itself has inherited from
   another class.
3. Hierarchical Inheritance: More than one child class inherits from a single parent class.

<!-- - Multiple Inheritance: A child class inherits from multiple parent classes. -->

#### 1. Single Inheritance:

Single Inheritance, Achieved using the `extends` keyword, it allows a class (the subclass) to inherit properties and methods from a single parent class (the superclass), this process is called as Single Inheritance.

#### Syntax

        class Parent/Base/Super Class-Name
        {
            // properties;
            // methods;
        }
        class Child/Sub-child/derived class extends Parent_Class-Name
        {
            // properties;
            // methods;
        }

#### 2. Multi Level Inheritance:

- Multilevel inheritance is a type of inheritance in JavaScript. In multilevel inheritance, one class inherits the properties of another class, and other classes inherit current class properties.

- Multi Level Inheritance, Achieved using the `extends` keyword, it allows a class (the subclass) to inherit properties and methods from a parent class that itself has inherited from another class.

#### 3. Hierarchical Inheritance:

- In Heirarchichal inheritance, more than one sub-class inherits the property of a single base class.

- Hierarchical inheritance is a type of inheritance in JavaScript. In hierarchical inheritance, more than one class inherits the properties of a single class.

- Hierarchical Inheritance, Achieved using the `extends` keyword, it allows more than one child class to inherit properties and methods from a single parent class.

- In this type of inheritance, a parent class can have multiple child classes.

- The child classes can have their own methods and properties in addition to the methods and properties inherited from the parent class.
