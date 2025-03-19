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