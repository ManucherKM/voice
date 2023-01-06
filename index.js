import 'dotenv/config'
import TelegramBot from 'node-telegram-bot-api'
import MessageController from './Controller/MessageController.js'

const TOKEN = process.env.TOKEN
const bot = new TelegramBot(TOKEN, { polling: true })

bot.onText(/\/start/, async msg => {
	await MessageController.start(msg, bot)
})

bot.onText(/\⚙ Настройка/, async msg => {
	await MessageController.setting(msg, bot)
})

bot.onText(/\🤖 Бот/, async msg => {
	await MessageController.bot(msg, bot)
})

bot.onText(/\🔙 Назад/, async msg => {
	await MessageController.back(msg, bot)
})

bot.on('voice', async msg => {
	await MessageController.voice(msg, bot)
})
