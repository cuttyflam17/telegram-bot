var TelegramBot = require('node-telegram-bot-api');
var config = require(__dirname + '/config.js');
var url = config.SERVER_URL;
var token = config.TELEGRAM_TOKEN;
var bot = new TelegramBot(token);
console.log(url);
bot.setWebHook(`${url}/telegram`);

bot.on('message', msg => {
  bot.sendMessage(msg.chat.id, 'Да, я с детства в аду, стресс, я тону....');
});


module.exports = bot;