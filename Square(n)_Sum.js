
// Ques Link : https://www.codewars.com/kata/515e271a311df0350d00000f

// My Solution

function squareSum(numbers) {
    var sum = 0;

    numbers.forEach((number) => {
        sum += number * number;
    })

    return sum;
}

// Optimized Solution

function squareSum(numbers) {
    return numbers.reduce(function (sum, n) {
        return (n * n) + sum;
    }, 0)
}