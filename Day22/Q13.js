// 13. WAP to check whether a number is palindrom or not (121,111).

function checkPalindrom(num) {
  let temp = num;
  let rev = 0;

  while (temp != 0) {
    let rem = temp % 10;
    rev = rev * 10 + rem;
    temp = parseInt(temp / 10);
  }
  if (rev === num) {
    console.log(`${num} is a Palindrome Number`);
  } else {
    console.log(`${num} is not a Palindrome Number`);
  }
}
checkPalindrom(75257);
checkPalindrom(121);
checkPalindrom(111);
checkPalindrom(123);
