const marvel_heros = ["thor","ironman","spiderman"]
const dc_heros = ["superman","Flashman","batman"]
//marvel_heros.push (dc_heros)
//console. log(marvel_heros);
//console. log(marvel_heros[3][1]);

//const allHeros = marvel_heros.concat(dc_heros)
//console.log(marvel_heros);

const new_all_heros= [...marvel_heros ,...dc_heros]//marged all arrays "concat"
//console.log(new_all_heros);

const another_array = [1, 2, 3, [4 , 5 , 6], 7, [6 , 7 ,[4,5]]]
const real_another_array = another_array.flat(Infinity) // convert all array in 'one' array
console.log(real_another_array);


console.log(Array.isArray("sudip"));

console.log(Array.from("sudip"));
console.log(Array.from({name: "sudip"}));// empty array 

let score1 = 100
let score2 = 200
let score3 = 300
let score4 = 400
console.log(Array.of (score1,score2,score3,score4));// "Array.of" marge all array






