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
function addAsync2(x, y, callback) {
    // setTimeout(function(){
    //     cb( x + y );
    // }, 1000);
    (function(){ //an immediately executed function
        callback( x + y );
    })();
}

//let asyncThunk2 = makeThunk(addAsync2,12, 15);
let asyncThunk2 = function(callbackFunction) {  // this is a function expression declaration
    addAsync2(10, 15, callbackFunction);
};


asyncThunk2(function(thePassedFunction){ // this is a function call that passes a function as arg, and
    console.log("Test it - " + thePassedFunction);     // the passed function passes a function as an arg too then calls it
});                                                    // recall that this called function was declared above with an expression

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

