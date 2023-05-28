
// Ques Link : https://www.codewars.com/kata/546f922b54af40e1e90001da

// My Solution

function alphabetPosition(text) {

    var obj = {
        "a": 1,
        "b": 2,
        "c": 3,
        "d": 4,
        "e": 5,
        "f": 6,
        "g": 7,
        "h": 8,
        "i": 9,
        "j": 10,
        "k": 11,
        "l": 12,
        "m": 13,
        "n": 14,
        "o": 15,
        "p": 16,
        "q": 17,
        "r": 18,
        "s": 19,
        "t": 20,
        "u": 21,
        "v": 22,
        "w": 23,
        "x": 24,
        "y": 25,
        "z": 26,
    }

    text = text.toLowerCase();

    var ansText = "";

    for (var i = 0; i < text.length; i++) {
        if (!(/[a-zA-Z]/).test(text[i])) {
            continue;
        }

        ansText += obj[text[i]] + " ";
    }

    return ansText.trim();
}

// Optimized Solution

function alphabetPosition(text) {

    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    return text.toLowerCase().replace(/[^a-z]/g, '').split('').map(x => alphabet.indexOf(x) + 1).join(' ');

}

