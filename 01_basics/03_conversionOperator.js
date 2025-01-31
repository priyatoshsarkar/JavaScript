
let scor = 100
console.log(typeof scor);
console.log(typeof (scor));

 scor = "100acb"
 console.log(typeof scor);
 
let valueInNumber = Number (scor) // string to number convert
console.log(typeof valueInNumber)
console.log(valueInNumber);//NaN

let a = "Sta"//true //undefined //null
console.log(a); //null
let test = Number (a) // string to number convert
console.log(test) // NaN // 1 // NaN //0


let isLoggedIn = 0
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn) //true
console.log(typeof booleanIsLoggedIn)//boolean

let someNumber = 30
let StringNumber = String (someNumber)
console.log(StringNumber);
console.log(typeof StringNumber);

let value = 3
let negvalue = - value
console.log(negvalue);


console.log(2+2)
let str1 = "hello"
let str2 = "Priyatosh"
console.log(str1+str2)

console.log("1" + 2 + 2)
console.log(1 + 2 + "2")


let x = 3;
const y = x++;
console.log(`x : ${x} , y : ${y}`) // 4 3

let m = 5;
const n = ++m;
console.log(`m : ${m} , n : ${n}`)  // 6 6