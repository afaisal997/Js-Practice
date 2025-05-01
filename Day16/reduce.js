const arr = [1, 2, 3, 4, 5];
const num = arr.reduce(function (currentValue, currentIndex) {
  console.log(
    `currentValue = ${currentValue} and currentIndex = ${currentIndex}`
  );
  return currentValue + currentIndex;
}, 0);

console.log(num);
