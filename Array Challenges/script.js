/* Always Hungry */

function alwaysHungry(arr) {
    let food = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === "food"){
            console.log("yummy")
            food++;
        }
    }
    if (food === 0) {
        console.log("I'm hungry")
    }
}
alwaysHungry([3.14, "food", "pie", true, "food"]);

alwaysHungry([4, 1, 5, 7, 2]);


/* High Pass Filter */

function highPass(arr, cutoff) {
    var filteredArr = [];
    for(var i=0; i<arr.length; i++) {
        if(arr[i] > cutoff) {
            filteredArr.push(arr[i]);
        }
    }
    console.log("FILTERED ARRAY CHALLENGE: ", filteredArr)

    return filteredArr;
}

const exampleArr = [10, 7, 5, 8, -4, 0, 2, 8, 12, 3]
highPass(exampleArr, 5)

/* Better than average */

function betterThanAverage(arr) {
    var sum = 0;
    var count = 0;

    let result = arr.forEach((function (value) {
        sum = sum + value;
    }))

    let average = sum / arr.length;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > average) {
            count++;
        }
    }

    console.log("BETTER THAN AVERAGE CHALLENGE: ", count)
    return count;
}

betterThanAverage(exampleArr)

/* Reverse Array */

function reverse(arr) {
    arr.reverse()
    return arr;
}

let reversedArray = reverse(exampleArr)
console.log("REVERSE ARRAY CHALLENGE: ", reversedArray)

/* Fibonacci Array */

// function fibonacciArray(n) {

//     var fibArr = [0, 1];
//     while(fibArr.length < n) {
//         var prev = fibArr[fibArr.length-1];
//         var prevprev = fibArr[fibArr.length-2];
//         fibArr.push(prev + prevprev);
//     }
//     return fibArr;
// }

// could not figure this one out on my own
// I copy/pasted the solution just to have for my own notes.
