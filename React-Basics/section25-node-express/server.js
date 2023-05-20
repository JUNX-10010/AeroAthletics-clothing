//* Express *
import express from 'express';
const app = express();
const port = 3000; 

// app.use((req, res, next) => {
//     console.log("I'm a middleware");
//     next();
// })
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static("public"));




// app.get("/:id", (req, res) => {
//     res.status(404).send("not found");
// })
app.listen(port);


// import http from 'http';
// Building a server
// const server = http.createServer((request, response) => {
//     console.log("Headers: ", request.headers);
//     console.log("Method: ", request.method);
//     console.log("URL:", request.url);
//     response.setHeader("Content-Type", "application/json");
//     const user = {name: "Norman", age: 22}
//     response.end(JSON.stringify(user))
// })

// server.listen(3000);


/// server: http://localhost:3000 - to access the server in the browser 
/// .createServer((request, response) => {}) - to create a server
/// request: the request object that contains the request information from the client (browser) to the server (node) 
/// response.setHeader("Content-Type", "text/html") - to set the content type of the response to the client (browser)
    // Most used content types:
    // text/html: to send HTML to the client (browser)
    // text/plain: to send plain text to the client (browser)
    // application/json: to send JSON to the client (browser)
    // application/xml: to send XML to the client (browser)
/// .end("<h1>Hello World</h1>") - to send the response to the client. It can be a string, a buffer, a stream, or an object
/// .listen(3000) - to listen to the port 3000

///JSON.stringify(user) - to convert the object to a JSON string to send it to the client (browser)






