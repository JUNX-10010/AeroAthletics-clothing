// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
let newArray = [];
array.forEach(user => {
  let { username } = user;
  username = username + "!";
  newArray.push(username);
})
console.log(newArray);

//Create an array using map that has all the usernames with a "? to each of the usernames
const mapArray = array.map(user => {
  let {username} = user;
  username = username + "?";
  return username;
})

//Filter the array to only include users who are on team: red
const filterArray = array.filter(user => user.team === "red")


//Find out the total score of all users using reduce
const reduceArray = array.reduce((acc,user) => user.score + acc, 0)

// (1), what is the value of i?
// ans: the array index

// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => num * 2);

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.

// Long version lol my answer
const newList = array.map(user => {
  let { items } = user;
  const updatedItems = items.map(item => items = item + "!");
  user.items = updatedItems;
  return user;
})
console.log(newList);

// shorter answer
const newList1 = array.map(user => {
  user.items = user.items.map(item => item = item + "!");
  return user;
})
console.log(newList1);