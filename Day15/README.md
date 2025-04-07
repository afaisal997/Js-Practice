# Array

- Collection of items arrangement in continuous order.
- Can contain duplicate items.
- Can conatain different type of values.

#### Note:

Array index always starts from zero.

### Syntax

        var arrayObject = [item1,item2,...itemN];

1. 1st type to create an array using literal string.
2. 2nd type to create an array using empty array
3. 3rd Array constructor

## Methods

1. `at()` :

- at() method returns an indexed element from an array
- at() method returns the same as [].
- at() method is supported in all modern browser since march 2022.

2. `join()`:

- join() method returns a string concatenated with the elements of an array.
- join() method is used to convert array elements into a string.

3. `pop()`:

- pop() method removes the last element from an array.
- pop() method returns the removed element.
- pop() method changes the original array.

4. `shift()`:

- shift() method removes the first element from an array.
- shift() method returns the removed element.
- pop() method changes the original array.

5. `unshift()`:

- unshift() method adds one or more elements to the beginning of an array.
- unshift() method returns the new length of the array.
- unshift() method changes the original array.

6. `delete()`:

- delete() method removes the specified element from an array.
- delete() method returns true if the element is removed, false otherwise.
- delete() method changes the original array.

7. `concat()`:

- concat() method returns a new array that contains the elements of the original array and the elements of
  the array(s) passed as arguments.
- concat() method does not change the original array.
- concat() method returns a new array.

8. `splice()`:

- splice() method adds or removes elements from an array.
- The splice method can be used to add new items to an array.
- First parameter (2) defines the position where new elements should be added (spliced in)
- Second parameter (0) definens how many elements should be removed.
- Third parameter ("a") defines the elements to be added.
- The splice() method returns an array of the deleted elements.

9. `slice()`:

- slice() method returns a shallow copy of a portion of an array.
- slice() method does not change the original array.
- slice() method returns a new array.
- The slice() method extracts a section of an array and returns a new array.

10. `reverse()`:

- reverse() method reverses the order of the elements in an array.
- reverse() method changes the original array.
- reverse() method returns the array.

11. `indexOf()`:

- indexOf() method returns the first index of the element in the array.
- indexOf() method returns -1 if the element is not found.
- indexOf() method does not change the original array.
- indexOf() method returns the index of the first occurrence of the specified value.

12. `lastIndexOf()`:

- lastIndexOf() method returns the last index of the element in the array.
- lastIndexOf() method returns -1 if the element is not found.
- lastIndexOf() method does not change the original array.

13. `includes()`:

- includes() method returns true if the array includes the specified value, false otherwise.
- includes() method does not change the original array.
- includes() method returns a boolean value.
- includes() method checks if the array includes the specified value.
- includes() method is case sensitive.
