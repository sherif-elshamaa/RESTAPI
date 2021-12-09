const express = require('express');
const connectDb = require("./connectDB.js");
const app = express();
const port = 4000;
const bodyParser = require('body-parser');
connectDb();


let findUsers = require("./tools/findUsers");
let createUser = require("./tools/createUser");
let findByIdUpdate = require("./tools/findByIdUpdate");
let findByIdAndRemove = require("./tools/findByIdAndRemove");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// this get API will retrieve all users from users collection
app.get('/', findUsers)

// this post API add new users to the collection 
// expect user object on req.body
app.post('/add', createUser)

// this put API will update certain user on collection
// expect user id on req.params
// expect new user values object on req.body
app.put('/update/:id', findByIdUpdate)

// this delete API will delete certain user on collection
// expect user id on req.params
app.delete('/delete/:id', findByIdAndRemove)



app.listen(port, () => {
    console.log("The server is running on: \n  http://localhost:" + port);
});