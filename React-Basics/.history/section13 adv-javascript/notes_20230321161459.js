// let + const
// let: block scope
// const: block scope, constant value

const player = 'bobby';
let experience = 100;
let wizardLevel = false;

if (experience > 90) {
  let wizardLevel = true;
  console.log('inside', wizardLevel);
}

// **** Destructuring ****
// before
const obj = {
    player: 'bobby',
    experience: 100,
    wizardLevel: false
}

// const player = obj.player;
// const experience = obj.experience;
// let wizardLevel = obj.wizardLevel;

// after
const { player, experience } = obj;
let { wizardLevel } = obj;


// *****Object properties *****
// before
const name = 'john snow';
const obj = {
    [name]: 'hello',
    ['ray' + 'smith']: 'hihi'
}
// after
const obj = {a, b, c}

// Template strings
const name = "Sally";
const age = 34;
const pet = "horse";
// before: const greeting = "Hello " + name + " you seem to be " + age;

const greeting = `Hello ${name} you seem to be ${age-10}. What a lovely day!`;

// default arguments
function greet(name = '', age = 30, pet = 'cat') {
    return `Hello ${name} you seem to be ${age-10}. What a lovely day!`;
    }

// Symbol
let sym1 = Symbol();
let sym2 = Symbol('foo');
let sym3 = Symbol('foo');

// ***** Arrow functions *****
// before
function add(a, b) {
    return a + b;
}

// after
const add  = (a, b) => a + b;


// ***** Advanced functions *****


// default arguments
function first() {
    var greet = 'Hi';
    function second() {
        alert(greet);
    }
    return second;
}

var newFunc = first();
newFunc();

// Modern JS
const first = () => {
    const greet = "Hi";
    const second = () => alert(greet);
    return second;
}

const newFunc = first();
newFunc();

// *****  Closures *****

// a function ran. the function executed. it's never going to execute again.
// but it's going to remember that there are references to those variables
// so the child scope always has access to the parent scope

// ***** Currying *****

// the process of converting a function that takes multiple arguments,
// into a function that takes them one at a time
// changing a function that takes multiple arguments into a function that takes them one at a time

const multiple = (a, b) => a * b;
const curriedMultiple = (a) => (b) => a * b;
const multiplyBy5 = curriedMultiple(5);

// ***** Compose *****

// the act of putting two functions together to form a third function
// where the output of one function is the input of the other
const compose = (f, g) => (a) => f(g(a));
const sum = (num) => num + 1;
compose(sum, sum)(5);

// Avoiding side effects, functional purity.
// Deterministic: the same input always gives the same output


// ***** ADVANCE ARRAYS *****

const double = [];
const array = [1, 2, 10, 16];

const newArray = array.forEach((num) => {
    double.push(num * 2); // side effect
    // push: mutates the original array
    // forEach: loops through the array
})

console.log("forEach", double);

// ***** map, filter, reduce *****

// map: loops through the array, creates a new array
const mapArray = array.map(num => num * 2)

console.log("map", mapArray);


// filter: loops through the array, creates a new array based on a condition
const filterArray = array.filter(num => num > 5)
console.log("filter", filterArray);
// second example
// const filterArray = array.filter(num => num === 5)

// reduce: loops through the array, returns a single value
const reduceArray = array.reduce((accumulator, num) => {
    return accumulator + num;
}, 0);

// accumulator: the value that is returned after each iteration
// num: the current value of the array
// 0: the initial value of the accumulator

// more simplified example:
const reduceArray1 = array.reduce((accumulator, num) => accumulator + num, 0);
console.log("reduce", reduceArray);


// ***** ADVANCE OBJECTS *****

// REFERENCE TYPE
// reference type: is an object that is stored in memory
var object1 = { value: 10 };
var object2 = object1;
var object3 = { value: 10 };

// CONTEXT vs SCOPE
// context: where we are within the object (this) (this refers to the object that it is inside of) 
function b() {
    let a = 4;
}

const object4 = {
    a: function() {
        console.log(this);
    }
}

// ***** INSTANTIATION *****
// instantiation: making a copy of an object and reuse the code

class Player {
    constructor(name, type) {
        console.log('player', this);
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
    }

}

class Wizard extends Player {
    constructor(name, type) {
        super(name, type);
    }

    play() {
        console.log(`WEEEE I'm a ${this.type}`);
    }
}

const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Shawn', 'Dark Magic');

// ***** ES7 *****
// includes: check if an array includes a value
const pets = ['cat', 'dog', 'bat'];
pets.includes('dog');

// exponential operator
const square = (x) => x**2;
const cube = (y) => y**3;

// ***** ES8 *****
// padStart: add a string to the beginning of a string
// padEnd: add a string to the end of a string
'hello'.padStart(10);
'hello'.padEnd(10);


