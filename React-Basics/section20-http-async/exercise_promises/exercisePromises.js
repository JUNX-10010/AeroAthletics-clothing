// Solve the questions below:

// #1) Create a promise that resolves in 4 seconds and returns "success" string
const promise = new Promise((resolve, reject) => {
  setTimeout(resolve, 4000, "success");
})

// #2) Run the above promise and make it console.log "success"
promise.then(result => console.log(result))

// #3) Read about Promise.resolve() and Promise.reject(). How can you make
// the above promise shorter with Promise.resolve() and console loggin "success"
const promise2 = Promise.resolve("success")

promise2.then(result => console.log(result))

// #4) Catch this error and console log 'Ooops something went wrong'
const prom3 = Promise.reject('failed')
//option 1
.catch(console.log('Ooops something went wrong'))
//option 2
// .catch(error => {
//   if (error) {
//     console.log('Ooops something went wrong')
//   }
// })


// #5) Use Promise.all to fetch all of these people from Star Wars (SWAPI) at the same time.
// Console.log the output and make sure it has a catch block as well.
const urls = [
  'http://swapi.dev/api/people/1',
  'http://swapi.dev/api/people/2',
  'http://swapi.dev/api/people/3',
  'http://swapi.dev/api/people/4'
]

const data = Promise.all(urls.map(url => {
  return fetch(url).then(response => response.json())
  .then(results => console.log(results))
  .catch(err => console.log("url link is broken",err))
}))

data

// #6) Change one of your urls above to make it incorrect and fail the promise
// does your catch block handle it?

//yes, it does handle it and it will console log the error test and the index of the url that failed