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
    // function longestWordLength(sentence) {
    //     let myArray = str.split(" ");
    //     let max = 0;
    //     for (let i = 0; i < myArray.length; i++) {
    //         if (myArray[i].length > max) max = myArray[i].length;
    //     }
    //     return max;
    // }
    //
    // let str = "I like going out to parties with friends or watching TV.";
    // console.log(longestWordLength(str));

    /*
2. Write a function that takes three parameters: a, b, c. Return the boolean
   true if a^2 + b^2 = c^2, false if not.

        3, 4, 5 => true
        4, 5, 6 => false

*/
    // function isRightTriangle(a, b, c) {
    //     return ((a * a) + (b * b) == (c * c)) ? true : false;
    // }
    //
    // console.log(isRightTriangle(3, 4, 5));
    // console.log(isRightTriangle(5, 5, 6));

    /*
    3. Write a function that takes a string and returns a "title case" string

            "The QUICK brown fox JuMpS ovER the LAZy dog"
            The Quick Brown Fox Jumps Over The Lazy Dog"
    */
    // function toTitleCase(str) {
    //     str = str.toLowerCase();
    //     let myArray = str.split(" ");
    //     for (let i = 0; i < myArray.length; i++) {
    //         myArray[i] = myArray[i].charAt(0).toUpperCase() + myArray[i].slice(1);
    //     }
    //     return myArray.join(" ");
    // }
    //
    // console.log(toTitleCase("The QUICK brown fox JuMpS ovER the LAZy dog"));

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
    // function objectOfTypes(anArray) {
    //     let newObj = {};
    //     for (let i = 0; i < anArray.length; i++) {
    //         newObj[anArray[i]] = typeof anArray[i];
    //     }
    //     console.log(typeof newObj);
    //     return newObj;
    // }
    //
    // console.log(objectOfTypes(["hey", 1, "Jeffrey wants to goto the store", false]));

    /*

        5. Write a function that takes two strings as input and returns true or false
           depending on whether they are anagrams(contain exactly the same letters).
           Only lowercase letters will be passed.

                "overcast", "overacts" => true
                "Jimbo", "Jason" => false

             */
    // function isAnagram(str1, str2) {
    //     let test1 = true;
    //     let test2 = true;
    //     for (let i = 0; i < str1.length; i++) {
    //         if (!(str2.includes(str1[i]))) {
    //             test1 = false;
    //         }
    //     }
    //     for (let i = 0; i < str2.length; i++) {
    //         if (!(str1.includes(str2[i]))) {
    //             test2 = false;
    //         }
    //     }
    //     return (test1 && test2);
    // }
    //
    // console.log(isAnagram("overcast", "overacts"));
    // console.log(isAnagram("Jimbo", "Jason"));


    /*   array.md
    - Define a function named `allIndexesOf` that takes in two arguments. The first
      argument should be the array to search and the second argument should be the
      value you want to search for. If the item does not exist in the provided
      array, return an empty array.

        Given:

        ```js
        var fruits = ["apple", "banana", "orange", "apple", "pineapple"];
        ```

        - `allIndexesOf(fruits, "apple")` should return the array [0, 3]
        - `allIndexesOf(fruits, "guava")` should return the array []
        - `allIndexesOf(fruits, "pineapple")` should return [4]

    */
    function allIndexesOf(searchArea, searchCriteria) {
        let foundAt = [];
        searchArea.forEach((element, index) => (element == searchCriteria ? foundAt.push(index) : null));
        return foundAt;
    }

    let fruits = ["apple", "banana", "orange", "apple", "pineapple"];
    console.log(allIndexesOf(fruits, "apple"));
    console.log(allIndexesOf(fruits, "guava"));
    console.log(allIndexesOf(fruits, "pineapple"));

    /*

- Define a function named `removeAll(array, value)` that takes in two arguments.
  The first argument should be an array and the second argument should be a
  value you wish to remove

    Given:

    ```js
    var bugs = ["mosquito", "ant", "scorpion", "ant", "ant", "mosquito", "typo", "reference error", "type error"];
    ```

    - `removeAll(bugs, "ant")` should return `["mosquito", "scorpion",
      "mosquito", "typo", "reference error", "type error"]`
    - `removeAll(bugs, "mosquito")` should return `["ant", "scorpion", "ant",
      "ant", "typo", "reference error", "type error"]`
    - `removeAll(bugs, "roach")` should return the original array b/c "roach"
      has no occurrances.

---
*/
    function removeAll(array, value) {
        let res = [];
        array.forEach((element, index) => (element != value) ? res.push(element) : null);
        if (res == []) {
            return array;
        } else {
            return res;
        }
    }

    let bugs = ["mosquito", "ant", "scorpion", "ant", "ant", "mosquito", "typo", "reference error", "type error"];
    console.log(removeAll(bugs, "ant"));
    console.log(removeAll(bugs, "mosquito"));
    console.log(removeAll(bugs, "roach"));


    /*

- Make a function called randomIntBetween(min, max) that returns a random number
  between the min and the max.
  */
    function randomInBetween(min, max) {
        return (Math.random() * Math.abs(max - min)) + min;
    }

    console.log("Random between 1 and 5: " + randomInBetween(1, 5));
    console.log("Random between 98 and 100: " + randomInBetween(98, 100));
    console.log("Random between -5 and -2: " + randomInBetween(-5, -2));

    /*
 - Make a function called `coinFlip()` that returns either 0 or 1, randomly
   */
    function coinFlip() {
        let coin = Math.random();
        if (coin < .5) {
            return 1;
        } else {
            return 0;
        }
    }

    console.log(coinFlip());
    console.log(coinFlip());
    console.log(coinFlip());
    console.log(coinFlip());
    console.log(coinFlip());
    console.log(coinFlip());
    console.log(coinFlip());

    /*
- Make a function called `twoDice()` that returns the sum of rolling two six
  sided dice.
  */
    function twoDice() {
        let d1 = Math.ceil(Math.random() * 6);
        let d2 = Math.ceil(Math.random() * 6);
        return d1 + d2;
    }

    console.log("Roll 2 Dice");
    console.log(twoDice());
    console.log(twoDice());
    console.log(twoDice());

    /*
- Make a function called `twentySidedDie()` that returns a random integer
  between 1 and 20.
  */

    function twentySidedDie() {
        return Math.ceil(Math.random() * 20);
    }

    console.log("Roll 20 sided Die");
    console.log(twentySidedDie());
    console.log(twentySidedDie());
    console.log(twentySidedDie());
    console.log(twentySidedDie());
    console.log(twentySidedDie());
    console.log(twentySidedDie());
    console.log(twentySidedDie());

    /*
 - Make a function called `twelveSidedDie()` that returns a random integer
   between 1 and 12.
   */
    function twelveSidedDie() {
        return Math.ceil(Math.random() * 12);
    }

    console.log("Roll 12 sided Die");
    console.log(twelveSidedDie());
    console.log(twelveSidedDie());
    console.log(twelveSidedDie());
    console.log(twelveSidedDie());
    console.log(twelveSidedDie());
    console.log(twelveSidedDie());
    console.log(twelveSidedDie());

    /*
 - Make a function called `tetrahedron()` that returns a random integer between 1
   and 4.
 */
    function tetrahedron() {
        return Math.ceil(Math.random() * 4);
    }

    console.log("tetrahedron");
    console.log(tetrahedron());
    console.log(tetrahedron());
    console.log(tetrahedron());
    console.log(tetrahedron());
    console.log(tetrahedron());
    console.log(tetrahedron());
    console.log(tetrahedron());

    /*
 ---

 - Make a function called `rollDie()` that returns an integer between 1 and 6.

 */
    function rollDie() {
        return Math.ceil(Math.random() * 6);
    }

    console.log("RollDie");
    console.log(rollDie());
    console.log(rollDie());
    console.log(rollDie());
    console.log(rollDie());
    console.log(rollDie());
    console.log(rollDie());
    console.log(rollDie());

    /*
 - Make a function called `listOfRolls(num)` that takes in a number containing
   how many 6-sided dice rolls you want to make. The `listOfRolls` function
   should return an array of that length, where each element of the array is the
   result of the `rollDie` function.
  */
    function listOfRolls(num) {
        let rolls = [];
        for (let i = 0; i < num; i++) {
            rolls.push(Math.ceil(Math.random() * 6));
        }
        return rolls;
    }

    console.log("List of Dice Rolls");
    console.log(listOfRolls(1));
    console.log(listOfRolls(2));
    console.log(listOfRolls(3));
    console.log(listOfRolls(4));
    console.log(listOfRolls(5));
    console.log(listOfRolls(6));
    console.log(listOfRolls(7));

    /*

 - Make a function called `listOfRollsFromDieFunc(numberOfRolls, diceFunction)`

     This function should take in two arguments:

     - The first argument is the number of rolls you want to make.
     - The second argument is a function that contains the function definition
       for the type of die you want to roll.

     For example, if we call `listOfDieRollsFromDieFunc(1, tetrahedron)`, then the
     function will return an array containing one value that is the result of
     calling the `tetrahedron` function.
  */
    function listOfRollsFromDie(numberOfRolls, diceFunction) {
        let rolls = [];
        for (let i = 0; i < numberOfRolls; i++) {
            rolls.push(diceFunction());
        }
        return rolls;
    }

    console.log("Dice roll from functions");
    console.log(listOfRollsFromDie(1, twelveSidedDie));
    console.log(listOfRollsFromDie(2, twentySidedDie));
    console.log(listOfRollsFromDie(3, twoDice));
    console.log(listOfRollsFromDie(4, tetrahedron));
    console.log(listOfRollsFromDie(5, rollDie));
    console.log(listOfRollsFromDie(6, twentySidedDie));
    console.log(listOfRollsFromDie(7, twelveSidedDie));


    /*

 ---

 ```js


  * JS Array Practice
  * Intermediate Array practice: array creation, iteration, and manipulation


 // Exercise 0. Write a function named first() that returns only the first element of an array

 // Exercise 1. Write a function named secondToLast() that returns the second to last element

 // Exercise 2. Write a function named rest() that takes an an array and returns an array containing everything except the first element.

 // Exercise 3. Write a function named getLongestString that takes in an array of strings and returns the longest string of that array

 // Exercise 3.1 Write a function named getShortestString that takes in an array of strings and returns the shortest string in that array.

 // Exercise 4. Write a function named addTwoArrays that takes in two, one dimensional arrays. The function should return a single array containing all of the elements of the first array along with all of the elements of the second array
 // Example: addTwoArrays([1, 2, 3], [4, 5, 6]) should return [1, 2, 3, 4, 5, 6]

 // Exercise 5. Write a function named getUniqueValues that takes in an array and returns the array without any duplicates
 // Example: getUniqueValues(["a", "b", "a", "b", "c", "c"]) should return ["a", "b", "c"]

 // Exercise 6. Write a function named reverseArray that takes in an array and returns it reversed, but without altering the original array.

 // Exercies 7. Write a function named getRandomQuote().
 //   Inside of the function, create an array of strings where each string is a quote or thought you find inspirational
 //   getRandomQuote should generate a random number between 0 and the array's length minus 1
 //   use the randomly generated number as your index
 //   return a random quote.

 // Exercise 8. Write a function named getIndexesOf() that takes in two arguments.
 // The first argument should be a specific numeral or character
 // The second argument should be any given string
 // getIndexesOf() should return an array containing all of the indexes of that character in the string
 // Example: getIndexesOf("a", "banana") should return the array [1, 3, 5]
 // Example: getIndexesOf("z", "banana") should return an empty array [] since there are no "z" characters in "banana"

 // Exercise 9. Write a function named removeAll.
 // It should accept an array and a value
 // removeAll should return an array with all of the original contents EXCEPT for the provided value
 // iterate across the input array
 // output array
 // Example: removeAll([1, 2, 3], 2) should return [1, 3]
 // Example 2: removeAll([2, 2, 3, 4, 5, 2, 2], 2) should return [3, 4, 5]

 // Exercise 10. Write a function named firstTenFibonacciNumbers() that returns an array of the first ten fibonacci numbers

 // Exercise 11. Write a function named getNFibonacci(n) that returns an array containing the first n fibonacci numbers

 // Exercise 12. Write a function named moveFirstToLast() that takes in an array
 // the function should return the array with the first element at the end
 // Example: moveFirstToLast([1, 2, 3, 4]) should return [2, 3, 4, 1]


 // Exercise 13. Write a function named zip() that takes in two arrays with the same number of elements
 // Zip returns a new array of arrays where each element is an array of the two elements at the same index
 // Example: zip([1, 2, 3], [4, 5, 6]) returns [[1, 4], [2, 5], [3, 6])
 // Example: zip(["a", "b", "c"], ["x", "y", "z"]) returns [["a", "x"], ["b", "y"], ["c", "z"]]
     ```

 ---

 ## Loops & Arrays

 1.  create an array of shapes
     – prompt the user to search for a specific shape
     – using a for loop, iterate through the array to log the shapes until the matching shape is found
     – once the shape is found, log a message (“Shape is found”) and use a break statement to exit loop.
 2.  Create a function that returns a random day of the week
 3.  Create a function that takes a single letter and returns what number the letter is in the alphabet. Ignore case.
     – someFunction("a") // returns 1
     – someFunction("z") // returns 26
 4.  Create a function that returns the longest string in a given array of string elements.
 5.   Create a function that takes in two arrays of elements, including numbers. If all numbers added together in the first array is equal to all the number inputs added in the second array, return true, otherwise, false. Only add together numeric elements but either array may contain non-numeric elements.
     – var arr1 = ['bob', 1, true, 1, 2];
     – var arr2 = [2, null, undefined, 0, 2, "apple"]
     – exampleFunction(arr1, arr2) // returns true

  */


    /* arrays and objects
    1. Write a function, `filterNumbers()` that takes in an array of mixed data
   types and returns an array of only the numbers type in ascencding order.

    Example input: `["fred", true, 5, 3]`
    Example output: `[3, 5]`

1. Write a function, `getOlder()` that takes in array of dog objects and
   increases the value of each object's `age` property by 1.

    Example input:

        [
          {
            name: "Chompers",
            breed: "Pug",
            age: 7
          },
          {
            name: "Freddy",
            breed: "Lab",
            age: 4
          },
          {
            name: "Mr. Pig",
            breed: "Mastif",
            age: 10
          }
        ]

    Example output

        [
          {
            name: "Chompers",
            breed: "Pug",
            age: 8
          },
          {
            name: "Freddy",
            breed: "Lab",
            age: 5
          },
          {
            name: "Mr. Pig",
            breed: "Mastif",
            age: 11
          }
        ]

1. Write a function, `washCars()` that takes in a array of car objects and sets
   the boolean properties of `isDirty` to false.

    Example input:

        [
          {
            make: 'Volvo',
            color: 'red',
            year: 1996,
            isDirty: true
          },
          {
            make: 'Toyota',
            color: 'black',
            year: 2004,
            isDirty: false
          },
          {
            make: 'Ford',
            color: 'white',
            year: 2007,
            isDirty: true
          }
        ]

    Example output

        [
          {
            make: 'Volvo',
            color: 'red',
            year: 1996,
            isDirty: false // changed to false
          },
          {
            make: 'Toyota',
            color: 'black',
            year: 2004,
            isDirty: false // stays the same
          },
          {
            make: 'Ford',
            color: 'white',
            year: 2007,
            isDirty: false // changed to false
          }
        ]

1. Write a function, `adminList()` that takes in an array of user objects and
   returns a count of all admins based on the `isAdmin` property. Refactor to
   return an array of admin-only user emails. Refactor again to return an array
   of user objects that are admins.

    Example Input:

        [
          {
            isAdmin: true,
            email: 'user1@email.com'
          },
          {
            isAdmin: true,
            email: 'user2@email.com'
          }
          {
            isAdmin: false,
            email: 'user3@email.com'
          }
        ]

    Example Output (before refactor): `2`

    Example Output (after 1st refactor):

        [
          'user1@email.com',
          'user2@email.com'
        ]

    Example Output (after 2nd refactor):

        [
          {
            isAdmin: true,
            email: 'user1@email.com'
          },
          {
            isAdmin: true,
            email: 'user2@email.com'
          }
        ]

1. Create a function, `makeSandwhichObjects()` that takes in two array of
   strings, breads and fillings and returns an array of `sandwhichObjects` that
   contain properties for bread and filling and values correspond to the same
   order of the two passed in arrays. Assume the two array inputs are the same
   length.

    Example Input:

    ```js
    var breads  = [
      "white",
      "wheat",
      "rhy",
      "white"
    ];

    var fillings = [
      "pb&j",
      "ham",
      "cheese steak",
      "tuna"
    ];

    makeSandwhichObjects(breads, fillings)
    ```

    Example Output:

        [
          {
            bread: "white,
            filling: "pb&j"
          },
          {
            bread: "wheat",
            filling: "ham"
          },
          {
            bread: "rhy",
            filling: "cheese steak"
          },
          {
            bread: "white",
            filling: "tuna"
          }
        ]

     */


    /*  functions
    # Function Drills

Functions using conditionals but not loops or arrays:

- Make a function named `isOdd(number)`
- Make a function named `isEven(number)`
- Make a function named `identity(input)` that returns the input exactly as
  provided.
- Make a function named `isFive(input)`
- Make a function named `addFive(input)` that adds five to some input.
- Make a function named `isMultipleOfFive(input)`
- Make a function named `isThree(input)`
- Make a function named `isMultipleOfThree(input)`
- Make a function named `isMultipleOfThreeAndFive(input)`
- Make a function named `isMultipleOf(target, n)` which checks if target is
  evenly divisible by `n`
- Make a function named `isTrue(boolean)`
- Make a function named `isFalse(boolean)`
- Make a function named `isTruthy(input)`, remember that values other than true
  will behave like true
- Make a function named `isFalsy(input)`, remember that values other than false
  behave like false
- Make a function named `isVowel(letter)`
- Make a function named `isConsonant(letter)`
- Make a function named `isCapital(letter)`
- Make a function named `isLowerCase(letter)`
- Make a function named `hasLowerCase(string)` that returns if a string has any
  lower cased letter
- Make a function named `isSpace(letter)` that returns if a character is a space
  character
- Make a function named `isZero(number)`
- Make a function named `notZero(input)` that returns true if the input is not
  zero
- Write a function named `lowerCase(string)`
- Write a function named `double(n)` that returns a number times two
- Write a function named `triple(n)` that returns a number times 3
- Write a function named `quadruple(n)` that returns a number times 4
- Write a function named `half(n)` that returns 1/2 of the provided input
- Write a function named `subtract(a, b)` that returns `a` minus `b`
- Write a function named `multiply(a, b)` that returns the product of `a` times
  `b`
- Write a function named divide(a, b) that returns `a` divided by ~b~
- Write a function named `remainder(a, b)` that returns the remainder after
  dividing a by b
- Make a function named `modulo(a, b)` that returns the returns the remainder
  after dividing a by b
- Write a function named `cube(n)` that returns n * n * n
- Write a function named `squareRoot(n)` that returns the square root of the
  input
- Write a function named `cubeRoot(n)` that returns the cube root of the input
- Write a function named `invertSign(number)` that returns a negative version of
  a postive number, a positve version of negative, and false for all else.
- Write a function named `degreesToRadians(number)`
- Write a function named `radiansToDegrees(number)`
- Make a function named `isBlank(input)` that determines if a given input is
  spaces, newline characters, or tabs.
- Make a function named `trim(string)` that removes empty spaces before and
  after the input.
- Make a function named `areEqual(input1, input2)` that returns if both inputs
  have the same value
- Make a function named `areIdentical(input1, input2)` that returns if both
  inputs are same value and data type.
- Make a function named `not(input)` returns the input with a flipped boolean
- Make a function named `notNot(input)` that the negation of the negation of the
  input.
- Make a function named `and(predicate1, predicate2)` that returns the logical
  operation of AND
- Make a function named `or(predicate1, predicate2)` that returns the logical
  operation of OR
- Write a function called `reverseString(string)` that reverses a string
- Make a function named `absoluteValue(number)` that returns the absolute value
  of a number.
- Make a function named `rollDice(sides)` that takes in an argument containing
  the number of sides the die should have. Generate a random number between 1 up
  to and including the number of sides.



## Simple Function Drills

1. Make a function called returnTwo() that returns the number 2 when called

   Test this function with `console.log(returnTwo())`

1. Make a function called sayHowdy() which console.logs the string “Howdy!”

    Test this function by directly calling `sayHowdy()`

    Remember this function does not need a defined return value

1. Make a function called returnName() that returns the string of your name

   Test this function with `console.log(returnName())`

1. Make a function called addThree() which takes in a number input and returns the number plus 3.

   Test this function with `console.log(addThree(5))`

1. Make a function called sayString() which returns the string input passed in.

   Test this function with `console.log(sayString('codeup'))`


## Challenge Function Drills

- Write a function called `identity(input)` that takes in an argument called
  input and returns that input.

- Write a function called `getRandomNumber(min, max)` that returns a random
  number between min and max values sent to that function call.

- Write a function called `first(input)` that returns the first character in the
  provided string.

- Write a function called `last(input)` that returns the last character of a
  string

- Write a function called `rest(input)` that returns everything but the first
  character of a string.

- Write a function called `reverse(input)` that takes a string and returns it
  reversed.

- Write a function called `isNumeric(input)` that takes an input and returns a
  boolean if the input is numeric.

- Write a function called `count(input)` that takes in a string and returns the
  number of characters.

- Write a function called `add(a, b)` that returns the sum of a and b

- Write a function called `subtract(a, b)` that return the difference between
  the two inputs.

- Write `multiply(a, b)` function that returns the product

- Write a `divide(numerator, denominator)` function that returns a divided by b

- Write a `remainder(number, divisor)` function that returns the remainder left
  over when dividing `number` by the `divisor`

- Write the function `square(a)` that takes in a number and returns the number
  multiplied by itself.

- Write a function called `sumOfSquares(a, b)` that uses only your `add()` function
  and your square function and not + or * operators

- Write a function called `doMath(operator, a, b)` that takes 3 parameters. The
  first parameter is the name of the math function you want to apply. a and b
  are the two numbers to run that function on.

## Even More Function Bonuses

1. Create a function that will return how many whitespace characters are at the
   beginning and end of a string.

1. Create a function that takes in two string inputs.

    - If the second string input is present in the first, return the first input
      string with the second input string removed from it.
    - If the second string input is present multiple times in the first, the
      second string will only be removed where it first occurs in the first
      string.
    - If the second string input is not present in the first, return the first
      string as entered in the function.

1. Create a function that takes in a string and returns true if the last letter
   is an "a" (otherwise, return false).

1. EXTRA CHALLENGE: create a function that will return how many whitespace
   characters are at the beginning of a string (hint: use regex).

1. Create a function `returnTrueMessage()` that returns the string "Hey, it's true!"

    - Create a function `returnFalseMessage()` that returns the string "Hey, it's false!"
    - Create a function `returnMessage()` that takes in a function and returns the call to the function
    - Experiement passing in different functions.

1. Create a function, `willLoginUser()` that takes in a username string,
   password string, user age, a boolean indicating if they are an admin.

    The function will return true if the username is not the same as the
    password and the user is at least 18 years old. If the user is an admin,
    they do not have to be a certain age but the password must still not match
    the username.

     */


    /*  objects
    ## OBJECTS BONUSES

1. Create a dog object

    The dog object should have properties for:

    - `breed` (string),
    - `weightInPounds` (number),
    - `age` (number),
    - `color` (string),
    - `sterilized` (boolean),
    - `shotRecords` (array of objects with properties for date and `typeOfShot`)

    The dog object should have methods to:

    - `bark()` - will console.log "Woof!"
    - `getOlder()` - will increase age by 1
    - `fix()` - will set sterile to true if dog sterilized property is false
    - `vaccinate()` - takes in an argument for the name of the shot and adds a
      new shot with the current date to the shotRecords array

1. Expanding on the books object exercise:

    - Add a property `keywords` that contains an array of possible genres the
      book may be categorized by
    - Add a boolean property `available` and set it to true
    - Add a `dateAvailable` property that has a string of the date/time when the
      book will be available
    - Add a method `lend()` that...
        - changes the `available` property to false if it is not already false
        - sets the `dateAvailable` to a date exactly two weeks from when the
          `lend()` method is called (to do this, research the JS Date object and
          use methods from it in your code)
    Add a method `receive()` that...
        - changes the `available` property to true
        - changes the `dateAvailable` property to the string `"now"`

1. Expanding on the books object exercise:

    - Create an application to take in user input to build the books array of objects.
    - Allow the user to continue adding books or to finish adding books.
    - Once the books have been added, output the books array in the console.
    - Allow a user to delete a book or a group of books by title or author last name
    - Allow a user to edit a book by index number in the books array



1. Define an object called `jackBox`

    Include properties for...

    - `triggered` - whether or not the box has been sprung (should be false by
      default)
    - `intervalId` - set to null
    - `play()` - once called, if triggered is false, console.log one new element
      in the lyrics array every second after the lyrics, stop the interval, set
      the triggered property to true, and alert POP!
    - `windUp()` - once called will stop the play() method and set triggered to
      false lyrics - an array with the following elements:

            "All a-...",
            "-round the ...",
            "mulberry...",
            "bush, The...",
            "monkey...",
            "chased the...",
            "wea-...",
            "-sel...",
            "The monkey...",
            "stopped to...",
            "pull up his...",
            "sock,...",
            "Pop!...",
            "goes the...",
            "wea-...",
            "-sel."

    When running, current lyrics should also be displayed on the page.

1. Build a Stop Watch

    Define an object called `stopWatch`.

    Include the following properties...

    - `intervalId`
    - `count`

    Include the following methods...

    `start()` - starts console logging an increasing count every second
    `pause()` - pauses counter
    `reset()` - stops counter and resets count to zero
     */

}());

