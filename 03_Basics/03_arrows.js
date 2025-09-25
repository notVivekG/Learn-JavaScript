const user = {
    username: "vivek",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this)
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     console.log(this);
// }

// global objects ^^^

// const chai = function () {
//     let username = "vivek"
//     console.log(this.username);
// }

 // this gives undefined 

const chai = () => {
    let username = "vivek"
    console.log(this); // result : {}
    console.log(this.username) // result : undefined
}

//  chai()

// const addTwo = (num1 , num2 ) => {
//     return num1 + num2;
// }
// const addTwo = (num1 , num2 ) => (num1 + num2)

const addTwo = (num1 , num2 ) => ({username: "vivek"})
// return in paranthesis ()

console.log(addTwo(3, 4)) // arrow function

