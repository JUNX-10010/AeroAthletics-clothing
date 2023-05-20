// * New ES6 Features
// https://github.com/daumann/ECMAScript-new-features-list
    {
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
    }

// **** Destructuring ****
    {

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
    }

// *****Object properties *****
    {

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
    }

// ***** Advanced functions *****
    {

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
    }


// ***** ADVANCE ARRAYS *****
    {
        const double = [];
        const array = [1, 2, 10, 16];

        const newArray = array.forEach((num) => {
            double.push(num * 2); // side effect
            // push: mutates the original array
            // forEach: loops through the array
        })
        console.log("forEach", double);
    }

// ***** map, filter, reduce *****
    {
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
    }

    // find: loops through the array, returns the first instance that meets the condition
    const findArray = array.find((num) => num > 5);
    console.log("find", findArray);


// ***** ADVANCE OBJECTS *****
    {
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
    }

// ***** INSTANTIATION *****
    {
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
    }

// ***** ES7 *****
    {
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
    }

// ***** ES9 *****
    {
        // * Object spread operator *
        const animals = {
            tiger: 23,
            lion: 5,
            monkey: 2,
            bird: 40
        }

        const { tiger, ...rest } = animals;
        // rest: a variable that contains the rest of the properties
        // ...rest: the spread operator

        function objectSpread(p1, p2, p3) {
            console.log(p1);
            console.log(p2);
            console.log(p3);
        }

        const { tiger, lion, ...rest } = animals;
        objectSpread(tiger, lion, rest);


        // * finally:
        // Promise.finally(): a method that is used to execute a function after a
        // promise is settled. It is placed at the end of the promise chain.
        // Example:
        // promise.then(result => console.log(result)).catch(error => console.log(error)).finally(() => console.log('finally'));

        // * for await of:
        // for await of: a loop that creates a loop iterating over async iterable objects
        // Example:
        const urls = [
            'https://jsonplaceholder.typicode.com/users',
            'https://jsonplaceholder.typicode.com/posts',
            'https://jsonplaceholder.typicode.com/albums'
        ]

        const getData = async function() {
            const arrayOfPromises = urls.map(url => fetch(url))
            for await (let request of arrayOfPromises) {
                const data = await request.json();
                console.log(data);
            }
        }




    }

// ***** ES10 ***** 
    {

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
    }

// ***** Advance Loops *****
    {

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
        
    }

// ***** ES2020 ***** 
    {
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
        let weight3 =  norman_pokemon?.pikachu?.weight
            
            
        // Nullish Coalescing Operator (??): a logical operator that returns its right-hand
        // side operand when its left-hand side operand is null or undefined, and
        // otherwise returns its left-hand side operand.
        let norman_pokemon1 = {
            raichu: {
                species: 'Mouse Pokemon',
                height: 0.8,
                weight: 30,
                power: "",
            }
        }
        
        // before ES2020
        let power = norman_pokemon1?.raichu?.power || "no power";
        console.log(power); // no power
        
        // after ES2020
        let power1 = norman_pokemon1?.raichu?.power ?? "no power";
        console.log(power1); // no power
        
        // (:) is the ternary operator a conditional operator that takes three operands:
        // condition ? exprIfTrue : exprIfFalse
    }

// ***** ES2021 *****
    {
            // String.prototype.replaceAll: a method that returns a new string with all
            // matches of a pattern replaced by a replacement.
            const email = 'Hi, my name is eddy and my email is'
            const newEmail = email.replaceAll('eddy', 'will');
            console.log(newEmail);
    }

