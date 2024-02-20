// Primitive Data Types

//7 Types
//String, Number, Null, Undefined, Boolean, Symbol, BigInt

const num1 = 21;
const valString = "Value";
const valNull = null;
let valUndefined;
const valBoolean = true;
const valSymbol = Symbol('221');
const valBigint = 22122019991121111n


//Reference Types or Non Primitive data Types

//Arrays , Objects, Functions

const arrayValue = ["Ram","Lakshman", "Hanumaan"];
const objValue = {
                    name: "Vishal",
                    age:  26,
                    City: "Noida"
                 }

const funValue = function()
               {
                    console.log("Hello World");
               }                 
           console.log(typeof valSymbol);      




//****************************************************** */

//Stack Memory(Primitive) & Heap Memory(Non-Primitive)

let firtsName = "Sam"

let secondName = firtsName;

console.log(secondName);
 secondName = "Ram"
 console.log(firtsName);
 console.log(secondName);

 let firstMemory = {
                    email: "Jonathan@google.com",
                    userId : 3321
                   }
      let secondMemory = firstMemory;
      secondMemory.email = "Sam@google.com"
      console.log(firstMemory.email);
      console.log(secondMemory.email);
