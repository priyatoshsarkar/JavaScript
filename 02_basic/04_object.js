//const tinderUser = new Object()
const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name="jaib"
tinderUser.Loggin = false
console.log(tinderUser);


const regularUser ={
    email : "abc@gmail.com",
    fullname : {
        userfullname : {
            fristname : "rajib",
            lastname : "kumar"
        }
    }
}
console.log(regularUser.fullname.userfullname.fristname);


const obj1 ={ 1: "a", 2: "b"}
const obj2 ={3: "a" , 4: "b"}
const obj4 ={5: "a" , 6: "b"}
//const obj3= {obj1 , obj2}
//const obj3 = Object.assign({} , obj1, obj2,obj4)
const obj3 ={...obj1,...obj2,...obj4}
console.log(obj3);



const User =[
    {
        id: 1,
        email: "a@gmail.com"
    },
    {

    },
]
User[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('Loggin'));
