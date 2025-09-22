// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// console.log(myCreatedDate.toLocaleString());

// let myCreatedDate1 = new Date("01-14-2025")
// console.log(myCreatedDate1.toLocaleString());

// let myTimestamp = Date.now()

// console.log(myTimestamp);
// console.log(myCreatedDate1.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()

newDate.toLocaleString('default', {
    weekday: "long"
})

console.log(newDate.toDateString());