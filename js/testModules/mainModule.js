import {messageFrom1, add, subtract, multiply, divide} from 'http://127.0.0.1:8080/testModule1.js';
import * as testMod2 from 'http://127.0.0.1:8080/testModule2.js';
import * as testMod3 from 'http://127.0.0.1:8080/testModule3.js'

console.log(messageFrom1());
console.log(add(9, 3));
console.log(subtract(9, 3));
console.log(multiply(9, 3));
console.log(divide(9, 3));

console.log(testMod2.messageFrom2());
testMod2.exportedFunction();
console.log(testMod2.exportedVar);

testMod3.TestObject.messageFromTheClass();
let tm = new testMod3.TestObject(7);
tm.messageFrom3();
tm.showStars();
tm.setNum(3);
console.log("It now has " + tm.getNum() + " stars");
tm.showStars();
