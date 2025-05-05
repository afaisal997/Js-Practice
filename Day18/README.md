# Object De-structuring

Object Destructuring in Js is a feature that allows you to extract properties from an object and assign them to variables. Its useful when working with large objects or extracting specific properties.

## Object Constructor/Object Prototype

- Constructor data property of an object instance returns a reference to the constructor function that created the instance object.

- Prototype property of an object instance returns a reference to the prototype object of the instance object.

## To set Date and Time

1. 1st style : new Date() : return current date and time

#### Example:

        var date = new Date()
        console.log(date.toString())
        console.log(date);

2. 2nd style : new Date(year, month, day, hour, minute, second, milisecond)

- year : 4 digit year
- month : 0-11
- day : 1-31
- hour : 0-23
- minute : 0-59
- second : 0-59
- milisecond : 0-999

- We have to specify at least two items in date.
- If we pass a single argument in Date the it is treated as milisecond.
- If we pass two arguments in Date the first argument is treated as year and second argument is treated as month.

## Set

- It is a collection of unique Elements.
- Can't contain duplicate items.
- does not support indexing.
- set is a mutable datatype

### set Methods

- `add()` method is used to add an item in set.
- if item already exists then no change.

- `delete()` method is used to delete an item from set
- it will not work if its empty.

- `clear()` method is used to remove all items from set.
- `size()` is used to check the size of a set
- `has()` method is used to check if an item is present in set or not.

- values :return an iterator containing all items of set.
- keys :return an iterator containing all items of set.
- entries :return an iterator in pair if value, value containing all items of set.
- forEach() : call a function for each item in set.
- `set()` : return a new set with all items of set.
- `Map()` : It is a collection of items but in pair of key and value key must be unique but values may be duplicate if we use duplicate key in a map then only last key will be used.
- set() of map insert an item in map and if key already exist then set() update key value.
