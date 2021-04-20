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

const scores = [73, 35, 40, 68, 67, 91, 42, 48, 39, 55, 21, 95];

for (let i = 0; i < scores.length; i++){
    if(scores[i] >=40 ) {
        console.log(scores[i])
    }
}
