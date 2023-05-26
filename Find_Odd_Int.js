// Ques Link : https://www.codewars.com/kata/54da5a58ea159efa38000836

// My Solution

function findOdd(A) {
    //happy coding!
    // We are using the xor operator
    // 0 ^ 0 = 0
    // 0 ^ 1 = 1

    // if we xor same numbers it results in 0
    var odd = 0;

    A.forEach((num) => {
        odd = odd ^ num;
    })

    return odd;
}

// Optimized Solution

const findOdd = (A) => A.reduce((a, b) => a ^ b);