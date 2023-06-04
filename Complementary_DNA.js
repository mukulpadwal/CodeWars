
// Ques Link : https://www.codewars.com/kata/554e4a2f232cdd87d9000038

// My Solution

function DNAStrand(dna) {
    //your code here
    var arr = dna.split("");

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === "A") {
            arr[i] = "T";
        } else if (arr[i] === "T") {
            arr[i] = "A";
        } else if (arr[i] === "G") {
            arr[i] = "C";
        } else if (arr[i] === "C") {
            arr[i] = "G";
        }
    }

    var ans = "";

    arr.forEach((alpha) => {
        ans += alpha;
    });

    return ans;
}

// Optimized Solution

var pairs = { 'A': 'T', 'T': 'A', 'C': 'G', 'G': 'C' };

function DNAStrand(dna) {
    return dna.split('').map(function (v) { return pairs[v] }).join('');
}