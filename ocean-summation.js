/*
what we have to do:
1- We need to define array's length
2- we need to fill the array with random numbers between 1 and 100
3- we need to loop through the array with one index 
4- sum the values of the array 
*/

// Step 1: Define the array's length

const arrayLength = Math.floor(Math.random() * 10) + 1;
console.log("Array Length:", arrayLength);

// Step 2: we need to fill the array with random numbers between 1 and 100

const numbersArray = [];

for(let i = 0; i < arrayLength; i++) {
    let Array = [];
    for(let j =0; j < arrayLength; j++) {
        const randomNum = Math.floor(Math.random() * 100) + 1;
        Array.push(randomNum);
    }
    numbersArray.push(Array);
    Array = [];
}

console.log("Generated 2D Array:");
console.log(numbersArray);

// Step 3: we need to loop the ocean through the array with one index

let summation = 0;

if(arrayLength > 1) {
    for(let i = 1; i < arrayLength; i++) {
        summation += numbersArray[0][i - 1];
        summation += numbersArray[i - 1][arrayLength - 1];
        summation += numbersArray[arrayLength - 1][i];
        summation += numbersArray[arrayLength - i][0];
}
} else {
    summation = numbersArray[0][0];
}

//Step 4: loog the summation of the values
console.log(summation);