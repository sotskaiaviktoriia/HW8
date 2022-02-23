"use strict";

// Task1
function sumTwoSmallestNumbers(...array) {
  if (array.length < 2) {
    return console.error("Enter more than one nummber");
  }

  const sortedArray = array.sort((a, b) => a - b);
  return sortedArray[0] + sortedArray[1];
}

console.log(sumTwoSmallestNumbers(19, 5, 42, 2, 77));
console.log(sumTwoSmallestNumbers(1, 3, 2));
console.log(sumTwoSmallestNumbers(1));
