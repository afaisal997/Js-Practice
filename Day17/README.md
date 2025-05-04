# Object

- object store information in pair of keys and values
- keys are unique and immutable
- values can be any type of data
- values may be duplicate
- mutable datatype

## How to Define a JavaScript Object

1. Using an Object Literal.
2. Using the `new` Keyword.
3. Using an Object Constructor.

### 1. JavaScript Object Literal

An object literal is a list of name:value pairs inside curly braces {}. It is the most common way to define an object in JavaScript.

#### Example:

        {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"}

#### Note:

`name:value pairs` are also called `key:value pairs`.

`object literals` are also called `object initializers`.

### 2. Using the `new` Keyword

This example create a new JavaScript object using new Object(), and then adds 4 properties:

#### Example:

        // Create an Object
        const person = new Object();
        // Add Properties
        person.firstName = "John";
        person.lastName = "Doe";
        person.age = 50;
        person.eyeColor = "blue";

#### Note:

- The examples above do exactly the same. But, there is no need to use new Object().
- For readability, simplicity and execution speed, use the object literal method.

## Accessing object value with the help of keys.

- Dot notation
- Bracket notation
- Property accessor
