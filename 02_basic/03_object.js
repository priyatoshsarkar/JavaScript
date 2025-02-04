const mysym = Symbol("key")
const JSUser = {
   // mysym:"mykey",//mykey
    [mysym]:"mykey",
    name: "Rajib",
    "fullname": "Rajib Kumar",
    age: 25,
    email:"rajib@gmail.com",
    location: "Jaipur",
    isLoggedIn: false,
    lastLogin: ["monday","saterdat"]
}
console.log(JSUser["fullname"]);
//console.log(JSUser.mysym);//mykey           D/F
//console.log(JSUser[mysym]);//mykey

console.log(JSUser.email);
//console.log(JSUser["email"]);
//console.log(JSUser["fullname"]);
//console.log(JSUser.fullname);

//JSUser.email="sathi@gmai.com"
//console.log(JSUser.email);
//Object.freeze(JSUser)
//JSUser.email="sa@gmail.com"
//console.log(JSUser.email);

let JSuser = {}; // Define JSUser as an object

JSuser.greeting = function(){
    console.log("hello Js User");
};

JSUser.greetingTwo = function(){
    console.log(`Hello, ${this.age}`);
};

console.log(JSuser.greeting);    // Logs the function definition
console.log(JSuser.greetingTwo); // Logs the function definition
