let notExpVar = 7;
export let exportedVar = 13;

export function messageFrom2() {
    console.log("You successfully imported the modules from testModule2.js.");
}

function notExported1 () {
    console.log("This was not exported but was called from an exported function.");
}

export function exportedFunction () {
    console.log("Calling an exported function from testModule2.");
//    notExported1();
}

export default {messageFrom2, exportedFunction, exportedVar};
