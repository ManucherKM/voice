import "dotenv/config"
import TelegramBot from 'node-telegram-bot-api';
import fs from "fs";
import ConvertController from "./Controller/ConvertController.js";

const TOKEN = process.env.TOKEN;
const bot = new TelegramBot(TOKEN, { polling: true });

bot.on('voice', async (msg) => {
    const chatId = msg.chat.id;
    const voice = msg.voice;

    const audioLink = await bot.getFileLink(voice.file_id);

    const text = await ConvertController.getConvertText(audioLink);
});