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







