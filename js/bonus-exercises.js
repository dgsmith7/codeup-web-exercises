/*
Area of a Triangle: Write a JavaScript function that accepts the 3 lengths of a triangle and outputs the triangle’s area.
Reverse a String: Write a JS function that accepts a string and returns the string in reverse. example input: codeup, example output: puedoc
 */

(function() {

    function areaOfTri(a, b, c) {
        // Heron's formula
        // https://byjus.com/maths/area-of-a-triangle/#Area-of-a-Triangle-Formula
        let semiP = (a + b + c) / 2;
        return Math.sqrt(semiP * (semiP - a) * (semiP - b) * (semiP - c));
    }

    function backwards(str) {
        //https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/
        //truns string into an array then uses array.reverse, then rejoins the array in to a string and returns it.
        return str.split("").reverse().join("");
    }

    //FizzBuzz Activity: Print numbers 1-100. If # is divisible by 3 print Fizz. If # is divisible by 5 print Buzz. If # is divisible by both 3 and 5 print FizzBuzz
    // Shuffle an array: Write a function to shuffle an array to a completely and entirely random order.
    for (let i = 0; i < 100; i++) {
        if ((i % 3 ==0) && (i % 5 == 0)){
            console.log(i + " FizzBuzz")
        } else
        if (i % 3 == 0) {
            console.log(i + " Fizz");
        } else
        if (i % 5 == 0) {
            console.log(i + " Buzz");
        } else {
            console.log(i);
        }
    }

    function shuffle(myArray) {
        // below:  shuffle array - //from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
        // <0 is a before b, >0 is a after b and 0 is keep same:  mathrand-0.5 will be between -.5 and .5
        let currentValue = [...myArray];
        return myArray.sort(function () {return Math.random() - 0.5;});
    }

    function shuffleArray(myArray) {
        return myArray.sort(function () {return Math.random() - 0.5;});
    }


        console.log(areaOfTri(10, 10, 3));
    console.log(backwards("codeup"));
    let myArray = [1, 2, 3, 4, 5];
    console.log("My array is - " + myArray);
    console.log("Shuffled version is - " + shuffle(myArray));
    console.log(shuffleArray(myArray));
    console.log(Math.random() - 0.5);
}());

