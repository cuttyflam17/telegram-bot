var TelegramBot = require('node-telegram-bot-api');
var config = require(__dirname + '/config.js');
var url = config.SERVER_URL;
var token = config.TELEGRAM_TOKEN;
var answer = require(config.MAIN_PATH + '/answer.js');
var bot = new TelegramBot(token);

bot.setWebHook(`${url}/telegram`);

/*bot.onText('/\/start/', function(msg) {
	bot.sendMessage(msg.chat.id, answer.welcome_text['ru']);
})*/

bot.on('message', function(msg) {
  bot.sendMessage(msg.chat.id, 'Да, я с детства в аду, стресс, я тону....').catch(function(e) {
  	console.log(e);
  });
});

module.exports = bot;