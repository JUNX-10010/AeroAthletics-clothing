// LOOPS*****
// todos = [
//     "clean room",
//     "brush teeth",
//     "exercise",
//     "study javascript",
//     "eat healthy"
// ];

// // for (var i = 0; i < todos.length; i++) {
// //     console.log(todos[i] + "!");
// // }


// todos.forEach(function(i){
//     console.log(i);
    
// })


// ARRAYS ******
var database = [
    {
        username: "Namron",
        password: "abcd123"

    },
    
    {
        username: "Rock",
        password: "777"

    },
    {
        username: "junior",
        password: "1234"

    },

];

var newsFeed = [
    {
        username: "Bobby Lee",
        timeline: "So tired from all that learning!"

    },

    {
        username: "Harry Lee",
        timeline: "So tired from all that learning!"
    }
];

function isUserValid (username, password) {
    for (var i = 0; i < database.length; i++) {
        if (username === database[i].username &&
                    password === database[i].password) {
                    return true;
                }
            }
    return false;

    
    // database.forEach(function(i){
    //     console.log(i.username, i.password)
    //     if (i.username === username  &&
    //         i.password === password) {
    //         return true;
    //     }
    //     })
    //     return false;
}

function signIn (username, password) {
    if (isUserValid(username, password)) {
        alert("Signing you in...");
        console.log(newsFeed);

    } else {
            console.log("Incorrect login. Please try again.");
        }
}
var userNamePrompt = prompt("What\'s your username?");
var passwordPrompt = prompt("What\'s your password?");
signIn(userNamePrompt, passwordPrompt)

// FUNCTION *******
// function checkDriverAge() {
//     var age = prompt("What is your age?");

//     if (Number(age) < 18) {
//         alert("Sorry, you are too young to drive this car. Powering off");
        
//     } else if (Number(age) > 18) {
//         alert("Powering On. Enjoy the ride!");
//     } else if (Number(age) === 18) {
//         alert("Congratulations on your first year of driving. Enjoy the ride!");
//     }
//     return checkDriverAge()
    
// }

// function checkDriverAge2() {
//     var age = prompt("What is your age?");

//     if (Number(age) < 18) {
//         console.log("Sorry, you are too young to drive this car. Powering off");
//     } else if (Number(age) > 18) {
//         console.log("Powering On. Enjoy the ride!");
//     } else if (Number(age) === 18) {
//         console.log("Congratulations on your first year of driving. Enjoy the ride!");
//     }

// }
