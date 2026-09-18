function checkPalindrome(word) {
    let reversedWord = word.split("").reverse().join("");

    if (word === reversedWord) {
        return true;
    } else {
        return false;
    }
 }

let word = "racecar";
console.log(checkPalindrome(word));