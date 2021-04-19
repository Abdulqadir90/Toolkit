// Exercise 1 
let count = 1;
while(count <= 10) {
    console.log(count);
    count = count +1;
}

// Exercise 2


let stars = 4;
let numberOfRows = 1;
while(numberOfRows <= stars){
    let count = 0;
    let row = "";

    while(count < stars){
        row = row + "*";
        count = count + 1;
    }
    console.log(row);
    stars = stars + 1;

}


