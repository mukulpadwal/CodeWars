
// Ques Link : https://www.codewars.com/kata/52449b062fb80683ec000024

// My Solution

function generateHashtag(str) {
    str = str.trim();

    if (str.length === 0) return false;

    var hashStr = "#";

    var arr = str.split(" ");

    arr.forEach((word) => {
        word = word.trim();
        word = word.substring(0, 1).toUpperCase() + word.substring(1,);
        hashStr += word;
    });

    //   hashStr = hashStr.replaceAll(' ','');
    //   console.log(hashStr);

    if (hashStr.length > 140) {
        return false;
    }

    return hashStr;
}

// Optimized/Clean Solution

function generateHashtag(str) {

    var hashtag = str.split(' ').reduce(function (tag, word) {
        return tag + word.charAt(0).toUpperCase() + word.substring(1);
    }, '#');

    return hashtag.length == 1 || hashtag.length > 140 ? false : hashtag;
}