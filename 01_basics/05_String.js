const name = "hitesh"
const repocount = 50
console.log(name + repocount +"value");

console.log(`name ${name} repocount ${repocount}`);

const gamename = new String("Hitesh")
console.log(gamename.charAt(2))
console.log(gamename.indexOf('i'));

const newString = gamename.substring(0,4)
console.log(newString);

const anotherString = gamename.slice(-8,4)
console.log(`reverseString ${anotherString}`)

let s = "GeeksforGeeks";
const ans = s.split('').reverse().join('')
console.log(ans);

const url  = "https://www.google%20.com"
console.log(url.replace('%20','-'));
console.log(url.includes('com'));


const stringName = "wellcome to the kolkata"
console.log(stringName.slice('-'));
