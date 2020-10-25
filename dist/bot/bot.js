"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startBot = void 0;
const { Telegraf, Markup, Extra } = require('telegraf');
const token = "1268971736:AAHS6Gyr_KQDZQlxS8LqPH2cA9cu4a_qbks";
const bot = new Telegraf(token);
const addUser_1 = require("../mongo/methods/addUser");
function startBot() {
    bot.start((ctx) => {
        return ctx.reply('Hello! Please share your phone number', Extra.markup((markup) => {
            return markup
                .oneTime()
                .resize()
                .keyboard([
                markup.contactRequestButton('Share phone number')
            ]);
        }));
    });
    //listens for the click on contact button
    bot.on('contact', (ctx) => __awaiter(this, void 0, void 0, function* () {
        console.log(ctx.update.message.contact);
        const name = ctx.update.message.contact.first_name;
        const phone = +ctx.update.message.contact.phone_number;
        const chatId = +ctx.update.message.contact.user_id;
        yield addUser_1.addUserToDB({ name, phone, chatId });
        return ctx.reply('👍');
    }));
    bot.launch();
}
exports.startBot = startBot;
;
//# sourceMappingURL=bot.js.map