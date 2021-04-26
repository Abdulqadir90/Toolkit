// Exercise 4

// Write a function called countWords which takes a single string parameter and counts
// the number of words in the string. Hint, the string function called split is useful.

// Here is a test for your solution:

// let result = countWords(’The rain in spain falls mainly on the plain’);
// console.log(‘${result } words in the sentence‘);
// // output is ...
// 9 words in the sentence

function countWords(str) {
        let words = str.split(" ").length;
    
        return words;
    }

    let result = countWords("The rain in spain falls mainly on the plain");

console.log(`${result}`);