// ***** ES2022 *****
    {

        // .at(): a method that returns the character at the specified index in a string
        const arr = [100, 200, 400, 5000, 10]
        console.log(arr[-2])
        
        
        
        //! How Does Javascript Work?
        // 1. Javascript is a single threaded language which means one command is
        //    executed at a time.
        
        // 2. Javascript is synchronous which means it executes line by line.
        
        // 3. Javascript is non-blocking which means it does not wait for a response before moving on.
        
        // 4. Javascript is an interpreted language which means it does not need to be
        //    compiled before executing. It is compiled on the fly. 
        
        // 5. Javascript is a garbage collected language which means it automatically 
        //    frees up memory when it is no longer needed.
        
        // 6. Javascript is a prototype-based language which means objects inherit
        //    directly from other objects.
        
        // 7. Javascript is a multi-paradigm language which means it supports
        //    object-oriented, imperative, and functional programming styles.
        
        //! ***** Modules *****
        // Modules: a way to organize code into separate files and then import them
        // as needed. Modules are reusable pieces of code that can be exported from
        // one program and imported for use in another program.
        
        //! ----- IIFE -----
        // IIFE: an immediately invoked function expression that is used to avoid
        // variable hoisting from within blocks, protect against polluting the
        // global environment and simultaneously allow public access to methods.
        
        //js1 first file loaded.
        var myApp = {};
        
        //js2 second file loaded.
        (function() {
            myApp.add = function(a, b) {
                return a + b;
            }
        })();
        
        // ----- CommonJS + Browserify-----
        // CommonJS: a set of modules that are used in Node.js applications. It
        // uses the module.exports and require() syntax.
        // Browserify: a tool that allows you to use CommonJS modules in the browser.
        
        //js1 first file loaded.
        module.exports = function add(a, b) {
            return a + b;
        }
        
        //js2 second file loaded.
        var add = require("./add"); // assuming the js1 file is called add.js
        
        //! ----- ES6+Webpack2 -----
        // Webpack: a module bundler that takes modules with dependencies and
        // generates static assets representing those modules.
        
        //js1 first file loaded.
        export const add = (a, b) => a + b;
        //or 
        export default function add() {
            return a + b;
        }
        
        //js2 second file loaded.
        import { add } from './add';
        //or
        import add from './add';


        //! top-level await:
        // a feature that allows you to use await outside of an async function.
        // This means you can use await at the top level of a module.
        // This is useful for fetching data from an API and then using it in your
        // application.

        //? con: it is not supported in all browsers yet.

        //! Types of Modules:
        // 1. ES6 Modules: a module system that was introduced in ES6. It uses the
        //    import and export keywords to import and export modules.

        // 2. CommonJS Modules: a module system that is used in Node.js applications.
        //    It uses the module.exports and require() syntax.

        // 3. AMD Modules: a module system that is used in RequireJS applications.
        //    It uses the define() and require() syntax.
        
        //* import "http":
        // is a CommonJS module. It is a built-in module that is
        // used to create an HTTP server.
        // .createServer():
        // is a method that creates an HTTP server.
        // .listen():
        // is a method that binds and listens for connections on the specified host and port.
        // .writeHead():
        // is a method that writes a response header to the request.
        // .end():
        // is a method that signals to the server that all of the response headers and body have been sent; that server should consider this message complete.

        //*import "fs":
        // is a CommonJS module. It is a built-in module that is
        // used to work with the file system on your computer.
        // .readFile():
        // is a method that reads a file.
        // .writeFile():
        // is a method that writes a file.


        //* import "path":
        // is a CommonJS module. It is a built-in module that is
        // used to work with file and directory paths.
        // .join():
        // is a method that joins all given path segments together using the
        // platform-specific separator as a delimiter, then normalizes the resulting path.
        // .resolve():
        // is a method that resolves a sequence of paths or path segments into an absolute path.
        // .extname():
        // is a method that returns the extension of the path, from the last occurrence of the . (period) character to end of string in the last portion of the path.
        // .dirname():
        // is a method that returns the directory name of a path, similar to the Unix dirname command.
        // .basename():
        // is a method that returns the last portion of a path, similar to the Unix basename command.
        // .parse():
        // is a method that returns an object from a path string - the root, dir, base, name, and ext properties.

        //* require("os"):
        // is a CommonJS module. It is a built-in module that is
        // used to get information about the operating system you are running on.
        // .platform():
        // is a method that returns a string identifying the operating system platform.
        // .arch():
        // is a method that returns a string identifying the operating system CPU architecture for which the Node.js binary was compiled.
        // .cpus():
        // is a method that returns an array of objects containing information about each logical CPU core.
        // .freemem():
        // is a method that returns the amount of free system memory in bytes as an integer.
        // .totalmem():
        // is a method that returns the total amount of system memory in bytes as an integer.
        // .homedir():
        // is a method that returns the home directory of the current user as a string.
        // .hostname():
        // is a method that returns the hostname of the operating system as a string.
        // .networkInterfaces():
        // is a method that returns an object containing only network interfaces that have been assigned a network address.
        // .userInfo():
        // is a method that returns an object containing information about the current user.

    }

