//  https://frontendmasters.com/courses/rethinking-async-js/callback-problems-inversion-of-control/

// asynch thunk

function addAsync(x, y, cb) {
    setTimeout(function(){
        cb( x + y );
    }, 1000);
    // (function(){
    //     cb( x + y );
    // })();
}

let asyncThunk = function(cb) {
    addAsync(10, 15, cb);
};

asyncThunk(function(sum){
    sum();
});

//synchronous

function add(x,y) {
    return x + y;
}

let syncThunk = function() {
    return add(10, 15);
};

syncThunk();

//  thunk factory
function makeThunk(fn) {
    let args = [].slice.call(arguments,1);
    return function(cb) {
        args.push(cb);
        fn.apply(null,args);
    };
}
// another synch - lazy
function addAsync2(x, y, cb) {
    setTimeout(function(){
        cb( x + y );
    }, 1000);
    // (function(){
    //     cb( x + y );
    // })();
}

let asyncThunk2 = makeThunk(addAsync,10, 15);

asyncThunk2(function(sum){
    console.log(sum);
});
