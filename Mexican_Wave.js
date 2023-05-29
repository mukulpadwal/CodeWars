
// Ques Link : https://www.codewars.com/kata/58f5c63f1e26ecda7e000029

// My Solution

function wave(str) {
    // Code here
    var ansArr = [];

    for (var i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            continue;
        }

        var leftPart = str.substring(0, i);
        var upper = str.substring(i, i + 1).toUpperCase();
        var rightPart = str.substring(i + 1, str.length);

        ansArr.push(leftPart + upper + rightPart);
    }

    return ansArr;
}

// Optimized Solution

function wave(str) {
    let result = [];

    str.split("").forEach((char, index) => {
        if (/[a-z]/.test(char)) {
            result.push(str.slice(0, index) + char.toUpperCase() + str.slice(index + 1));
        }
    });

    return result;
}