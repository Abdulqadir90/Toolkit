// Exercise 1 
// let count = 1;
// while(count <= 10) {
//     console.log(count);
//     count = count +1;
// }

// Exercise 2


// let stars = "";
// let numberOfRows = 10;
// let count = 1;
// while(count <= numberOfRows){
//     count = count + 1;
//     stars = stars + "*";
//     console.log(stars)

// }

// Exercise 3

// for (let i = 0; i < 16; i++) {
//     if( i % 2 == 0){
//         console.log(i + "even number")
//     } else {
//         console.log(i + "odd number")
//     }
// }

// Exercise 4

// const array1 = [1,0,2,3,4];
// const array2 = [3,5,6,7,8,13];

// let sums = [];

// for (let i = 0; i < array1.length; i++){
//     sums.push(array1[i] + array2[i])

// }
//     sums.push(array2[array2.length-1])
//     console.log(sums)


// Exercise 5

// const scores = [73, 35, 40, 68, 67, 91, 42, 48, 39, 55, 21, 95];

// for (let i = 0; i < scores.length; i++) {
//     if (scores[i] >= 40) {
//         console.log(scores[i])
//     }
// }

// Exercise 6

// const scores = [73, 35, 68, 67, 91, 42, 48, 55, 21, 95];

// let highestNum = Math.max(...scores);
// console.log(highestNum);

// let highestNum = 0;

// for (let i = 0; i < scores.length; i++) {
//     if(highestNum < scores[i]) {
//         highestNum = scores[i]
//     }
    
// }
// console.log(highestNum);

// Exercise 7

// const scores = [73, 35, 68, 67, 91, 42, 48, 55, 21, 95];

// let lowestNum = scores[0];

// for (let i = 1; i < scores.length; i++) {
//     if(lowestNum > scores[i]) {
//        lowestNum = scores[i]
//        console.log(lowestNum)
// }
// }


// Exercise 8

// const scores = [73, 35, 68, 67, 91, 42, 48, 55, 21, 95];
// const scores1 = [];


// let total = 0;
//     let average = 0;
//     if ( scores.length > 0) {
//         for( let i = 0; i < scores.length; i++) {
//             total += scores[i]
//             average = total / scores.length;

//         }
//         console.log(average)
//     }


// Exercise 9

// const scores = [40, 40, 40];
// const scores1 = [];


// let total = 0;
//     let average = 0;
//     if ( scores.length > 0) {
//         for( let i = 0; i < scores.length; i++) {
//             total += scores[i]
//             average = total / scores.length;

//         }
//         console.log(average)
//     }


// Exercise 10

// const scores = [73, 35, 68, 67, 91, 42, 48, 55, 21, 95];
// const scores1 = [];


// let total = 0;
//     let average = 0;
//     if ( scores.length > 0) {
//         for( let i = 0; i < scores.length; i++) {
//             total += scores[i]
//             average = total / scores.length;

//         }
//         console.log(average)
//     } else {
//         console.log("not working");
//     }

// Exercise 11

// const scores = [73, 35, 68, 67, 91, 42, 48, 55, 21, 95];

// let total = 0;
//     let average = 0;

//     for( let i = 0; i < scores.length; i++) {
//     total += scores[i]
//     average = total / scores.length;

//     }

//     for( let i = 0; i < scores.length; i++) {
//         if(scores[i] < average + 10 && scores[i] > average - 10){
//             console.log(scores[i]);
//         }
//     }

//     console.log(average);





