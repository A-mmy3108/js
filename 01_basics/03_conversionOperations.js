
let score = 33
//console.log(typeof score); // typeof is used to known the datatype) 


//CONVERSION ( CONVERTING A VALUE TO NUMBER VALUE )
let valueInNumber = Number(score)
//console.log(typeof valueInNumber)
//console.log(valueInNumber)

// "33" = 33
// "33abc" = NaN (Not a Number)
// "true" = 1
// "false" = 0
// "null" = 0
// "undefined" = NaN



//CONVERSION ( CONVERTING A VALUE TO BOOLEAN TYPE )
let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn);

// 1 = true 
// 0 = false
// "ammy" = true
// "" = false

let someNumber = 34

let stringNumber = String(someNumber)
//console.log(stringNumber)
//console.log(typeof stringNumber)

// *******************OPERATIONS*************************//

let value = 3
let negValue = -value
//console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/3);
// console.log(2%3);


let str1 = "hello"
let str2 = " ammy"

let str3 = str1+str2
// console.log(str3);


// console.log ("1" + 2);
// console.log (1 + "2");
// console.log ("1" + 2 + 2);
// console.log(1 + 2 +"2");

// console.log ( (3+4) * 5 % 3)  Try to use more parenthesis when performing complex operations

//console.log(+true); // Wrong Practise do not write this type of code
//console.log(+""); // Wrong practise do not write this type of confusing code

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// LINK TO STUDY TYPE CONVERSIONS & INCREMENT OPERATOR
//https://tc39.es/ecma262/multipage/abstract-operations.html
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment
