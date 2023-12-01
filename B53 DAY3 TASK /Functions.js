//Print odd numbers in an array.

// Anonymous function
let printOddNumbers = function(arr) {
    arr.forEach(function(num) {
        if (num % 2 !== 0) {
            console.log(num);
        }
    });
};

// IIFE
(function(arr) {
    arr.forEach(function(num) {
        if (num % 2 !== 0) {
            console.log(num);
        }
    });
})([1, 2, 3, 4, 5]);

//Convert all the strings to title caps in a string array

// Anonymous function
let convertToTitleCaps = function(arr) {
    return arr.map(function(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    });
};

// IIFE
let titleCapsArray = (function(arr) {
    return arr.map(function(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    });
})(["apple", "banana", "cherry"]);
console.log(titleCapsArray);

// Sum of all numbers in an array

// Anonymous function
let sumArray = function(arr) {
    return arr.reduce(function(sum, num) {
        return sum + num;
    }, 0);
};

// IIFE
let totalSum = (function(arr) {
    return arr.reduce(function(sum, num) {
        return sum + num;
    }, 0);
})([1, 2, 3, 4, 5]);
console.log(totalSum);

// Return all the prime numbers in an array

// Anonymous function
let getPrimeNumbers = function(arr) {
    return arr.filter(function(num) {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return num > 1;
    });
};

// IIFE
let primes = (function(arr) {
    return arr.filter(function(num) {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return num > 1;
    });
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(primes);

// Return all the palindromes in an array

// Anonymous function
let getPalindromes = function(arr) {
    return arr.filter(function(str) {
        return str === str.split('').reverse().join('');
    });
};

// IIFE
let palindromes = (function(arr) {
    return arr.filter(function(str) {
        return str === str.split('').reverse().join('');
    });
})(["level", "hello", "civic", "world"]);
console.log(palindromes);

// Return median of two sorted arrays of the same size.

// Anonymous function
let findMedian = function(arr1, arr2) {
    let combined = arr1.concat(arr2);
    combined.sort(function(a, b) {
        return a - b;
    });
    let length = combined.length;
    let mid = Math.floor(length / 2);
    if (length % 2 === 0) {
        return (combined[mid - 1] + combined[mid]) / 2;
    } else {
        return combined[mid];
    }
};

// IIFE
let median = (function(arr1, arr2) {
    let combined = arr1.concat(arr2);
    combined.sort(function(a, b) {
        return a - b;
    });
    let length = combined.length;
    let mid = Math.floor(length / 2);
    if (length % 2 === 0) {
        return (combined[mid - 1] + combined[mid]) / 2;
    } else {
        return combined[mid];
    }
})([1, 2, 3], [4, 5, 6]);
console.log(median);

// Remove duplicates from an array

// Anonymous function
let removeDuplicates = function(arr) {
    return arr.filter(function(value, index, self) {
        return self.indexOf(value) === index;
    });
};

// IIFE
let uniqueArray = (function(arr) {
    return arr.filter(function(value, index, self) {
        return self.indexOf(value) === index;
    });
})([1, 2, 2, 3, 4, 4, 5]);
console.log(uniqueArray);

//Rotate an array by k time

// Anonymous function
let rotateArray = function(arr, k) {
    let len = arr.length;
    k = k % len;
    return arr.slice(k).concat(arr.slice(0, k));
};

// IIFE
let rotated = (function(arr, k) {
    let len = arr.length;
    k = k % len;
    return arr.slice(k).concat(arr.slice(0, k));
})([1, 2, 3, 4, 5], 2);
console.log(rotated);
