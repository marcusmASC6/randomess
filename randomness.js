//////////////////////
// GLOBAL VARIABLES //
//////////////////////
const alphabet = ['a', 'b', 'c', 'd', 'e','f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function randomLetter(){
    var a = (Math.floor(Math.random()*alphabet.length))
    console.log (alphabet [a])
}
randomLetter();

function randomNumber(){
    var b = (Math.floor(Math.random()*21))
    console.log (b)
}
randomNumber();

const foods = [
    "pizza",
    "burgers",
    "rice and beans",
    "lasagna",
    "macaroni and cheese",
    "baked potatoes"
];
const students = [
    "Bob",
    "Martin",
    "Danny",
    "Mahdi",
    "Harry",
    "Sean",
    "Robert"
];
/////////////////////////////
// END OF GLOBAL VARIABLES //
/////////////////////////////