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

//     *
//    **
//   ***
//  ****
// *****

let num = 5;
for (let i = num; i > 0; i--) {
  for (let j = 1; j <= num; j++) {
    if (j >= i) {
      process.stdout.write(`*`);
    } else {
      process.stdout.write(` `);
    }
  }
  process.stdout.write(`\n`);
}

// 12345
// 12345
// 12345
// 12345
// 12345

// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= 5; j++) {
//     // console.log("*");
//     process.stdout.write(`${j}`);
//   }
//   //   console.log(`\n`);
//   process.stdout.write(`\n`);
// }

// 10101
// 10101
// 10101
// 10101
// 10101

// let num = 5;

// for (let i = 1; i <= num; i++) {
//   for (let j = 1; j <= num; j++) {
//     process.stdout.write(`${j % 2}`);
//   }
//   process.stdout.write(`\n`);
// }

// 12345;
// 23456;
// 34567;
// 45678;
// 56789;

// let num = 5;
// for (let i = 1; i <= num; i++) {
//   for (let j = 0; j < num; j++) {
//     process.stdout.write(`${i + j}`);
//   }
//   process.stdout.write(`\n`);
// }

// let num = 5;
// let count = 1;
// for (let i = 1; i <= num; i++) {
//   for (let j = 1; j <= num; j++) {
//     process.stdout.write(`${count}`);
//     count++;
//   }
//   count = i + 1;
//   process.stdout.write(`\n`);
// }

// ABCDE;
// ABCDE;
// ABCDE;
// ABCDE;
// ABCDE;

// let num = 5;
// for (let i = 1; i <= num; i++) {
//   for (let j = 1; j <= num; j++) {
//     process.stdout.write(`${String.fromCharCode(64 + j)}`);
//   }
//   process.stdout.write(`\n`);
// }

// 1B3D5
// 1B3D5
// 1B3D5
// 1B3D5
// 1B3D5

// let num = 5;
// for (let i = 1; i <= num; i++) {
//   for (let j = 1; j <= num; j++) {
//     if (j % 2 === 0) {
//       process.stdout.write(`${String.fromCharCode(64 + j)}`);
//     } else {
//       process.stdout.write(`${j}`);
//     }
//   }
//   process.stdout.write(`\n`);
// }
