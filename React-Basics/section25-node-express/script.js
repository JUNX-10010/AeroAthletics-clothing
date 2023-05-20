import fs from 'fs';

fs.readFile('./hello.txt', (err, data) => {
    if (err) {
        console.log("errorrrr!");
    }
    console.log(data.toString("utf8"));
    
})


// let a;
// if (1===1) {
//     const {largeNumber} = await import("./script2.js")
//     a = largeNumber
// }
// console.log("Hello World");
// console.log(a);


// import {largeNumber} from "./script2.js";
// const a = 5;
// const b = 10;

// console.log(a + largeNumber);

