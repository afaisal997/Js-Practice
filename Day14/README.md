# Methods

1. `indexOf()`: it returns first index of any substring in string and return -1 of items not found in string.

2. `lastIndexOf()`: it returns last index of any substring in string and return -1 of items not found in string.

3. `search()`: The search method returns the index (Position) of first match. The `Search()` method returns -1 if no match is found.

4. `includes()`: It check whether a substring exist in a string or not it returns true or false

5. `concat()` it is used to concatenate one or more strings into one string

6. `startsWith()`: It check whether a string starts with a sub specified string or not.

7. `endWith()`:

#### Example:

        let str4 = "hello world";
        console.log(str4.endsWith("he")); //false
        console.log(str4.endsWith("ld")); //true

8. `toUpperCase()`
   `toLocalUpperCase()`

#### Example:

        let str5 = "abdullah";
        console.log(str5.toUpperCase());    //ABDULLAH
        console.log(str5.toLocaleUpperCase());  //ABDULLAH

9. `toLowerCase()`
   `toLocalLowerCase()`

#### Example:

        let str6 = "FAISAL";
        console.log(str6.toLowerCase());    //faisal
        console.log(str6.toLocaleLowerCase());  //faisal

10. `substr()`: This method extract a part of a string. The `substr()` method begins at a specified position, and returns a specified number of characyters. the `substr() `does not change the original string.

11. `substring()`: This method of string values returns the part of this string from the start index up to and excluding the end index.

12. `slice`: this method extracts a part of a string and returns the extracted part in a new string. the method takes 2 parameters: start position and end position (end not include)

13. `replace()`: This method of string values returns a new string with one, some, or all matches of a pattern replaced by a replacement.

14. `trim()` : Remove all leading white spaces characters from string both side.

15. `trimStart()` : Remove all leading white space characters from starting left side.

16. `trimEnd()` : Remove all leading white space characters from starting right side.
