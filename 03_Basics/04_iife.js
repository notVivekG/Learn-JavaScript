// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    // named iife
    console.log(`DB CONNECTED`);
})();
// use semicolon at last while using iife to end line 
// ()() , to remove the global scope pollution , we use iife 

( (name) => {
    // unnamed iffe 
    console.log(`DB CONNECTED TWO ${name}`);
} )('vivek')

