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

//Task2
function createCalculator(arg) {
  let count = arg;

  const objectOperation = {
    sum: (num) => (count += num),
    mult: (num) => (count *= num),
    sub: (num) => (count -= num),
    div: (num) => (count /= num),
  };
  return objectOperation;
}

const calc = createCalculator(10);

console.log(calc.sum(5));
console.log(calc.mult(10));
console.log(calc.sub(40));
console.log(calc.div(10));
