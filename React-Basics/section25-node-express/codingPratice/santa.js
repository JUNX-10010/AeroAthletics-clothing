// To what floor do the instructions take Santa?
// get data
// seperate how many times santa goes up and down
// subtract up and down to get the correct floor.
import { time } from 'console';
import fs from 'fs';

fs.readFile('./stairs.txt', (err, data) => {
    console.time("findFloor")
    const directions = data.toString("utf8").split("");
    const up = [];
    const down = [];
    
    directions.filter(direction => {
        if (direction === "(") {
            up.push(direction);
        } else if (direction === ")") {
            down.push(direction)
        }
    })

    const answer = up.length - down.length;
    console.timeEnd("findFloor");
    console.log(answer); 
    })





