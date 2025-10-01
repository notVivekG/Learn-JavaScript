// for of 

// ["", "", ""]
// [{}, {}, {}]

const arr = "Hello world!";

for ( const iterator of arr) {
    // console.log(iterator);
}

// maps

const map = new Map()
map.set('IN', "India")
map.set('UN', "United States of America")
map.set('FR', "France")
// unique

// console.log(map)

for ( const key of map) {
    // console.log(key);
}

for ( const [key, value] of map) { // destructure 
    console.log(key, ':-', value);
}

const myObject = {
    'game1' : 'NFS', 
    'game2' : 'Spiderman'
}

for (const [key, value] of myObject){
    console.log(key, ':-', value)
}  
// wrong way
