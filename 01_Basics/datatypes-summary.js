// // Primitive 

// // 7 types : String , Boolean, Null , undefined , Symbol, BigInt

// const score = 100
// const scoreValue = 100.3

// const isLoggesIn = false
// const outsideTemp = null 
// let userEmail;

// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 3235161454232453452n // converted to bigInt




// // Reference (Non primitive)

// // Array, Objects, Functions


// const heros = ["shaktiman", "naagraj", "doga"]
// let myObj = {
//     name: "vivek",
//     age: 21,
// }

// const myFunction = function(){
//     console.log("Hello World");
// }

// console.log(typeof myFunction);

// Return Type of Variables of Js

// 1) Primitive Datatypes
//     Number => number 
//     String => string 
//     Boolean => boolean 
//     null => object 
//     undefined => undefined 
//     Symbol => symbol 
//     BigInt => bigint 

// 2) Non-primitive Datatypes 
//     Arrays => object 
//     Function => function 
//     Object => object 

// -----------------------------------------------------

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "notvivekkushwahadotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);