let x = "abdullah faisal";
console.log(x.lastIndexOf("lah"));
console.log(x.indexOf("d"));
console.log(x.search("khan"));
console.log(x.search("h"));
console.log(x.includes("lah"));
console.log(x.includes("han"));

let str1 = "Abdullah";
let str2 = " Faisal";
console.log(str1.concat(str2));

let str3 = "hello world";
console.log(str3.startsWith("india")); //false
console.log(str3.startsWith("he")); //true

let str4 = "hello world";
console.log(str4.endsWith("he")); //false
console.log(str4.endsWith("ld")); //true

let str5 = "abdullah";
console.log(str5.toUpperCase());
console.log(str5.toLocaleUpperCase());

let str6 = "FAISAL";
console.log(str6.toLowerCase());
console.log(str6.toLocaleLowerCase());

let str7 = "Good Morning";
console.log(str7.substr(1, 7)); //ood Mor
console.log(str7.substring(1, 7)); //ood Mo
console.log(str7.slice(1, 7)); //ood Mo
console.log(str7.slice(1)); //ood Morning

let str8 = "Hello world";
console.log(str8.replace(" ", ","));
console.log(str8.replace("world", "Brother"));

let str9 = " abdullah faisal ";
console.log(str9.length); //17
let res = str9.trim();
console.log(res.length); //15

str9 = " abdullah faisal ";
console.log(str9.length); //17
res = str9.trimStart();
console.log(res.length); //16

str9 = " abdullah faisal ";
console.log(str9.length); //17
res = str9.trimEnd();
console.log(res.length); //16