// ***** Section19 *****
{
    //* -- The Component Lifecycle methods --
    //! Mounting: the process of putting elements into the DOM.
        //? constructor(): 
            // a lifecycle method that is invoked before anything
            // is mounted. It is used for one time setup.
    
        //? getDerivedStateFromProps(): 
            // a lifecycle method that is invoked right
            // before calling the render method, both on the initial mount and on
            // subsequent updates. It should return an object to update the state,
            // or null to update nothing.
    
        //? render(): 
            // a lifecycle method that is required and is the only method
            // that you must define in a class component. It is the method that
            // actually outputs the HTML to the DOM.
        
        //? componentDidMount(): 
            // a lifecycle method that is invoked immediately
            // after a component is mounted (inserted into the tree). Initialization
            // that requires DOM nodes should go here. If you need to load data from
            // a remote endpoint, this is a good place to instantiate the network
            // request.
    
    //! Updating: the process of re-rendering the DOM when state changes.
        //? getDerivedStateFromProps(): 
            // a lifecycle method that is invoked right
            // before calling the render method, both on the initial mount and on
            // subsequent updates. It should return an object to update the state,
            // or null to update nothing.
    
    
        //? shouldComponentUpdate(): 
            // a lifecycle method that is invoked before
            // rendering when new props or state are being received. Defaults to
            // true. This method is not called for the initial render or when forceUpdate
            // is used.
    
        //? render(): 
            // a lifecycle method that is required and is the only method
            // that you must define in a class component. It is the method that
            // actually outputs the HTML to the DOM.
    
        //? getSnapshotBeforeUpdate():
            // a lifecycle method that is invoked right
            // before the most recently rendered output is committed to e.g. the DOM.
            // It enables your component to capture some information from the DOM
            // (e.g. scroll position) before it is potentially changed. Any value
            // returned by this lifecycle will be passed as a parameter to
            // componentDidUpdate().
    
        //? componentDidUpdate():
            // a lifecycle method that is invoked immediately
            // after updating occurs. This method is not called for the initial
            // render. Use this as an opportunity to operate on the DOM when the
            // component has been updated. This is also a good place to do network
            // requests as long as you compare the current props to previous props
            // (e.g. a network request may not be necessary if the props have not
            // changed).
    
    //! Unmounting: the process of removing a component from the DOM.
        // componentWillUnmount(): a lifecycle method that is invoked immediately
        // before a component is unmounted and destroyed. Perform any necessary
        // cleanup in this method, such as invalidating timers, canceling network
        // requests, or cleaning up any subscriptions that were created in
        // componentDidMount().
    
    // * Key Words *
    // component: a function or class that optionally accepts inputs and returns a
    
    //children: a way to pass components as data to other components.
    
    //smart component: a component that has state and/or lifecycle methods.
    
    //dumb component: a component that does not have state and/or lifecycle
    // methods.
    
    //props: a way to pass data from a parent component down to a child component.
    
    //state: a way to track changes in a component. An object that determines how
    // the component renders and behaves. Changes to the state object cause the
    // component to re-render.
    
    //context: a way to pass data through the component tree without having to
    // pass props down manually at every level.
    
    //refs: a way to access DOM nodes or React elements created in the render
    // method.
    
    //lifecycle methods: a way to run code at a specific point in time in the
    // component lifecycle.
    
    //higher order components: a way to reuse component logic.
    
    //render props: a way to share code between React components using a prop
    // whose value is a function.
    
    //fetch: 
        // a way to make HTTP requests.
        // Emaple: fetch('https://swapi.co/api/people/1')
        // .then(response => response.json())
        // .then(data => console.log(data))
    
    // .then(): 
        //a method that takes a function as an argument and returns a
        // Promise. It is used to handle the result of a Promise.
    
        
    
    // .setState(): a method that updates the state object. It accepts an object
    // and merges it with the current state.
    
    // One Way Data Flow: a way to pass data from a parent component down to a
    // child component. The child component cannot pass data back up to the
    // parent component.
    
    // * Components to know *
    
    //! componentDidCatch():
        // a lifecycle method that is invoked after an error has been thrown by a
        // descendant component. It receives two parameters: error and info.
    
    //! getDerivedStateFromError():
        // a lifecycle method that is invoked after an error has been thrown by a
        // descendant component. It receives one parameter: error.
    
    // * Create React App with state example *
    // class App extends React.Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         count: 0,
    //     }
    // }

    // render() {
    //     return (
    //         <div>
    //             <h1>{this.state.count}</h1>
    //             <button onClick={() => this.setState({count: this.state.count + 1})}>Increment</button>
    //         </div>
    //     )
    // }
    // }
    
    // * Create Reusable Components *
    // How to create a reusable component:
    // 1. Create a new file for the component.
    // 2. Create a new component class that extends React.Component.
    // 3. Create a render method that returns JSX.
    // 4. Export the component class so you can use it in other files.
    // 5. Import the component into the file you want to use it in.
    // 6. Create an instance of the component by using the JSX tag syntax.
    // Example:
    // export default class App extends React.Component {
    //     render() {
    //         return (
    //             <div>
    //                 <h1>Hello World</h1>
    //             </div>
    //         )
    //     }
    // }
    
    
    // * Create Reusable Components with Props *
    // How to create a reusable component with props:
    // 1. Create a new file for the component.
    // 2. Create a new component class that extends React.Component.
    // 3. Create a render method that returns JSX.
    // 4. Export the component class so you can use it in other files.
    // 5. Import the component into the file you want to use it in.
    // 6. Create an instance of the component by using the JSX tag syntax.
    // 7. Pass in props to the component by using attributes.
    // Example:
    // import React from 'react'
    // import ReactDOM from 'react-dom'
}

