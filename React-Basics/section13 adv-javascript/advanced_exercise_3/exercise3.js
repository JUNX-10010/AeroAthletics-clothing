// change everything below to the newer Javascript!

// let + const
let aa = 'test';
let b = true;
const c = 789;
let a1 = 'test2';



// Destructuring
var person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};

let {firstName, lastName, age, eyeColor} = person;



// Object properties
const a = 'test';
const b = true;
const c = 789;

const okObj = {a,b,c};


// Template strings
let city = Jamaica;
var message = `Hello " ${firstName} " have I met you before? I think we met in " ${city} " last summer no???`;


// default arguments
// default age to 10;
const isValidAge = (age = 10) => age;

// Symbol
// Create a symbol: "This is my first Symbol"
let sym1 = Symbol("my first symbol");

// Arrow functions
function whereAmI(username, location) {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}

const whereAmI = (username, location) => {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!"
    };

        }