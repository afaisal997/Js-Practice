# Data Types
### Boolean Data Type
boolean type can have either true or false as a value. Boolean values are used when you need some values as a flag in your code, or in the case of conditional statements.

### Undefined in Js

When a variable is declared but not assigned any value, its value is undefined.
Undefined is a valid datatype in js and it can have only one undefined value.

    e.g
    var a:
    console.log(a); // undefined

### Null in Js

Null value is used to represent no value. It is neither similar to undefined, nor equal to empty value or zero value. The null datatype means, no value. We can assign a null value to a variable.
The Null dtatype can have only one value which us null

## Non-Premitive Data Type



# Tokens:
Smallest entity of any program like identifiers, constants, keywords, operator, punctuaters(, spaces : ; [] () {} etc)

    example
    var a       = 10;
    var         = keyword
    a           = variable
    =           = operator
    10          = value
    ;           = puntuators



# Methods:

## Number()
Its is used to convert a value into number.

    example:
    var y = "123";
    var z = Number(y)
    console.log(z)
    console.log(typeof(z))

## parseInt()
It is used to convert a value to integer.

    example:
    var y = "123.23";
    var z = parseInt(y)
    console.log(z)
    console.log(typeof(z))

## parseFloat()
It is used to convert a value to Float.

    var y = "123.12";
    var z = parseFloat(y)
    console.log(z)
    console.log(typeof(z))

## Math.floor()
It Returns floor value of a number

    console.log(Math.floor(13.4))
    console.log(Math.floor(13.4))
    console.log(Math.floor(-13.4))

## Math.round()
It Returns the value of a number rounded to its nearest integer.

    console.log(Math.round(13.4))
    console.log(Math.round(13.6))
    console.log(Math.round(-13.4))

# prompt() (Prompt Funtion)
It is used to get user input.
A prompt funtion is predefined function that displays a dialogue box with a message and allows user to input data.
Prompt funtion returns value enter by the user as a string.
