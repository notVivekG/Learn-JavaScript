//singleton : jab constructor se banate hai toh singleton banta hai
// Object.create

//object literals : isse singleton nhi banta

const mySym = Symbol("key1")


const JsUser = {
    name: "Vivek", // processes as "name"
    "full name": "Vivek Kushwaha",
    [mySym]: "mykey1",
    age : 21,
    location: "Bareilly",
    email: "vivek@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Mondays", "Saturday"]
}

// console.log(JsUser["email"])
// console.log(JsUser["full name"]) //automatically takes from dot operator
// console.log(JsUser[mySym])

// JsUser.email = "vivek@chatgpt.com"
// Object.freeze(JsUser)
// JsUser.email = "vivek@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js User")
}

JsUser.greetingtwo = function(){
    console.log(`Hello Js User, ${this.name}`)
}

console.log(JsUser.greeting());
console.log(JsUser.greetingtwo());