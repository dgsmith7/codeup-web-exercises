function messageFrom1 () {
    console.log("You successfully imported the modules from testModule1.js.");
}

function add(v1, v2) {
    return v1+v2;
}

function subtract(v1, v2) {
    return v1-v2;
}

function multiply(v1, v2) {
    return v1*v2;
}

function divide(v1, v2) {
    return v1/v2;
}

export {messageFrom1, add, subtract, multiply, divide};