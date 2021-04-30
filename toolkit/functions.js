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

// Write a JavaScript function that accepts a string as a parameter and returns the
// longest word within the string.
// Example string : ’Web Development Tutorial’
// Expected Output : ’Development’

// function longestWord(str) { 
//     return str.split(' ').reduce((acc, curr) => {
//         if (curr.length > acc.length) {
//             acc = curr;
//         } 
//         return acc;
//     }, '');
// }

// function longestWord(str) { 
//     let result = '';
//     str = str.split(' ');
//     for (let i = 0; i<str.length; i++) {
//         if (str[i].length > result.length) {
//             result = str[i];
//         }
//     }
//     return result;
// }
// longestWord('Web Development Tutorial');

// Write a JavaScript function that accepts two arguments, a string and a letter and the
// function will count and return the number of occurrences of the specified letter within
// the string.
// Sample arguments : ’code your future’, ’u’
// Expected output : 3

// function check(str, letter) {
//     let count = 0;
//     for (let i=0; i<str.length; i++) {
//         if (str[i] === letter) {
//             count++;
//         }
//     }
//     return count;
// }

// check('hello', 'l');

// 6.3 Exercises on Objects
// 1. Add a function called circumference to the circle object described above. This function
// should return the circumference of the circle calculated by the formula 2 ∗ π ∗ radius.

// let circle = {
//          coordinates: {
//          x: "15",
//          y: "150",
//          },
//          radius: 25,
    
//          area: function () {
//              return Math.PI * (this.radius *  this.radius);
//          },
//          circumference: function () {
//              return 2 * Math.PI * this.radius

//         }
// };

// circle.radius =  9;
// console.log(area = `${circle.area()}`);
// console.log(circumference = `${circle.circumference()}`);

// 2. Using the circle object as an example. Write an object to represent a rectangle. It
// should have the following properties:
// • x and y coordinates which represent the position of the top left corner of the
// rectangle
// • a width
// • a height.

let rectangle = {
         coordinates: {
         x: "100",
         y: "150",
         },
         width: 200,
         height: 100, 
    
         area: function () {
             return Math.PI * (this.radius *  this.radius);
         },
         circumference: function () {
             return 2 * Math.PI * this.radius

        }
};

// 3. Add a function to your rectangle object that will calculate and return the area of the
// rectangle.

rectangle.radius =  9;
console.log(area = `${rectangle.area()}`);