// * Section 20: HTTP/JSON/AJAX + Asynchronous JavaScript *
{
    // * HTTP *
    // HTTP stands for HyperText Transfer Protocol. It is the protocol that is
    // used to get pages from servers to your browser. It is an application
    // layer protocol that works on top of the TCP protocol. It is a request
    // response protocol, which means that a client (e.g. your browser) sends a
    // request to a server and the server sends a response back to the client.

    // * HTTP Requests *
    // HTTP requests are made up of a request line, request headers, and a
    // request body. The request line contains the HTTP method, the path, and
    // the protocol version. The request headers contain additional information
    // about the request. The request body contains the data that is being sent
    // to the server.

    // * HTTP Responses *
    // HTTP responses are made up of a status line, response headers, and a
    // response body. The status line contains the protocol version, the status
    // code, and the status message. The response headers contain additional
    // information about the response. The response body contains the data that
    // is being sent back to the client.

    // * HTTP Methods *
    // HTTP methods are used to tell the server what action to take. There are
    // several HTTP methods, but the most common ones are GET, POST, PUT, and
    // DELETE.

    // * GET *
    // The GET method is used to retrieve information from the given server
    // using a given URI. Requests using GET should only retrieve data and
    // should have no other effect on the data.

    // * POST *
    // The POST method is used to send data to the server, for example, customer
    // information, file upload, etc. using HTML forms.

    // * PUT *
    // The PUT method replaces all current representations of the target
    // resource with the request payload.

    // * DELETE *
    // The DELETE method deletes the specified resource.

    // * HTTP Status Codes *
    // HTTP status codes are returned by the server in response to a client's
    // request made to a specific resource. There are several status codes, but
    // the most common ones are 200, 301, 400, 401, 403, 404, and 500.

    // * AJAX *
    // AJAX stands for Asynchronous JavaScript and XML. It is a technique for
    // creating fast and dynamic web pages. AJAX is not a programming language,
    // but a combination of:
    // A browser built-in XMLHttpRequest object (to request data from a web
    // server), JavaScript and HTML DOM (to display or use the data)

    // * Promises *
    // A promise is an object that may produce a single value some time in the
    // future: either a resolved value, or a reason that it's not resolved
    // (e.g., a network error occurred). A promise may be in one of 3 possible
    // states: fulfilled, rejected, or pending. Promise users can attach
    // callbacks to handle the fulfilled value or the reason for rejection.

    // Promise.all(): a method that takes an array of promises as an argument
    // and returns a single Promise. It resolves when all of the promises in the
    // argument array have resolved. It rejects with the reason of the first
    // promise that rejects.

    // catch(): a method that is used to handle errors. It is used to handle
    // errors in a promise chain. It is placed at the end of the promise chain.
    //example:
    // promise.then(result => console.log(result)).catch(error => console.log(error));
    
    // Promise.resolve(): a method that returns a Promise object that is
    // resolved with a given value. If the value is a promise, that promise is
    // returned; if the value is a thenable (i.e. has a "then" method), the
    // returned promise will "follow" that thenable, adopting its eventual state;
    // otherwise the returned promise will be fulfilled with the value.

    // Promise.reject(): a method that returns a Promise object that is
    // rejected with a given reason. It is used to return a rejected promise
    // when an asynchronous operation fails.

    // Example:
    const promise = new Promise((resolve, reject) => {
        if (true) {
            resolve('Stuff Worked');
        } else {
            reject('Error, it broke');
        }
    })

    promise.then(result => console.log(result));

    // * Async/Await *
    // Async functions are a new feature in ES2017 that allow you to write                      
    // asynchronous code in a synchronous manner. Async functions are a
    // combination of promises and generators. Async functions always return a
    // value. Async functions will always return a value. If the value is
    // non-promise, it's wrapped in a resolved promise automatically. If the
    // value is a promise, it's simply returned.

    // Example:                                     
    async function playerStart() {
        const firstMove = await movePlayer(100, 'Left'); // Pause
        await movePlayer(400, 'Left'); // Pause
        await movePlayer(10, 'Right'); // Pause                                                                                                                                           
        await movePlayer(330, 'Left'); // Pause
    }

    async function fetchUser() {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data  = await response.json();
        return data;
    }

    const urls = [
        'https://jsonplaceholder.typicode.com/users',
        'https://jsonplaceholder.typicode.com/posts',
        'https://jsonplaceholder.typicode.com/albums'
      ]

    const userData = async function() {
        try {
            const [users, posts, albums] = await Promise.all(urls.map(url =>
                    fetch(url).then(resp => resp.json())
                ))
            
            console.log("users",users)
            console.log("posts",posts)
            console.log("albums",albums)
        } catch (err){
            console.log("something went wrong with API", err)
        }
    }

    // promise.allSettled(): a method that takes an array of promises as an
    // argument and returns a single Promise that resolves after all of the
    // given promises have either fulfilled or rejected, with an array of
    // objects that each describes the outcome of each promise.

    // Example:
    const promise1 = Promise.reject(3);
    const promise2 = 42;
    const promise3 = new Promise((resolve, reject) => {
        throw new Error('Boom!');
    });

    Promise.allSettled([promise1, promise2, promise3])
    .then((results) => {
        results.forEach((result) => {
            console.log(result.status);
            console.log(result.value);
        });

    });

    // * Fetch API *
    // The Fetch API provides a JavaScript interface for accessing and
    // manipulating parts of the HTTP pipeline, such as requests and responses.
    // It also provides a global fetch() method that provides an easy, logical
    // way to fetch resources asynchronously across the network.


}

