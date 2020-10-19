import * as bodyParser from 'body-parser'
import * as express from "express";
import * as usersContoller from './controlers/usersController'

const app = express();
app.set("port", 3000);
app.use(bodyParser.json())
app.get('/users', usersContoller.allUsers);
app.get('/user/:id', usersContoller.getUser);
app.put('/user/:id', usersContoller.updateUser);
app.delete('/user/:id', usersContoller.deleteUser);
app.post('/user/', usersContoller.addUser);

app.listen(app.get("port"), ()=>{
    console.log("App is running")
})