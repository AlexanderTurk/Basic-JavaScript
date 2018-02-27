// Do not change any of the function names

const getBiggest = (x, y) => {
  if (x > y) {
    return x;
  } return y;
};

const greeting = (language) => {
  if (language === 'German') {
    return 'Guten Tag!';
  } else if (language === 'Spanish') {
    return 'Hola!';
  } else if (language === 'Chinese') {
    return 'Ni Hao!';
  } return 'Hello!';
};

const isTenOrFive = (num) => {
  if (num === 10 || num === 5) {
    return true;
  } return false;
  // otherwise return false
};

const isInRange = (num) => {
  if (num < 50 && num > 20) {
    return true;
  } return false;
  // return true if num is less than 50 and greater than 20
};

const isInteger = (num) => {
  return typeof num === 'number' &&
  isFinite(num) &&
  Math.floor(num) === num;
};
  // hint: you can solve this using Math.floor
const fizzBuzz = (num) => {
  const divisibleByFive = num % 5 === 0;
  const divisibleByThree = num % 3 === 0;
  if (divisibleByFive && divisibleByThree) return 'fizzbuzz';
  if (divisibleByThree) return 'fizz';
  if (divisibleByFive) return 'buzz';
  return num;
};

const isPrime = (num) => {
  if (num === 0 || num === 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const returnFirst = (arr) => {
  return arr[0];
  // return the first item from the array
};

const returnLast = (arr) => {
  return arr[arr.length - 1];
  // return the last item of the array
};

const getArrayLength = (arr) => {
  return arr.length;
  // return the length of the array
};

const incrementByOne = (arr) => {
  return arr.map(num => num + 1);
};

const addItemToArray = (arr, item) => {
  arr.unshift(item);
  return arr;
};

const addItemToFront = (arr, item) => {
  arr.unshift(item);
  return arr;
};

const wordsToSentence = (words) => {
  return words.join(' ');
};

const contains = (arr, item) => {
  return arr.includes(item);
  // check to see if item is inside of arr
  // return true if it is, otherwise return false
};

const addNumbers = (numbers) => {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  } return sum;
};

const averageTestScore = (testScores) => {
  let sum = 0;
  for (let i = 0; i < testScores.length; i++) {
    sum += parseInt(testScores[i], 10);
  }
  return sum / testScores.length;
};
const largestNumber = (x, y) => {
  if (x > y) {
    return x;
  }
  if (y > x) {
    return y;
  }
  return x;
};

// Do not modify code below this line.
// --------------------------------

module.exports = {
  getBiggest,
  greeting,
  isTenOrFive,
  isInRange,
  isInteger,
  fizzBuzz,
  isPrime,
  returnFirst,
  returnLast,
  getArrayLength,
  incrementByOne,
  addItemToArray,
  addItemToFront,
  wordsToSentence,
  contains,
  addNumbers,
  averageTestScore,
  largestNumber
};
