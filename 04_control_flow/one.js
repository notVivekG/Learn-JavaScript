//if
const isUserloggedIn = true
const temperature = 41

if ( temperature < 50 ){
    console.log("executed");
}
else { 
    console.log("temperature is greater than 50");
}

// <, > , <= , >= , == , === , !=

const score = 200

if (score > 100) {
    let power = "fly"
    console.log(`User power: ${power}`);
}

console.log(`User power: ${power}`);

const balance = 1000
//if (balance>500) console.log("test") , 
// ("test2") 
// this comma is used for multiple line codes 

if (balance > 500 ) {
    console.log("less than");
} else if (balance <750 ) {
    console.log("less than 750 ")
}
else {
    console.log("more than 750");
}