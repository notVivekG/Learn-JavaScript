// // const name = "vivek"
// // const repoCount = 50

// // // use back ticks `` for string interpulation , this will help in using methods within console log 
// // console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// const gameName = new String('vivekptg')
// // // string is an object which holds key value pairs , to hold index and characters of string 

// // console.log(gameName[0]);
// // console.log(gameName.__proto__);
// // // this shows the object 

// // console.log(gameName.length);
// // console.log(gameName.toUpperCase());
// // console.log(gameName.charAt('2'));
// // console.log(gameName.indexOf('p'));

// const newString = gameName.substring(0,4);
// // last range not get included 
// console.log(newString);

// const anotherString = gameName.slice(-8, -4)
// console.log(anotherString);

const newStringOne = "     string    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

const ingamename = "vivek.123"
console.log(ingamename.split('.'))



