const { Telegraf, Markup, Extra } = require('telegraf')
const token: string = "1268971736:AAHS6Gyr_KQDZQlxS8LqPH2cA9cu4a_qbks"
const bot = new Telegraf(token)
import { addUserToDB } from '../mongo/methods/addUser'
function startBot() {
    bot.start((ctx: any) => {
        return ctx.reply('Hello! Please share your phone number', Extra.markup((markup: any) => {
            return markup
                .oneTime()
                .resize()
                .keyboard([
                    markup.contactRequestButton('Share phone number')
                ])
        }))
    })
    //listens for the click on contact button
    bot.on('contact', async (ctx: any) => {
        console.log(ctx.update.message.contact);
        const name: string = ctx.update.message.contact.first_name;
        const phoneNumber: number = +ctx.update.message.contact.phone_number;
        const chatId: number = +ctx.update.message.contact.user_id;
        await addUserToDB({ name, phoneNumber, chatId })
        return ctx.reply('👍')
    }
    );
    bot.launch()
};

export { startBot };