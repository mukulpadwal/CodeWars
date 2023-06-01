
// Ques Link : https://www.codewars.com/kata/5541f58a944b85ce6d00006a

// My Solution

function productFib(prod) {
    // ...
    var ans = [];

    var f = 0
    var s = 1;

    for (var i = 2; i < prod; i++) {

        if (f * s === prod) {
            ans.push(f);
            ans.push(s);
            ans.push(true);
            break;
        }

        if (f * s > prod) {
            ans.push(f);
            ans.push(s);
            ans.push(false);
            break;
        }

        var t = f + s;
        f = s;
        s = t;
    }

    return ans;
}

// Optimized Solution

function productFib(prod) {
    var n = 0;
    var nPlus = 1;
    while (n * nPlus < prod) {
        nPlus = n + nPlus;
        n = nPlus - n;
    }
    return [n, nPlus, n * nPlus === prod];
}

function productFib(prod) {
    var a = 1
    var b = 1;
    while (a * b < prod) {
        var next = a + b;
        a = b;
        b = next;
    }
    return [a, b, a * b === prod];
}