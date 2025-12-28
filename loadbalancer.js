/*
What we have to do ?

we are creating a load baalancer

1 dimentional array that has PCs 
each PC has a random load between 1 and 100
we need to sort the load at first 
then we need to share the load between the PCs 

we will stop when?
the the obtained load + the load we have in the PC that will take the load
are less than or equal the PC with the highest load


Steps to follow: 

1- Define the array with random laods 
2- Sort the array ( we will write the sort function ourselves ) --> Merge Sort 
3- Create the function that will share the load 
4- Print the array with each change --> Before State, While Sorting, And After State 
*/

// Step 1: Define the array with random loads

const arrayLength = 10;
console.log("Array Length: ", arrayLength);

const loadsArray = [];

for (let i = 0; i < arrayLength; i++) {
  loadsArray.push(Math.floor(Math.random() * 100) + 1);
}

console.log("Initial Loads Array: ");
console.log(loadsArray);

// Step 2: Sort the array using Merge Sort

// Merge Function --> 
function merge(left, right) {
    let result = [];
    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }
    return result.concat(left.slice(i)).concat(right.slice(j));
}

// Merge Sort Function -->
function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
}

console.log("Sorting the Loads Array...");
let updated = mergeSort(loadsArray);

console.log("Sorted Loads Array: ");
console.log(updated);

// [0, 12, 23, 34, 45, 56, 67, 78, 89, 100] 
// [33, 12, 23, 34, 45, 56, 67, 78, 89, 67] 33 > 67
// [55, 12, 23, 34, 45, 56, 67, 78, 89, 44] 55 > 44 --> X

// Step 3: Create the function that will share the load 

function shareloads(arr) {
    let index = 0;

    while (loadsArray[index] + loadsArray[loadsArray.length - index] * 0.33 <= loadsArray[loadsArray.length - 1]) {
        loadsArray[index] += loadsArray[loadsArray.length - index] * 0.33;
        loadsArray[loadsArray.length - index] -= loadsArray[loadsArray.length - index] * 0.33;
        console.log(loadsArray);
        index++;
    }

    return loadsArray;
}

console.log("Sharing Loads Between PCs...");
let answer = shareloads(updated);

// Step 4: Print the final state of the loads array
console.log("Final Loads Array After Sharing: ");
console.log(answer);