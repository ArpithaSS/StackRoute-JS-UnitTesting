// const Add = (a,b) =>{
//     return a+b;
// }

// let person= {
//     name: "ABC",
//     age: 30
// }
// export { Add, person};

// functions.js

// Function to add two numbers
function add(a, b) {
    return a + b;
}

// Function to check if a number is even
function isEven(num) {
    return num % 2 === 0;
}

// Function to find the largest number in an array
function findLargest(arr) {
    if (arr.length === 0) return null;
    return Math.max(...arr);
}

// Function to reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Function to capitalize the first letter of each word in a string
function capitalizeWords(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// Function to compute the factorial of a number
function factorial(n) {
    if (n < 0) return null;
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

// Function to merge two sorted arrays
function mergeSortedArrays(arr1, arr2) {
    let merged = [];
    let i = 0, j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            merged.push(arr1[i]);
            i++;
        } else {
            merged.push(arr2[j]);
            j++;
        }
    }
    return merged.concat(arr1.slice(i)).concat(arr2.slice(j));
}

// Function to check if a string is a palindrome
function isPalindrome(str) {
    const cleaned = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    return cleaned === cleaned.split('').reverse().join('');
}

export {
    add,
    isEven,
    findLargest,
    reverseString,
    capitalizeWords,
    factorial,
    mergeSortedArrays,
    isPalindrome    
};
