# Array Methods

1. `find()`:

- Returns the first element in the array that satisfies the provided testing function.
- Returns `undefined` if no elements pass the test.

2. `filter()`:

- Filter method will filter out the elements of an array based on the specified test condition.
- It returns a new array with all elements that pass the test implemented by the provided function.
- If the function returns `true`, the element is included in the new array. If it returns
  `false`, the element is not included in the new array.

3. `foreach()`:

- The forEach() method of Array instances executes a provided function once for each array element.
- for each() method of array instances ececutes a provided function once for each array element.
- is not executed for empty elements.

#### syntax

        forEach(callbackFn)
        forEach(callbackFn, thisArg)

4. `reverse()`:

- Reverses the order of the elements in the array.
- Does not change the original array.

5. `sort()`:

- Sorts the elements of an array in place and returns the array.
- The default sort order is according to string Unicode code points.
- The sort order is determined by the return value of the compare function.
- If the compare function is not provided, the array elements are sorted in ascending order.
- If the compare function is provided, the array elements are sorted according to the return value of the
  compare function.

6. `reduce()`:

- reduce() method in js is a higerorder function that reduces an array to a single value.
- Reduce() takes a callback function as its first argument and an optical initial value as its second arguement

- Applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.

#### syntax

        array.reduce(function(currentValue, currentIndex), initial value)

7. `map()`:

- Map() creates a new array from calling a function for every array element.
- map() does not execute the function for empty elements.

# Array Destructuring

- Array destructring in JAvaScript is a way to extract values from an array into separate variable.
- Array destructuring can be used with functions, loops, and other array methods.
