//Primitive

// 7 types : String, Number, Boolearn, null, undefined, Symbol,BigInt


const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123') //
const anotherId = Symbol('123') // not same output
console.log(id == anotherId);

const bigNumber = 3456543576654356754n

// Reference (Non primitive)
// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myobj = {
name: "hitesh",
age: 22,
}

const myFunction = function(){
    console.log("hello world");
    
}
// ********************************************

// Stack (Primitive), Heap (Non-Primitive)|

let anothername = myYoutubename
anothername = "chaiaurcode"
console. log (myYoutubename) ;
console. log (anothername);

let userOne = {
email: "user@google.com",
 upi: "user@ybl"}

 let userTwo = userone
userTwo. email = "hitesh@google.com"
console. log (userOne. email); 
console. log (userTwo. email);