// A
// AB
// ABC
// ABCD
// ABCDE

let num = 5;
for (let i = 1; i <= num; i++) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write(`${String.fromCharCode(64 + j)}`);
  }
  process.stdout.write(`\n`);
}
