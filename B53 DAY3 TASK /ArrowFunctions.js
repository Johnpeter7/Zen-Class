// Print odd numbers in an array

// Arrow function
let printOddNumbers = arr => {
    arr.forEach(num => {
        if (num % 2 !== 0) {
            console.log(num);
        }
    });
};

printOddNumbers([1, 2, 3, 4, 5]);

// Convert all the strings to title caps in a string array

// Arrow function
let convertToTitleCaps = arr => {
    return arr.map(str => str.charAt(0).toUpperCase() + str.slice(1));
};

let titleCapsArray = convertToTitleCaps(["apple", "banana", "cherry"]);
console.log(titleCapsArray);

// Sum of all numbers in an array

// Arrow function
let sumArray = arr => arr.reduce((sum, num) => sum + num, 0);

let totalSum = sumArray([1, 2, 3, 4, 5]);
console.log(totalSum);

// Return all the prime numbers in an array

// Arrow function
let getPrimeNumbers = arr => {
    return arr.filter(num => {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return num > 1;
    });
};

let primes = getPrimeNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(primes);

// Return all the palindromes in an array.

// Arrow function
const isPalindrome = (str) => {
  const reversedStr = str.split('').reverse().join('');
  return str === reversedStr;
};

const findAllPalindromes = (arr) => {
  return arr.filter((word) => isPalindrome(word));
};
const wordsArray2 = ["level", "hello", "deed", "world", "radar"];
const palindromesArray2 = findAllPalindromes(wordsArray2);
console.log(palindromesArray2);
