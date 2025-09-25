let a = 10
const b = 30 

if (true) {
    var c = 40 // var doesnt have any scope
    // var c = ..
    // c = .. 
    // are same
}

// console.log(a , b , c);

function one(){
    const username = "vivek"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    two();
}

// one()

if(true) {
    const username = "vivek"
    if(username === "vivek"){
        const website = "youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);

//+++++++++++++++++++ interesting ++++++++++++++++++++

console.log(addone(5)) // can be used even before function is declared

function addone(num){
    return num + 1
}

const addTwo = function(num){
    return num + 2
}

console.log(addTwo(5)) // only after function is declared