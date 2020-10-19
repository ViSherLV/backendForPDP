"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = require("body-parser");
const express = require("express");
const usersContoller = require("./controlers/usersController");
const connect_1 = require("./mongo/connect");
const app = express();
app.set("port", 3000);
app.use(bodyParser.json());
app.get('/users', usersContoller.allUsers);
app.get('/user/:id', usersContoller.getUser);
app.put('/user/:id', usersContoller.updateUser);
app.delete('/user/:id', usersContoller.deleteUser);
app.post('/user/', usersContoller.addUser);
const uri = "mongodb+srv://visher:chatbot@cluster0.mxirp.mongodb.net/testdb?retryWrites=true&w=majority";
connect_1.connectToMongo(uri);
app.listen(app.get("port"), () => {
    console.log("App is running");
});
//# sourceMappingURL=app.js.map