const coding = ["js", "ruby", "java", "cpp"]

coding.forEach( function (val) {
    // console.log(val);
})

coding.forEach( (val) => {
    // console.log(val);
})

coding.forEach((item, ind, ar) => {
    // console.log(item, ind, ar);
})

const map = new Map()
map.set('IN', "India")
map.set('UN', "United States of America")
map.set('FR', "France")

map.forEach( (val) => {
    // console.log(val);
})
// only prints the value and not the key

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "C++",
        languageFileName: "cpp"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
})