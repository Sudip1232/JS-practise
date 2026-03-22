const user = {
    username: "Sudip",
    price: 999,

    welcomeMessage: function() {      //current context prefer "this.username"
console.log(`${this.username} ,welcome to website"`);
    }
}
// user.welcomeMessage ()
// user. username = "sam"
// user. welcomeMessage()
console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => { // => arrow function
    let username = "hitesh"
    console.log(this);
}

// const addTwo = (num1, num2) => { // when you use {} then use return 
//     return num1 + num2
// }
//console.log(addTwo);

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 ) // 

const addTwo = (num1, num2) => ({username: sudip})

console.log(addTwo(3,4));

// const myArray = [1,2,3,4,5]

// myArray.forEach()