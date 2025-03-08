// WAP to check wheather an entered character is lower case, upper case, digit, consonent, vowel or special character.

let char = prompt("Enter a character: ");
if (char.length != 1) {
  alert(`${char} is invalid character, Please enter only one character.`);
} else {
  if (char >= "a" && char <= "z") {
    if (
      char == "a" ||
      char == "e" ||
      char == "i" ||
      char == "o" ||
      char == "u"
    ) {
      alert(`${char} is Lower case and Vowel`);
    } else {
      alert(`${char} is Lower case and Consonent`);
    }
  } else if (char >= "A" && char <= "Z") {
    if (
      char == "A" ||
      char == "E" ||
      char == "I" ||
      char == "O" ||
      char == "U"
    ) {
      alert(`${char} is Upper case and Vowel`);
    } else {
      alert(`${char} is Upper case and Consonent`);
    }
  } else if (char >= "0" && char <= "9") {
    alert(`${char} is a Digit`);
  } else {
    alert(`${char} is a Special character`);
  }
}