// * API *
{
    // * API *
    // An API is an application programming interface that defines interactions
    // between multiple software intermediaries. It defines the kinds of calls
    // or requests that can be made, how to make them, the data formats that
    // should be used, the conventions to follow, etc. It can also provide
    // extension mechanisms so that users can extend existing functionality in
    // various ways and to varying degrees.

    // * REST *
    // REST stands for REpresentational State Transfer. It is an architectural
    // style for providing standards between computer systems on the web,
    // making it easier for systems to communicate with each other. REST-compliant
    // systems, often called RESTful systems, are characterized by how they
    // are stateless and separate the concerns of client and server.

    // * CRUD *
    // CRUD stands for Create, Read, Update, and Delete. It is a set of
    // operations that are used to maintain data in a database. CRUD is used
    // to implement the persistence layer of an application.

    
}

//* Section25: Node.js + Express*
{
    //* Express.js:
    //Express.js is a web application framework for Node.js. It is designed
    // for building web applications and APIs. It has been called the de facto
    // standard server framework for Node.js. 

    //Middleware: a function that has access to the request object (req),
    // the response object (res), and the next middleware function in the
    // application’s request-response cycle. The next middleware function is
    // commonly denoted by a variable named next.

    // Example:
    const express = require('express');
    const app = express();

    app.use((req, res, next) => {
        console.log('I run for all routes');
        next(); // next() is a function that tells Express to move on to the
                // next piece of middleware

    });

    //? req:
    // an object that contains information about the HTTP request that
    // was made to the server.
    // req most commonly used properties:
    // req.body: contains key/value pairs of data submitted in the request
    //           body. By default, it is undefined, and is populated when you
    //           use body-parsing middleware such as express.json() or
    //           express.urlencoded().
    // req.cookies: an object that contains cookies sent by the request.
    //              If the request contains no cookies, it defaults to {}.
    // req.params: an object containing properties mapped to the named route
    //             “parameters”. For example, if you have the route /user/:name,
    //             then the “name” property is available as req.params.name.
    //             This object defaults to {}.
    // req.query: an object containing a property for each query string
    //            parameter in the route. If there is no query string, it
    //            defaults to {}.
    // req.headers: an object containing the request’s HTTP headers.
    // req.ip: contains a string representation of the remote IP address of
    //         the request.
    // req.path: contains a string of the path part of the request URL.
    // req.route: contains the currently-matched route, a string.

    //? res:
    // an object that contains a bunch of methods for sending data back
    // to the client.
    // res most commonly used properties:
    // res.send(): sends a response of any type.
    // res.json(): sends a JSON response.
    // res.render(): renders a view template.
    // res.redirect(): redirects a request.
    // res.status(): sets the HTTP status for the response.
    


    // Most used Middleware:
    // app.use(express.json()); // allows us to parse JSON data in the body
    // app.use(express.urlencoded({ extended: true })); // allows us to parse
    // data from a form in the body of a request and add it to req.body
    // app.use(express.static('public')); // allows us to serve static files
    // from a folder called public

    //* Create a package.json file:
    // npm init -y
    // add type: "module" to package.json file
    // a file that contains information about a Node.js project. It contains
    // metadata about the project such as the name, version, description, and
    // other important data. It also contains a list of the project's
    // dependencies. 

    //* globalThis: 
    //a property that returns the global this value. It is
    // a global object that exists in all environments. It is a standard
    // global object that is defined in the ECMAScript 2020 specification.

    //* import with require():
    //a method that allows you to import modules
    // that are exported using the module.exports or exports object.

    //* export with module.exports: 
    //module.exports is an object that is
    // initially empty. You can add properties and methods to this object and
    // they will be exported using the require() method.

    //* CommonJS Modules:
    //CommonJS modules are a module system that was created for Node.js. It
    // uses the require() method to import modules and the module.exports
    // object to export modules.

    //* Restful API:
    //REST stands for REpresentational State Transfer. It is an architectural
    // style for providing standards between computer systems on the web,
    // making it easier for systems to communicate with each other. REST-compliant
    // systems, often called RESTful systems, are characterized by how they
    // are stateless and separate the concerns of client and server.


}

