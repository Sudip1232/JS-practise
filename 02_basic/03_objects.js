//singleton
/*Object.create //constrcture method, singleton


//object literals
const mySym = Symbol("key1")

const user = {
    name : "Sudip",
    [mySym]: "mykey1",
    Age : 21,
    email : "Sudip@123",
    Location : "Kolkata",
    isLoggedIn : false,
    lastLoginDays: ["Monday", "Saturday"]
}
console.log(user);
console.log(user["email"]) // forr accessing the value of email
console.log(user.name) // for accessing the value of name
// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])*/

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());




// *****************************************************************

