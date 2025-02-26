// Datatypes in javascript are categorised into 2 types 
// a) Prmitive b) Non Primitive

/**PRIMITIVE(called by valuie)**/

/* 
    7 Types 

    1.String
    2.Number
    3.Boolean
    4.Null 
    5.undefined
    6.Symbol
    7.BigInt



*/

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol ('123')

console.log (id === anotherId)

const bigNumber = 3263976294763976492783694698236n  // big integer


// NON PRIMITIVE (called by reference) // 

/* 

1.Array
2.Objects
3.Functions

*/ 

const heros =["hulk", "spiderman" , "batman"]; //array
    
    
//object    
let myObj = {
        name: "ammy",
        age : 25,
    }

//function
const myFunction = function (){

    console.log("Hello World")
}

console.log (typeof bigNumber);

// https://tc39.es/ecma262/#sec-typeof-operator
