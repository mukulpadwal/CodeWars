
// Ques Link : https://www.codewars.com/kata/52fba66badcd10859f00097e

// My Solution

function disemvowel(str) {

    str = str.replace(/a/gi, '');
    str = str.replace(/e/gi, '');
    str = str.replace(/i/gi, '');
    str = str.replace(/o/gi, '');
    str = str.replace(/u/gi, '');

    return str;
}

// Optimized Solution

function disemvowel(str) {
    return str.replace(/[aeiou]/gi, '');
}