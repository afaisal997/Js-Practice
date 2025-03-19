// *****
// *****
// *****
// *****
// *****

// let num = 5;
// for (let i = 1; i <= num; i++) {
//   for (let j = 1; j <= num; j++) {
//     // console.log("*");
//     process.stdout.write("*");
//   }
//   //   console.log("");
//   process.stdout.write(`\n`);
// }

// *
// **
// ***
// ****
// *****

// let num = 5;

// for (let i = 1; i <= num; i++) {
//   for (let j = 1; j <= i; j++) {
//     // console.log("*");
//     process.stdout.write(`*`);
//   }
//   //   console.log("");
//   process.stdout.write(`\n`);
// }

// *****
//  ****
//   ***
//    **
//     *

let num = 5;
for (let i = num; i > 0; i--) {
  for (let j = 1; j <= num; j++) {
    if (j >= i) {
      process.stdout.write(` `);
    } else {
      process.stdout.write(`*`);
    }
  }
  process.stdout.write(`\n`);
}

// *****
// ****
// ***
// **
// *

// for (let i = 5; i >= 1; i--) {
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write(`*`);
//   }
//   process.stdout.write(`\n`);
// }

//     *
//    **
//   ***
//  ****
// *****

// let num = 5;
// for (let i = num; i > 0; i--) {
//   for (let j = 1; j <= num; j++) {
//     if (j >= i) {
//       process.stdout.write(`*`);
//     } else {
//       process.stdout.write(` `);
//     }
//   }
//   process.stdout.write(`\n`);
// }
