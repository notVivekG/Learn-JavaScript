function sayMyName(){
    console.log("V");
    console.log("I");
    console.log("V");
    console.log("E");
    console.log("K");
}

// sayMyName()

function addTwoNumbers(number1, number2){
    return (number1 + number2)
}

const res  = addTwoNumbers(3, 4)
// console.log("Result : ", res);

function loginUserMessage(username = "sam"){
    if(username === undefined ){ // (!username)
        console.log("Please enter a username");
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("vivek"))
// console.log(loginUserMessage())

function calculateCartPrice(...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500))

const user = {
    username: "vivek",
    price: 199
}

function handObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handObject(user)
// handObject({
//     username: "sam",
//     price: 399
// })

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray))