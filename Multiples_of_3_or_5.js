
// Ques Link : https://www.codewars.com/kata/514b92a657cdc65150000006

// My Solution

function solution(number) {

    if (number < 0) return 0;

    // Let's create an array to store all the possible multiples of 3 and 5
    var arr = [];

    // Iterate from the given number to 1
    for (var i = number - 1; i > 0; i--) {

        if (i % 3 === 0 && i % 5 === 0) {
            // Multiple of 3 and 5
            arr.push(i);
            continue;
        }

        if (i % 3 === 0) {
            // Multiple of 3
            arr.push(i);
        }

        if (i % 5 === 0) {
            // Multiple of 5
            arr.push(i);
        }

    }

    var sum = 0;

    arr.forEach((d) => {
        sum += d;
    })

    return sum;
}

// Optimized/Clean Solution

function solution(number) {
    var sum = 0;

    for (var i = 1; i < number; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            sum += i
        }
    }
    return sum;
}