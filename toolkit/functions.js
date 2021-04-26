// Exercise 4

// Write a function called countWords which takes a single string parameter and counts
// the number of words in the string. Hint, the string function called split is useful.

// Here is a test for your solution:

// let result = countWords(’The rain in spain falls mainly on the plain’);
// console.log(‘${result } words in the sentence‘);
// // output is ...
// 9 words in the sentence

// function countWords(str) {
//         let words = str.split(" ").length;
    
//         return words;
//     }

//     let result = countWords("The rain in spain falls mainly on the plain");

// console.log(`${result}`);


// Write a function called timeBack to return a string containing the time to start again
// after a coffee break. The function takes three parameters, hours, min (the current
// time), and lengthOfBreakInMinutes. Your solution should work with a 24 hour clock.
// Here are some tests for your function, but you should think of other tests:
// 1 console.log(timeBack(11, 30, 15)); // logs ’11:45’
// 2 console.log(timeBack(11, 50, 15)); // logs ’12:05’
// 3 console.log(timeBack(11, 45, 15)); // logs ’12:00’
// 4 console.log(timeBack(12, 45, 15)); // logs ’13:00’
// 5 console.log(timeBack(23, 50, 15)); // logs ’00:05’


function timeBack(hours, min, lengthOfBreakInMinutes) {
    let min1 = min + lengthOfBreakInMinutes;
    let hours1 = hours;
    if(min1 >= 60 ){
        hours1 = hours1 + 1;

        min1  = min1 - 60;
    }
    return `timeBack: ${hours1}: ${min1}`;
    
}

console.log(timeBack(11, 30, 15));
console.log(timeBack(11, 50, 15)); 
console.log(timeBack(11, 45, 15)); 
console.log(timeBack(12, 45, 15)); 
console.log(timeBack(23, 50, 15)); 