//! Section33: Redux */
{
    // The 3 Principles of Redux:
    // 1. Single source of truth
    // 2. State is read-only
    // 3. Changes are made with pure functions

    
    //? Action => Reducer => Store => React Component/Make Changes

    //* Redux:
    //Redux is a predictable state container for JavaScript apps. It is a
    // JavaScript library that is used for managing the state of an application.
    // It is often used with React but it can be used with other JavaScript
    // frameworks as well.

    //* Redux Store:
    //The Redux store is a JavaScript object that contains the state of the
    // application. The Redux store is the single source of truth for the
    // application. It is created using the createStore() method.

    //* Redux Reducer:
    //A reducer is a function that determines changes to an application’s
    // state. It uses the action it receives to determine this change. We
    // can have multiple reducers in a Redux application. Each reducer
    // manages a specific part of the application state. The combineReducers()
    // method turns multiple reducers into a single reducer that can be passed
    // to createStore().
    // The reducer function takes two parameters, the current state and an
    // action object. It returns the next state.

    //* Redux Action:
    //An action is a JavaScript object that has a type property and an optional
    // payload property. Actions are dispatched to the store using the
    // store.dispatch() method. Actions are created using functions called
    // action creators.

    //* Redux Action Creator:
    //An action creator is a function that returns an action object. It uses
    // the action object to send data to the Redux store. Action creators
    // are typically used with the store.dispatch() method.

    //* Redux Dispatch:
    //The dispatch() method is used to dispatch actions and trigger state
    // changes to the store. It is a method of the Redux store. It is used
    // in conjunction with action creators and the store.subscribe() method.

    //* Redux Subscribe:
    //The subscribe() method is used to add a change listener to the store.
    // It is a method of the Redux store. It is used in conjunction with
    // the store.dispatch() method.

    //* Redux Middleware:
    //Middleware is code that intercepts actions coming into the store. It
    // provides a third-party extension point between dispatching an action,
    // and the moment it reaches the reducer. It is a way to enhance Redux’s
    // behavior. It is used for logging, crash reporting, talking to an
    // asynchronous API, routing, and more. It is specified as the
    // applyMiddleware() method as a parameter when creating the store.

    //* Redux Thunk:
    //Redux Thunk is middleware that allows you to return functions, rather
    // than just actions, within Redux. This allows for delayed actions, including
    // working with promises. It is specified as the applyMiddleware() method
    // as a parameter when creating the store.

    //* Redux DevTools Extension:
    //The Redux DevTools Extension is an extension for Chrome and Firefox that
    // allows you to inspect the state of the Redux store as well as the actions
    // that are dispatched to the store. It also allows you to perform time
    // travel debugging. It is specified as the compose() method as a parameter
    // when creating the store.

    //* Redux Provider:
    //The Provider component is a component that is provided to us by the
    // React Redux library. It wraps the React application and makes it
    // possible for the components to access the Redux store. It is specified
    // as the top-level component when rendering the React application.

    //* Redux Connect:
    //The connect() method is a function provided to us by the React Redux
    // library. It is used to connect React components to a Redux store. It
    // is specified as a higher-order component when exporting the component.

    //* Redux mapStateToProps:
    //The mapStateToProps function is a function that we define. It is used
    // to specify which pieces of state we want to expose to a particular
    // component. It is specified as the first parameter of the connect()
    // method.

    //* Redux mapDispatchToProps:
    //The mapDispatchToProps function is a function that we define. It is
    // used to provide specific action creators to a component. It is specified
    // as the second parameter of the connect() method.

    //* Redux useSelector:
    //The useSelector hook is a function provided to us by the React Redux
    // library. It is used to select data from the Redux store state. It is
    // used in place of mapStateToProps.

    //* Redux useDispatch:
    //The useDispatch hook is a function provided to us by the React Redux
    // library. It is used to dispatch actions to the Redux store. It is used
    // in place of mapDispatchToProps.

    //? Redux Toolkit:
    //Redux Toolkit is the official, opinionated, batteries-included toolset
    // for efficient Redux development. It is a package that contains the
    // Redux core, as well as other packages that are used for development
    // with Redux. It is used to simplify the Redux development process.


}