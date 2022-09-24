/*
Area of a Triangle: Write a JavaScript function that accepts the 3 lengths of a triangle and outputs the triangle’s area.
Reverse a String: Write a JS function that accepts a string and returns the string in reverse. example input: codeup, example output: puedoc
 */

(function () {

    // function areaOfTri(a, b, c) {
    //     // Heron's formula
    //     // https://byjus.com/maths/area-of-a-triangle/#Area-of-a-Triangle-Formula
    //     let semiP = (a + b + c) / 2;
    //     return Math.sqrt(semiP * (semiP - a) * (semiP - b) * (semiP - c));
    // }
    //
    // function backwards(str) {
    //     //https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/
    //     //truns string into an array then uses array.reverse, then rejoins the array in to a string and returns it.
    //     return str.split("").reverse().join("");
    // }
    //
    // //FizzBuzz Activity: Print numbers 1-100. If # is divisible by 3 print Fizz. If # is divisible by 5 print Buzz. If # is divisible by both 3 and 5 print FizzBuzz
    // // Shuffle an array: Write a function to shuffle an array to a completely and entirely random order.
    // for (let i = 0; i < 100; i++) {
    //     if ((i % 3 ==0) && (i % 5 == 0)){
    //         console.log(i + " FizzBuzz")
    //     } else
    //     if (i % 3 == 0) {
    //         console.log(i + " Fizz");
    //     } else
    //     if (i % 5 == 0) {
    //         console.log(i + " Buzz");
    //     } else {
    //         console.log(i);
    //     }
    // }
    //
    // function shuffle(myArray) {
    //     // below:  shuffle array - //from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
    //     // <0 is a before b, >0 is a after b and 0 is keep same:  mathrand-0.5 will be between -.5 and .5
    //     let currentValue = [...myArray];
    //     return myArray.sort(function () {return Math.random() - 0.5;});
    // }
    //
    // function shuffleArray(myArray) {
    //     return myArray.sort(function () {return Math.random() - 0.5;});
    // }
    //
    //
    //     console.log(areaOfTri(10, 10, 3));
    // console.log(backwards("codeup"));
    // let myArray = [1, 2, 3, 4, 5];
    // console.log("My array is - " + myArray);
    // console.log("Shuffled version is - " + shuffle(myArray));
    // console.log(shuffleArray(myArray));
    // console.log(Math.random() - 0.5);
    //

    /*
    Warm up:
    Create a function to sort the array from lowest to highest. Make sure the function accepts an array and
    returns an array.
    */

    // function sortArray(myArray) {
    //     let newArray = [...myArray];
    //     newArray.sort((a, b) => a - b);
    //     return newArray;
    // }
    //
    // let anArray = [1, 5, 7, 8, 2];
    // console.log(sortArray(anArray));
    // console.log(anArray);


    /*
    2. Write a function that returns the reading status of each of the following books:
    */
    /*
        Core competencies assessed
        Reading and following directions
        Producing solutions that match the problem specification
        Using Git and working with GitHub
            Cloning a git repository from GitHub
        Creating your own branch
        Committing and pushing work to a new branch on GitHub
        Programing fundamentals in JavaScript
        Working with values, variables, and data types
        Using assignment and comparision operators
        Working with JS internal functions to make decisions and perform actions.
            Using conditional logic to make decisions inside functions
        Writing functions that take in inputs, process, and return outputs.
            Here's some example word problems:
            */
// Define a function named timesFour that takes in an input and multiples that input by four if it is numeric. If the input is not numeric, then return false.
//
//     function timesFour(num) {
//         if ((isNaN(num)===true) || (typeof num === "boolean") || (num === null)) {
//             return false;
//         } else {
//             return num * 4.0;
//         }
//     }
//     console.log("should be 0 - " + timesFour(0));
//     console.log("should be 20 - " + timesFour("5"));
//     console.log("should be -20 - " + timesFour(-5));
//     console.log("should be false - " + timesFour('Texas'));
//     console.log("should be false - " + timesFour([2,1,0]));
//     console.log("should be false - " + timesFour(true));
//     console.log("should be false - " + timesFour(null));
    /*
// timesFour(0) //0
// timesFour("5") //20
// timesFour(-5) //-20
// timesFour('Texas') //false
// timesFour([2,1,0]) //false
// timesFour(true) //false
// timesFour(null) //false

// Define a function named convertDaystoHours that takes in one input Days. Return the conversion of the number of days into total hours. If the input is not numeric or a numeric string, convertDaystoHours, should return false.
*/
    // function converDaystoHours (days) {
    //     if ((isNaN(days)===true) || (typeof days === "boolean") || (days === null)) {
    //         return false
    //     } else {
    //         return days * 24.0;
    //     }
    // }
    //
    // console.log("should be 0 - " + converDaystoHours(0));
    // console.log("should be 120 - " + converDaystoHours("5"));
    // console.log("should be false - " + converDaystoHours('Texas'));
    // console.log("should be false - " + converDaystoHours([2,1,0]));
    // console.log("should be false - " + converDaystoHours(true));
    // console.log("should be false - " + converDaystoHours(false));

    /*
// convertDaystoHours(0) //0
// convertDaystoHours('5') // 120
// convertDaystoHours('Texas') //false
// convertDaystoHours([2, 1, 0]) //false
// convertDaystoHours(true) //false
// convertDaystoHours(false) //false

// Write a function named calculateTax that takes in two inputs representing the totalPaid and the taxPercent. If both inputs are numeric or numeric strings, calculateTax should return the total with tax added in a string looking like: “$XX.XX”. If either or both inputs are not numeric or numeric strings, calculateTax should return false.
*/
    // function calculateTax(totalPaid, taxPercent) {
    //     if (((isNaN(totalPaid)===true) || (typeof totalPaid === "boolean") || (totalPaid === null)) ||
    //     ((isNaN(taxPercent)===true) || (typeof taxPercent === "boolean") || (taxPercent === null))) {
    //         return false;
    //     } else {
    //         return "$" + (totalPaid + (totalPaid * (taxPercent/100.0))).toFixed(2);
    //     }
    // }
    //
    // console.log("should be $27.00 - " + calculateTax(25, 8));
    // console.log("should be $11.20 - " + calculateTax(10, 12));
    // console.log("should be $138.60 - " + calculateTax(120, 15.5));
    // console.log("should be false - " + calculateTax(10, true));
    // console.log("should be false - " + calculateTax([1,2,3], 10));
    // console.log("should be false - " + calculateTax("Codeup", 100));
    // console.log("should be false - " + calculateTax());
    /*
    // calculateTax(25, 8)               // “$27.00"
    // calculateTax(10, 12)             // “$11.20”
    // calculateTax(120, 15.5)           // “$138.60"
    // calculateTax(10, true)           // false
    // calculateTax([1, 2, 3], 10)      // false
    // calculateTax(“Codeup”, 100)      // false
    // calculateTax()                   // false
    */

    /*
    1. Write a function that takes in a sentence and returns the length of the
   longest word.

        "I like going out to parties with friends or watching TV." => 8
*/
    function longestWordLength(sentence) {
        let myArray = str.split(" ");
        let max = 0;
        for (let i = 0; i < myArray.length; i++) {
            if (myArray[i].length > max) max = myArray[i].length;
        }
        return max;
    }

    let str = "I like going out to parties with friends or watching TV.";
    console.log(longestWordLength(str));

    /*
2. Write a function that takes three parameters: a, b, c. Return the boolean
   true if a^2 + b^2 = c^2, false if not.

        3, 4, 5 => true
        4, 5, 6 => false

*/
    function isRightTriangle(a, b, c) {
        return ((a * a) + (b * b) == (c * c)) ? true : false;
    }

    console.log(isRightTriangle(3, 4, 5));
    console.log(isRightTriangle(5, 5, 6));

    /*
    3. Write a function that takes a string and returns a "title case" string

            "The QUICK brown fox JuMpS ovER the LAZy dog"
            The Quick Brown Fox Jumps Over The Lazy Dog"
    */
    function toTitleCase(str) {
        str = str.toLowerCase();
//        console.log(str);
        let myArray = str.split(" ");
//        console.log(myArray);
        for (let i = 0; i < myArray.length; i++) {
//            console.log(myArray[i]);
            myArray[i] = myArray[i].charAt(0).toUpperCase() + myArray[i].slice(1);
//            console.log(myArray[i]);
        }
        return myArray.join(" ");
    }

    console.log(toTitleCase("The QUICK brown fox JuMpS ovER the LAZy dog"));

    /*

    4. Write a function that returns and object with keys set to the argument passed
       in and values equal to the types of the corresponding keys. Arguments will be
       type "number", "string", or "boolean".

            // input
            ["hey", 1, "Jeffrey wants to goto the store", false]
            // output
            {
              hey: "string",
              1: "number",
              "Jeffrey wants to goto the store": "string",
              false: boolean
            }
*/
    function objectOfTypes(anArray) {
        let newObj = {};
        for (let i = 0; i < anArray.length; i++) {
            newObj[anArray[i]] = typeof anArray[i];
        }
        console.log(typeof newObj);
        return newObj;
    }

    console.log(objectOfTypes(["hey", 1, "Jeffrey wants to goto the store", false]));

    /*

        5. Write a function that takes two strings as input and returns true or false
           depending on whether they are anagrams(contain exactly the same letters).
           Only lowercase letters will be passed.

                "overcast", "overacts" => true
                "Jimbo", "Jason" => false

             */
    function isAnagram(str1, str2) {
        let test1 = true;
        let test2 = true;
        for (let i = 0; i < str1.length; i++) {
            if (!(str2.includes(str1[i]))) {
                test1 = false;
            }
        }
        for (let i = 0; i < str2.length; i++) {
            if (!(str1.includes(str2[i]))) {
                test2 = false;
            }
        }
        return (test1 && test2);
    }

    console.log(isAnagram("overcast", "overacts"));
    console.log(isAnagram("Jimbo", "Jason"));

}());

