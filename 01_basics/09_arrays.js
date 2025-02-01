const male = ["ram", "sham", "jadu", "madhu"]
const female = ["3sha", "9tara", "Subhalaxmi"]

//male.push(female)
//console.log(male);

//const gender = male.concat(female)
//console.log(gender);


//const gender = [...male,...female]
//console.log(gender); //typeof gender object

//const arrayanarray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
//const real_array = arrayanarray.flat(Infinity)
//console.log(real_array);


console.log(Array.isArray("Hitesh"));       //false
console.log(Array.from("Hitesh"));          //[ 'H', 'i', 't', 'e', 's', 'h' ]
console.log(Array.from({name: "Rajib"}));   //[]


let scor1 = 100
let scor2 = 200
let scor3 = 300
console.log(Array.of(scor1, scor2, scor3)); //[ 100, 200, 300 ]
