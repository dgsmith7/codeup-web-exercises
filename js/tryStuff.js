//  https://frontendmasters.com/courses/rethinking-async-js/callback-problems-inversion-of-control/

// asynch thunk

// function addAsync(x, y, cb) {
//     setTimeout(function(){
//         cb( x + y );
//     }, 1000);
//     // (function(){
//     //     cb( x + y );
//     // })();
// }
//
// let asyncThunk = function(cb) {
//     addAsync(10, 15, cb);
// };
//
// asyncThunk(function(sum){
//     sum();
// });

//synchronous

// function add(x,y) {
//     return x + y;
// }
//
// let syncThunk = function() {
//     return add(10, 15);
// };
//
// console.log(syncThunk());

//  thunk factory
// function makeThunk(fn) {
//     let args = [].slice.call(arguments,1);
//     return function(cb) {
//         args.push(cb);
//         fn.apply(null,args);
//     };
// }
// another synch - lazy
// function addAsync2(x, y, callback) {
//     // setTimeout(function(){
//     //     cb( x + y );
//     // }, 1000);
//     (function () { //an immediately executed function
//         callback(x + y);
//     })();
// }

//let asyncThunk2 = makeThunk(addAsync2,12, 15);
// let asyncThunk2 = function (callbackFunction) {  // this is a function expression declaration
//     addAsync2(10, 15, callbackFunction);
// };
//
//
// asyncThunk2(function (thePassedFunction) { // this is a function call that passes a function as arg, and
//     console.log("Test it - " + thePassedFunction);     // the passed function passes a function as an arg too then calls it
// });                                                    // recall that this called function was declared above with an expression

// function* anotherGenerator(i) {
//     yield i + 1;
//     yield i + 2;
//     yield i + 3;
// }
//
// function* generator(i) {
//     yield i;
//     yield* anotherGenerator(i);
//     yield i + 10;
// }
//
// const gen = generator(10);
// let r;
// console.log(gen.next().value); // 10
// console.log(gen.next().value); // 11
// console.log(gen.next().value); // 12
// console.log(gen.next().value); // 13
// r = gen.next().value;
// console.log(r != undefined?r:"No more"); // 20
// r = gen.next().value;
// console.log(r != undefined?r:"No more"); // No more

// My theory is thus:   In a closure, a function returns a function, allowing the lexical context (scope) live on even after the function has returned.
// This allows for one to maintain state without a global variable
// Functions declarations allow variables of their container into scope, thus closures allow one to "remember" a state of a variable
// even after it has changed based on the variables value when the function was called.
// So, closures are like function factories that maintain state of their enclosing blocks variables (if passed in).

// Another way to say it is that a closure is akin to (in Java) an instance of an object with one method. - Is that correct?
// Does using OOP in JS eliminate hte need for closures?
// Does the use of let and var eliminate the need for closures?
//  Why bother with closures besides just trying to show off?
// Does "normal" object notation eliminate the need for arrow functions and closures?  If so, why do we need them at besides saving a few kb here and there?  It seems to make code very cryptic-looking and hard to read, defying the need to balance readability and size.
/*
"Situations where you might want to do this are particularly common on the web. Much of the code written in front-end JavaScript is event-based. You define some behavior, and then attach it to an event that is triggered by the user (such as a click or a keypress). The code is attached as a callback (a single function that is executed in response to the event)."
 */
