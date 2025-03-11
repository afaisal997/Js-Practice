// Q5) WAP to print table of any given Number

let num = Number(prompt("Enter a number: "));
let table = "";
for (let i = 1; i <= 10; i++) {
  table += `${num} X ${i} = ${num * i} \n`;
}
alert(table);
