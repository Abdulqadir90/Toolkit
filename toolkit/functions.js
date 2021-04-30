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


// function timeBack(hours, min, lengthOfBreakInMinutes) {
//     let min1 = min + lengthOfBreakInMinutes;
//     let hours1 = hours;
//     if(min1 >= 60 ){
//         hours1 = hours1 + 1;

//         min1  = min1 - 60;
//     }
//     return `timeBack: ${hours1}: ${min1}`;

// }

// console.log(timeBack(11, 30, 15));
// console.log(timeBack(11, 50, 15)); 
// console.log(timeBack(11, 45, 15)); 
// console.log(timeBack(12, 45, 15)); 
// console.log(timeBack(23, 50, 15)); 

// Exercises using Functions
// 1. Using the solution above to write a program to implement the following version of the
// game:
// • The players decide how many dice to throw
// • The score is calculated as 1 point for each even number thrown plus 1 bonus
// point for each 6 thrown
// Make sure you use functions in your solution.
// 2. Write a function called findLargest that will find and return the largest value in an array
// of numbers (see your solution to Exercise 6 above). Before you start, think about the
// parameter you will provide to this function. Here are two different ways your function
// can be called:
// 1 let large1 = findLargest ([5, 8, 3, 1, 0]) ;
// 2 let large2 = findLargest ([10, 10, 9, 8, 11]);
// The first version should return 8 and the second one should return 11. test your
// function to check the correct value is returned

// let large1 = findLargest ([5, 8, 3, 1, 0]) ;
// let large2 = findLargest ([10, 10, 9, 8, 11]);

// function findLargest(list) {
//     let largest = list[0];
//     for(let index = 1; index < list.length; index++) {
//         if(list[index] > largest) {
//             largest = list[index];
//         }
//     } return largest;
// }

// let large1 = findLargest([5, 8, 3, 1, 0]);
// console.log(large1)

// With function method
// function findLargest(arr) {
//     let large1 = Math.max.apply(Math, arr);
//     return large1;
// }
// console.log(findLargest([5, 8, 3, 0]));
// console.log(findLargest([10, 10, 9, 8, 11]));

// 3. Write a function called drawTriangle that will produce the triangle output in Exercise 2
// from the set of exercises above. Use a parameter that will determine how many rows
// of stars to draw. If you call drawTriangle(5), it should draw the following output:
// *
// **
// ***
// ****
// *****
// Does this function need to return anything

// function drawTriangle(count) {
//     let row = "";
//     for (let index = 0; index < count; index++) {
//         row += "*";
//         console.log(row);
//     }
//     return row;
// }

// drawTriangle(5);

// Write a JavaScript function called reverseIt that reverses an integer number and
// returns the reversed value. You need to use a parameter (the function needs to know
// the number to be reversed). You also need a return statement. Here is a test to see if
// your function works:
// let reversed = reverseIt(36478);
// console.log(reversed); // expected output 87463
// console.log(typeof reversed); // expected output: "number"

// function reverseIt(num){
//     num = num + "";
//     let result = Number(num.split("").reverse().join(""));
//     console.log('result', result);
//     return result;
// }
// reverseIt(36478);

