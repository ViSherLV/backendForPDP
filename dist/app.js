"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = require("body-parser");
const express = require("express");
const usersContoller = require("./controlers/usersController");
const connect_1 = require("./mongo/connect");
const { Telegraf, Markup, Extra } = require('telegraf');
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
const token = "1268971736:AAHS6Gyr_KQDZQlxS8LqPH2cA9cu4a_qbks";
const bot = new Telegraf(token);
// bot.start((ctx:any) => ctx.reply('Welcome! Please share yor number', Markup.inlineKeyboard([
//     Markup.callbackButton('➡️ Next','share'),
//   ]).extra())
// bot.help((ctx:any) => ctx.reply('Send me a sticker'))
// bot.on('sticker', (ctx:any) => ctx.reply('👍'))
// bot.hears('hi', (ctx:any) => ctx.reply('Hey there'))
bot.start((ctx) => {
    return ctx.reply('Hello! Please share your number', Extra.markup((markup) => {
        return markup
            .oneTime()
            .resize()
            .keyboard([
            markup.contactRequestButton('Share phone number')
        ]);
    }));
});
//listens for the click on contact button
bot.on('contact', (ctx) => {
    console.log(ctx.update.message.contact);
    return ctx.reply('👍');
});
bot.launch();
app.listen(app.get("port"), () => {
    console.log("App is running");
});
//# sourceMappingURL=app.js.map