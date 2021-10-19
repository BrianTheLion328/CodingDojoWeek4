/* Print odds 1-20 */

function printOdds() {
    for (let i = 1; i <= 20; i++){
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
}

console.log("PRINTS ODDS 1-20 CHALLENGE: ")
printOdds()

/* Decreasing Multiples of 3 */

function divisibleByThree() {
    for (let i = 0; i <= 100; i++){
        if (i % 3 === 0) {
            console.log(i);
        }
    }
}

console.log("DIVISIBLE BY THREE CHALLENGE: ")
divisibleByThree()

/* Print the sequence */

function printTheSequence() {
    for (let i = 4; i >= -3.5; i++){
        console.log(i);
        i = i - 2.5;
    }
}

console.log("PRINT THE SEQUENCE CHALLENGE: ")
printTheSequence()

/* Sigma */

function sigmaFunction() {
    // define a variable called sum
    // create a loop from 1 to 100
    // add index to sum to equal the new value of sum
    // once the loop ends, console.log sum

    let sum = 0;

    for (let i = 1; i <= 100; i++){
        sum += i;
    }
    console.log(sum)

}

console.log("SIGMA CHALLENGE: ")
sigmaFunction()

/* Factorial */

function factorialFunction() {
    // define a variable called product
    let product = 1;

    for (let i = 1; i <= 12; i++){
        product *= i;
    }
    console.log(product)
}

console.log("FACTORIAL FUNCTION CHALLENGE: ")
factorialFunction()
