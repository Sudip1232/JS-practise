const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function(value){
// console.log(value);
// } )

// coding.forEach( ( val ) => {
// console.log(val);
// } )

// function printMe (val){
//     console.log(val);
// }
// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageFileName);
} )