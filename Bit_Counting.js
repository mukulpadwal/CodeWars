
// Ques Link : https://www.codewars.com/kata/526571aae218b8ee490006f4

// My Solution

var countBits = function (n) {
    // Program Me
    var bitString = "";

    while (n >= 1) {
        var rem = Math.floor(n % 2);
        bitString = rem + bitString;
        n /= 2;
    }

    var arr = [...bitString].filter((b) => {
        return b === "1";
    })
    return arr.length;
};

// Optimized Solution

var countBits = function (n) {
    return n.toString(2).replace(/0/g, '').length;
};