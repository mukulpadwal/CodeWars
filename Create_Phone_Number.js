
// Ques Link : https://www.codewars.com/kata/525f50e3b73515a6db000b83

// My Solution

function createPhoneNumber(numbers) {
    let generatedPhoneNumber = "";

    for (let i = 0; i < numbers.length; i++) {
        // 3 different Steps 
        // first 3 numbers

        if (i == 0) {
            generatedPhoneNumber += "(";
        }

        if (i >= 0 && i <= 2) {
            generatedPhoneNumber += numbers[i];
        }

        if (i == 2) {
            generatedPhoneNumber += ") ";
        }

        // Middle 3 Numbers
        if (i >= 3 && i <= 5) {
            generatedPhoneNumber += numbers[i];
        }

        if (i == 5) {
            generatedPhoneNumber += "-";
        }

        // Last 4 numbers
        if (i > 5) {
            generatedPhoneNumber += numbers[i];
        }

    }

    return generatedPhoneNumber;
}

// Optimized Solution

function createPhoneNumber(numbers) {
    var format = "(xxx) xxx-xxxx";

    for (var i = 0; i < numbers.length; i++) {
        format = format.replace('x', numbers[i]);
    }

    return format;
}