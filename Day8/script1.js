// WAP to check entered character is vowel or consonant

var char = "A";
switch (char) {
  case "a":
  case "e":
  case "i":
  case "o":
  case "u":
    console.log(`${char} is Lowercase and a vowel`);
    break;
  case "A":
  case "E":
  case "I":
  case "O":
  case "U":
    console.log(`${char} is Uppercase and a vowel`);
    break;
  default:
    console.log(`${char} is a consonant`);
    break;
}
// Output: A is Uppercase and a vowel

// FOR LOOP

for (let i = 1; i <= 10; i++) {
  console.log(`${i}`);
}

// WAP to sum of n natural numbers using for loop.
var n = 10,
  sum = 0;
for (let i = 1; i <= n; i++) {
  sum += i;
  console.log(`Sum of natural numbers till ${i} is ${sum}`);
}
