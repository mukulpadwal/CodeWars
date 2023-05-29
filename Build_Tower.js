
// Ques Link : https://www.codewars.com/kata/576757b1df89ecf5bd00073b

// My Solution

function towerBuilder(nFloors) {
    // build here
    var arr = [];
    for (var i = 1; i <= nFloors; i++) {
        var str = "";

        // Logic For Spaces
        var spaces = nFloors - i;
        for (var j = 0; j < spaces; j++) {
            str += " ";
        }

        // Logic For Stars
        for (var j = 1; j <= i * 2 - 1; j++) {
            str += "*";
        }

        // Logic For Spaces
        for (var j = 0; j < spaces; j++) {
            str += " ";
        }

        arr.push(str);

    }

    return arr;
}

// Optimized Solution

function towerBuilder(nFloors) {
    var tower = [];

    for (var i = 0; i < nFloors; i++) {
        tower.push(" ".repeat(nFloors - i - 1)
            + "*".repeat((i * 2) + 1)
            + " ".repeat(nFloors - i - 1));
    }
    
    return tower;
}