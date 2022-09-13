 (function() {
     "use strict";
//
//
// /* ########################################################################## */
//
// /**
//  * TODO:
//  * Create a function named `analyzeColor` that accepts a string that is a color
//  * name as input. This function should return a message which relates to the
//  * color stated in the argument of the function. For colors you do not have
//  * responses written for, return a string stating so
//  *
//  * Example:
//  *  > analyzeColor('blue') // returns "blue is the color of the sky"
//  *  > analyzeColor('red') // returns "Strawberries are red"
//  *
//  *
//  *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
//  *
//  * You should use an if-else-if-else block to return different messages.
//  *
//  * Test your function by passing various string literals to it and
//  * console.logging the function's return value
//  */
// function analyzeColor(color) {
//     if (color == 'red') {
//         return "Apples are " + color + ".";
//     } else
//     if (color == 'orange') {
//         return "The sun sometimes appears " + color + ".";
//     } else
//     if (color == 'yellow') {
//         return "Lemons are " + color + ".";
//     } else
//     if (color == 'green') {
//         return "Grass is " + color + " (when it is alive).";
//     } else
//     if (color == 'blue') {
//         return "The sky appears " + color + ".";
//     } else
//     if (color == 'indigo') {
//         return "The color between blue and purple is " + color + ".";
//     } else
//     if (color == 'violet') {
//         return "Purple is the same as " + color + ".";
//     } else
//     {
//         return "I don't know anything about " + color + ".";
//     }
// }
//
//     console.log(analyzeColor('red'));
//     console.log(analyzeColor('orange'));
//     console.log(analyzeColor('yellow'));
//     console.log(analyzeColor('green'));
//     console.log(analyzeColor('blue'));
//     console.log(analyzeColor('indigo'));
//     console.log(analyzeColor('violet'));
//     console.log(analyzeColor('nonColor'));

//     // Don't change the next two lines!
// // These lines create two variables for you:
// // - `colors`: a list of the colors of the rainbow
// // - `randomColor`: contains a single random color value from the list (this
// //                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
//**
//  * TODO:
//  * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
//  * You should see a different message every time you refresh the page
//  */
// console.log(analyzeColor(randomColor));
// /**
//  * TODO:
//  * Comment out the code above, and refactor your function to use a switch-case statement
//  */
function analyzeColor(color) {
    switch (color) {
        case 'red':
            return "Apples are " + color + ".";
        case 'orange':
            return "The sun sometimes appears " + color + ".";
        case 'yellow':
            return "Lemons are " + color + ".";
        case 'green':
            return "Grass is " + color + " (when it is alive).";
        case 'blue':
            return "The sky appears " + color + ".";
        case 'indigo':
            return "The color between blue and purple is " + color + ".";
        case 'violet':
            return "Purple is the same as " + color + ".";
        default:
            return "I don't know anything about " + color + ".";
    }
}

    console.log(analyzeColor('red'));
    console.log(analyzeColor('orange'));
    console.log(analyzeColor('yellow'));
    console.log(analyzeColor('green'));
    console.log(analyzeColor('blue'));
    console.log(analyzeColor('indigo'));
    console.log(analyzeColor('violet'));
    console.log(analyzeColor('nonColor'));
// /**
//  * TODO:
//  * Prompt the user for a color when the page loads, and pass the input from the
//  * user to your `analyzeColor` function. Alert the return value from your
//  * function to show it to the user.
//  */
//
let col = prompt("Please enter a color.");
alert(analyzeColor(col));
// /* ########################################################################## */
//
// /**
//  * TODO:
//  * Suppose there's a promotion in Walmart, each customer is given a randomly
//  * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
//  * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
//  * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
//  * everything for free!.
//  *
//  * Write a function named `calculateTotal` which accepts a lucky number and total
//  * amount, and returns the discounted price.
//  *
//  * Example:
//  * calculateTotal(0, 100) // returns 100
//  * calculateTotal(4, 100) // returns 50
//  * calculateTotal(5, 100) // returns 0
//  *
//  * Test your function by passing it various values and checking for the expected
//  * return value.
//  */
//
function calculateTotal(num, amt) {
    let val = 0;
    switch(num) {
        case 1: val = 0.9 * amt; break;
        case 2: val = 0.75 * amt; break;
        case 3: val = 0.65 * amt; break;
        case 4: val = 0.5 * amt; break;
        case 5: val = 0; break;
        default: val = amt;
    }
    return val.toFixed(2);
}

console.log(calculateTotal(0,100));
    console.log(calculateTotal(1,100));
    console.log(calculateTotal(2,100));
    console.log(calculateTotal(3,100));
    console.log(calculateTotal(4,100));
    console.log(calculateTotal(5,100));
    console.log(calculateTotal(6,100));

// /**
//  * TODO:
//  * Uncomment the line below to generate a random number between 0 and 5.
//  * (In this line of code, 0 is inclusive, and 6 is exclusive)
//  * Prompt the user for their total bill, then use your `calculateTotal` function
//  * and alerts to display to the user what their lucky number was, what their
//  * price before the discount was, and what their price after the discount is.
//  */
// // Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);
let bill = Number(prompt("Please enter the amount of your bill."));
alert("Your bill was: $" + bill.toFixed(2));
alert("Your lucky number was: " + luckyNumber);
alert("Your final charge is: $" + calculateTotal(luckyNumber ,bill));
// /**
//  * TODO:
//  * Write some JavaScript that uses a `confirm` dialog to ask the user if they
//  * would like to enter a number. If they click 'Ok', prompt the user for a
//  * number, then use 3 separate alerts to tell the user:
//  *
//  * - whether the number is even or odd
//  * - what the number plus 100 is
//  * - if the number is negative or positive
//  *
//  * Do *NOT* display any of the above information
//  * if the user enters a value that is not of the number data type.
//  * Instead, use an alert to inform them of the incorrect input data type.
//  *
//  *
//  * Can you refactor your code to use functions?
//  * HINT: The way we prompt for a value could be improved
//  */
//


let s = "name";
let s2 = "7";
console.log(parseInt(s));
     console.log(parseInt(s2));

// let opt = confirm("Would you like to enter a number? Click OK for yes, CANCEL for no");
// if (opt) {
//     let n = prompt("Please enter a number.");
//     if (isNaN(n)) {
//         alert("That was not a number.")
//     } else {

// alternatively, comment out (the six lines above as well as line 225) then uncomment the 2 lines below
       let n = getValue();
       if (n != null) {

        n = Number(n);
        if (/*n % 2 == 0*/ isEven(n) ) {
            alert("Your number is even.");
        } else {
            alert("Your number is odd.");
        }
        alert("Adding 100 to your number results in :" + (n + 100) /*(add100(n))*/ );
        if (/*n >= 0*/ isPositive(n) ) {
            alert("Your number is positive.");
        } else {
            alert("Your number is negative.");
        }
    }

//}

function getValue() {
    let opt = confirm("Would you like to enter a number? Click OK for yes, CANCEL for no");
    if (opt) {
        let n = prompt("Please enter a number.");
        if (isNaN(n)) {
            alert("That was not a number.");
            return null;
        } else {
            return n;
        }
    }
}

function isEven(n) {
    if (n % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

function add100(n) {
    return Number(n) + 100;
     }

function isPositive(n) {
    if (n >= 0) {
        return true;
    } else {
        return false;
    }
}



} ());