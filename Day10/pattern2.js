// 12345
// 1234
// 123
// 12
// 1

for (let i = 1; i <= 5; i++) {
  for (let j = 5; j >= i; j--) {
    process.stdout.write(`${j}`);
  }
  process.stdout.write(`\n`);
}
