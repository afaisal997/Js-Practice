// Q4)
// *
// **
// ***
// ****
// *****

let num = 5;

for (let i = 1; i <= num; i++) {
  for (let j = 1; j <= i; j++) {
    // console.log("*");
    process.stdout.write(`*`);
  }
  //   console.log("");
  process.stdout.write(`\n`);
}
