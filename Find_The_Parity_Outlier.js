
// Ques Link : https://www.codewars.com/kata/5526fc09a1bbd946250002dc

// My Solution

function findOutlier(integers) {
    //your code here
    // What we can do is we can store index of odd and even elements in two different arrays
    var odd = [];
    var even = [];

    for (var i = 0; i < integers.length; i++) {
        if (integers[i] % 2 === 0) {
            even.push(i);
        } else {
            odd.push(i);
        }
    }

    if (odd.length === 1) return integers[odd[0]];

    return integers[even[0]];
}

// Optimized/Clean Solution

function findOutlier(int) {
    var even = int.filter(a => a % 2 == 0);
    var odd = int.filter(a => a % 2 !== 0);
    return even.length == 1 ? even[0] : odd[0];
}