const myArr = [0 , 1, 2, 3, 4, 5]
console.log(myArr[2]);

const hero = ["Java", "SpringBoot", "Hiibernate"]
const myArr2 = new Array(1, 2, 3, 4)

//Array Method
myArr.push(6)
myArr.pop()
console.log(myArr);

//myArr.unshift(9)
//myArr.shift()
console.log(myArr);

console.log(myArr.includes(0));
console.log(myArr.indexOf(9));

const newArray = myArr.join()
console.log(typeof myArr);
console.log(typeof newArray);

//slice , splic

console.log("A ",myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


/*
const myArr = [0 , 1, 2, 3, 4, 5]

console.log("A ", myArr); //A  [ 0, 1, 2, 3, 4, 5 ]

const myn1 = myArr.slice(1,3) 
console.log(myn1);  //[ 1, 2 ]

console.log("B ", myArr);  //B 
//  [ 0, 1, 2, 3, 4, 5 ]

const myn2 = myArr.splice(1, 3) 
console.log("C ", myArr); //C  [ 0, 4, 5 ]
console.log(myn2); //1, 2, 3
*/