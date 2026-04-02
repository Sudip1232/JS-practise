function sayMyName(){
    console.log("s");
    console.log("u");
    console.log("d");
    console.log("i");
    console.log("p");
}
//sayMyName()

// function addTwoNumbers (number1, number2) {
// console.log(number1 + number2);
// }

function addTwoNumbers (number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}
const result = addTwoNumbers (3,4)
//console. log ("Result: ",result)


function loginUserMessage (username) {
return '$fusername) just logged in'}
//console. log(loginUserMessage("Sudip"))

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("Sudip"))
// console.log(loginUserMessage("Sudip"))

function calculateCartPrice(val1, val2, ...num1){   // rest operator (...num1)
    return num1
}

//console.log(calculateCartPrice(200, 400, 500, 2000))

