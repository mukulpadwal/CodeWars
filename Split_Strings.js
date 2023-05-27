
// Ques Link : https://www.codewars.com/kata/515de9ae9dcfc28eb6000001

// My Solution

function solution(str) {

    var arr = str.split("");
    var ansArr = [];

    if (arr.length % 2 === 0) {
        // Even Length equally 2 pairs are distributed
        for (var i = 0; i < arr.length; i += 2) {
            ansArr.push(str[i] + str[i + 1]);
        }
    } else {
        // Odd Length last alphabet we need to handle
        for (var i = 0; i < arr.length - 1; i += 2) {
            ansArr.push(str[i] + str[i + 1]);
        }
        ansArr.push(str[arr.length - 1] + "_");
    }


    return ansArr;
}

// Optimized Solution

function solution(str) {
    let res = [];
    for (var i = 0; i < str.length; i += 2) res.push(`${str[i] + (str[i + 1] || '_')}`)
    return res;
}

