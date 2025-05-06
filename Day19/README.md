# Object Oriented Programming System(OOPS)

OOPS stands for object oriented programming system which is methodology to develop and design the programs using class and object.

JavaScript introduced class syntax in ES6 that makes it easier to create and manage objects and inheritance, resembling classes in other object-oriented languages.

### Features of OOPS

1. Class
2. Object
3. Abstraction: Data Hiding
4. Encapsulation: Binding data and function in a single unit.
5. Inheritance: One class can inherit properties and methods from another class. Code Reusability.
6. Polymorphism: Allows Object to be treated as instances of their parent class, enabling flexible and interchangable code. Class is required to implement OOPS.

## 1. Class

- class is technique by which we can define a new data type as we required.
- Class is a blueprint of objects
- Class is a collection of properties and behaviours where properties means variables of different-different data types and behaviour means various functions.
- A class is a special type of funtion introduced in ECMAScript 6 (ES6) that provides a syntactical sugar for creating and managing objects and their interactions.

#### Syntax

    class className{
        constructor(){
        ----------------
        ----------------
        }
        methods(){
            --------------
            --------------
        }
    }

## 2. Objects

A javaScript object is an entity having state and behavior (properties and method). For example: car, pen, bike, chair, glass, keyboard, monitor etc.

#### Syntax

    storage_name variable_name = new className()

- ### Method
  In JavaScript, methods are used to manipulate objects. They are written in the same way as functions, but they are defined within the object. Methods are usually used to access and manipulate the data stored in an object. For example, you can use the length method to find out the length of a string.

## 3. Abstraction:

- Data Abstraction is the process of hiding certain details and showing only essential information to the user.
- Abstraction can be achieved with either abstract classes or interfaces.
- Abstract classes are classes that cannot be instantiated and are used to provide a common base class for other
  classes.
- `Abstract` keyword is a non-access modifier, used for classes and methods:

  - `Abstract Class`: it is a restricted class that cannot be used to create objects. (to access it, it must be inherited from another class)
  - `Abstract Method`: It can only be used in an abstract class, and it does not have a body. This body is provided by the SubClass (Inherited From).

## 4. Encapsulation:

- Encapsulation is a process of binding the data (i.e. variables) with the function acting on that data. It allows us to control the data and validate it. To Achieve an encapsulation in Js use `var` keyword to make data members private.

- Encapsulation is the concept of bundling data, along with the methods that are used to manipulate that data, into a single unit.

- Use Setter method to set the data and getter method to get the data.

  - Read/Write - here, we use setter method to write the data and getter method to read read that data.

  - Read/Only - here, we use getter method to read the data but we can't write the data.

  - Write/Only - here, we use setter method to write the data but we can't read the data.

## 6. Polymorphism:

- Polymorphism is a concept from object-oriented programming that allows methods to do different things based on the object it is acting upon, even if they share the same name. In JavaScript ,which is a prototype based language , polymorphism can be achieved through several mechanishm.

- Polymorphism is a concept by which we can perform a single task in different ways is knwon as polymorphism.
- There are two types of polymorphism:

  - Compile time polymorphism (method overloading)
  - Runtime polymorphism (method overriding)

- Polymorphism is the ability of an object to take on many forms. This can be achieved through method overloading or method overriding.
- `Method overloading` is a feature that allows multiple methods with the same name to be defined, but with different parameters.

  - If we define more than one function in a class with same name but different signatures (either number of arguments must be different)
  - It is also known as compile time polymorphism.
  - JavaScript does not support method overloading.

- `Constructor` and `Destructor`

  - Js Support Constructor but does not support Destructor

- `Method overriding` is a feature that allows a subclass to provide a different implementation of a method that is already provided by its superclass.

  - if both parent child and child class having same named members than child class override parent's member that means child class inherit only those members from parent which child does not have content child class.
  - It is also known as runtime polymorphism.
  - JavaScript supports method overriding.
