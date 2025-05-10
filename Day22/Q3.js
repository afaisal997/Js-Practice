// 3. What is the difference between slice() and substring()? explain with an example.

// slice() and substring() both are used to extract a section of a string and return it as a new string. The difference between them is that slice() is used to extract a section of a string and return it as a new string, whereas substring() is used to extract a section of a string and return it as a new string, but it does not include the end index
// (i.e., it is exclusive).

let c = "hello";
console.log(c.slice(1, 3));
console.log(c.substring(1, 3));
console.log(c.substr(1, 3));
