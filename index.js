import "dotenv/config"
import TelegramBot from 'node-telegram-bot-api';
import ConvertController from "./Controller/ConvertController.js";

const TOKEN = process.env.TOKEN;
const bot = new TelegramBot(TOKEN, { polling: true });

bot.onText(/\/start/, async (msg) => {
    const chatId = msg.chat.id;

    const message = "Стартовое собщение";

    await bot.sendSticker(chatId, "https://chpic.su/_data/stickers/m/mikewazowski_vk/mikewazowski_vk_019.webp");
    await bot.sendMessage(chatId, message);
    bot.startPolling();

});

bot.on('voice', async (msg) => {
    const chatId = msg.chat.id;
    const { file_id } = msg.voice;

    const audioLink = await bot.getFileLink(file_id);

    const text = await ConvertController.getConvertText(audioLink);

    bot.sendMessage(chatId, text)

});