// Trailing commas
const fun = (a, b, c, d, ) => {
    console.log(a);
}

// Object.values 
//a method that returns an array of a given object's own enumerable property values

// Object.entries
// a method that returns an array of a given object's own enumerable string-keyed property [key, value] pairs

// Object.keys
// a method that returns an array of a given object's own enumerable property names

let obj = {
    username0: 'Santa',
    username1: 'Rudolf',
    username2: 'Mr.Grinch'
}

Object.keys(obj).forEach((key, index) => {
    console.log(key, obj[key]);

})

Object.values(obj).forEach(value => {
    console.log(value);
})

Object.entries(obj).forEach(value => {
    console.log(value);
})


Object.entries(obj).map(value => {
    return value[1] + value[0].replace('username', '');
})


// ***** ES10 ***** 
//.flat() flat: a method that creates a new array with all
// sub-array elements concatenated into it recursively up to the specified depth
// default depth is 1 flat can be used to clean up nested arrays
const array = [1, 2, 3, [4, 5]];
array.flat();
// [1, 2, 3, 4, 5]

const array1 = [1, 2, 3, [4, 5, [6, 7]]];
array3.flat(2);
// [1, 2, 3, 4, 5, 6, 7]

const entries = ['bob', 'sally',,,,,,,'cindy'];
entries.flat();
// ["bob", "sally", "cindy"]

// .flatMap() flatMap: a method that first maps each element using a mapping
// function, then flattens the result into a new array


const jurassicPark = [["🦖", "🦕"], ["🦖", "🦕"], ["🦖", "🦕"]];
const jurassicParkChaos = jurassicPark.flatMap(creature => creature + "🦖")

// .trimStart() trimStart: a method that removes whitespace from the beginning of a string
// .trimEnd() trimEnd: a method that removes whitespace from the end of a string
userEmail1 = '                 eddytheeagle@gmail.com';
userEmail2 = 'eddytheeagle@gmail.com        ';
userEmail1.trimStart();
userEmail2.trimEnd();


// fromEntries: a method that turns a list of key-value pairs into an object
let userProfiles = [["commanderTom", 23], ["derekZlander", 40], ["hansel", 18]];

const obj = Object.fromEntries(userProfiles);
Object.entries(obj); // entries is the opposite of fromEntries

// .tryCatch() 
//tryCatch: a method that allows you to try a block of code and catch the error

try {
    true + "hi";

} catch {
    console.log("you messed up");
}



// ***** Advance Loops *****
// for of loop: a loop that iterates over data structures that are iterable
// for in loop: a loop that iterates over the enumerable properties of an object

const basket = ['apples', 'oranges', 'grapes'];
const detailedBasket = { apples: 5, oranges: 10, grapes: 1000 };
// 1
for (let i = 0; i < basket.length; i++) {
    console.log(basket[i]);
}

// 2
basket.forEach(item => {
    console.log(item);
})

// for of
// iterates - arrays, strings #new Es6 feature

for (item of basket) {
    console.log(item);
}

// for in 
// enumerates - objects
//loops over object properties - objects
let basket = ['apples', 'oranges', 'grapes'];

for (item in detailedBasket) {
    console.log(item);
}


// ***** ES2020 ***** 

//BigInt: a new primitive data type that allows you to
// represent integers with arbitrary precision
let bigInt = 1234567890123456789012345678901234567890n;


// Optional Chaining (?) : a way to access nested objects without having to
// check if the property exists or not at each level of the chain.

let will_pokemon = {
    pikachu: {
        species: 'Mouse Pokemon',
    height: 0.4,
    weight: 6,
  }
}

let weight = will_pokemon.pikachu.weight;
console.log(weight); // 6

let norman_pokemon = {
    raichu: {
        species: 'Mouse Pokemon',
        height: 0.8,
        weight: 30,
    }
}

// before ES2020
if (norman_pokemon.pikachu && norman_pokemon.pikachu.weight) {
    let weight = will_pokemon.pikachu.weight;
    console.log(weight); // 30
} else {
    let weight = undefined;
    console.log(weight); // undefined
}

// after ES2020
let weight3 =  norman_pokemon.pikachu?.pikachu?.weight
    
    
    // Nullish Coalescing Operator (??): a logical operator that returns its right-hand
    // side operand when its left-hand side operand is null or undefined, and
    // otherwise returns its left-hand side operand.
    
// Promise.allSettled: a method that allows you to wait for multiple promises to
// either resolve or reject, and returns an array of objects that each describe
// the outcome of each promise.

//globalThis: a global variable that provides a standard way to access the
//global this value in any environment.  It is a read-only property. It is
//similar to the global object in browsers.