(function () {
    'use strict';

// let myArr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,0];
// console.log(myArr);
// console.log(myArr.sort());
// console.log(myArr.sort((a, b) => (a - b) ));
// console.log(myArr);
// console.log(myArr.sort(() => Math.random() - 0.5));
//     console.log(myArr.sort(() => Math.random() - 0.5));
//     console.log(myArr.sort(() => Math.random() - 0.5));
//     console.log(myArr.sort(() => Math.random() - 0.5));
//    console.log(window.navigator.clipboard);

// this code will produce a console log every second
// when count >= max, the interval is cancelled, and the logging will stop
//     var count = 0;
//     var max = 10;
//     var interval = 1000; // interval time in milliseconds
//
//     var intervalId = setInterval(function () {
//         if (count >= max) {
//             clearInterval(intervalId);
//             console.log('All done');
//         } else {
//             count++;
//             console.log('Repeating this line ' + count);
//         }
//     }, interval);

    // let foo = 20;
    //
    // function a(v) {
    //     return function () {
    //         return foo + v;
    //     };
    // }
    //
    // let foo2 = 30;
    //
    // function b(v) {
    //     return function() {
    //         return foo2 + v;
    //     }
    // }
    //
    //
    // const d = a(123);
    // const e = b(456);
    // console.log(d());  // prints 143
    // console.log(d);
    // const f= b(123);
    // console.log(f()); // prints 153
    // console.log(e());  // prints 486
    // console.log(e);
    //
    // //////////////////
    //
    // let myVar = 7;
    // console.log(`The value of myVar is ${myVar} and a(7) is ${a(myVar)(7)}`);
    //
    //
    //
    // /////////////////////
    //
    // const num = 3;
    // function multiplyBy2 (inputNumber) {
    //     const result = inputNumber * 2;
    //     return result;
    // }
    //
    // const output = multiplyBy2(num);
    // const newOutput = multiplyBy2(10);
    //
    // /////////////
    //
    // const tweets = getTweets("https://twitter.com/will/1");
    //
    // displayTweets(tweets);
    //
    // console.log("I wanna run!");
    //
    // //////////////
    // // One cannot predict how long
    //
    // function printHello(){
    //     console.log("Hello");
    // }
    //
    // setTimeout(printHello, 1000);
    //
    // console.log("Me, first!");
    //
    // ///////////////////////////////
    // // What if it was a 0 second delay
    //
    // function printHello(){
    //     console.log("Hello");
    // }
    //
    // setTimeout(printHello, 0);
    //
    // console.log("Me, first!");
    //
    // // same result
    // ///////////////////////////////
    //
    // function printHello(){
    //     console.log("Hello");
    // }
    //
    // blockFor1Second();
    //
    // setTimeout(printHello, 0);
    //
    // console.log("Me, first!");
    //
    // //////////////////////////////////
    //
    // function display(data){
    //     console.log(data);
    // }
    //
    // const futureData = fetch("https://twitter.com/regis/1");
    //
    // futureData.then(display);
    //
    // console.log("Me First!");
    //
    // ////////////////////////////////////
    //
    /*
        "use strict";
        (function() {
            let o = {
                fp: 7,
                sp: 12,
                tp: {
                    fp: 9,
                    sayFp: function () {
                        return(this.fp);
                    },
                    arrowSayFp: () => (this.fp)
                }
            }

            console.log(o.tp.sayFp());
            console.log(o.tp.arrowSayFp());   // this won't bind in arrow func:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
            // Get the main heading h1 by id
            var mainHeading = document.getElementById('main-heading');

            console.log(mainHeading.innerHTML); // Prints Hello World!

            // Assign a new value to the inner HTML of the main heading
            mainHeading.innerHTML = "Hello Codeup!";

            console.log(mainHeading.innerHTML); // Prints Hello Codeup!

            // Get the main section div by id
            var mainSection = document.getElementById('main-section');

            console.log(mainSection.innerHTML);
            // Prints
            // <p>Paragraph 1</p>
            // <p>Paragraph 2</p>
        })();
     */

    /*
        (function() {
        let btnToClick = document.getElementById('btnToClick');

        console.log(btnToClick); // prints <button id="btnToClick">Click Me</button>
    })();

     */
    function makeRequest() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 0.1) {
                    resolve('Here is your data: ...');
                } else {
                    reject('Network Connection Error!');
                }
            }, 0);
        });
    }

    const request = makeRequest();
    console.log(request); // pending promise
    request.then(message => console.log('Promise resolved!', message));
// if resolved, will log "Promise resolved!" and "Here is your data: ..."
    request.catch(message => console.log('Promise rejected!', message));
// if rejected, will log "Promise rejected!" and "Network Connection Error!"
})();



