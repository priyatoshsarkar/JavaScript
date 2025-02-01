
let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let myCreatingDate = new Date(2023, 0 ,23 , 5 ,3)
console.log(myCreatingDate.toDateString());

console.log(myCreatingDate.toLocaleString());

let myNewCreatingDate = new Date("2023-01-14")

console.log(myNewCreatingDate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myNewCreatingDate.getTime());

console.log(Math.floor(Date.now()/1000));


let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());
console.log(newDate.getFullYear());
