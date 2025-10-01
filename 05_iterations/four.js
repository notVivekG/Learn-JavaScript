const myObject = {
    js: 'javascript',
    cpp: 'C++',
    swift: "swift by apple"
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java"]

for (const key in programming){
    // console.log(programming[key]);
} 
// map is not iteratable ( for in );