// Immediately Invoked Function Expressions (IIFE)


(function one(){
    //name iife 
    console.log(`DB CONNECTED`);   
})();

// ( () => {
//     console.log(`DB CONNECTED TWO`);
// })()

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('Sudip')