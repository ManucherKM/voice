import { backKeyboard, botKeyboard, startKeyboard } from '../Utils/Buttons.js'
import ConvertController from '../Controller/ConvertController.js'
import WordSearchController from '../Controller/WordSearchController.js'

class MessageService {
	async start(msg, bot) {
		const chatId = msg.chat.id
		const message = 'Стартовое собщение'
		await bot.sendSticker(
			chatId,
			'https://chpic.su/_data/stickers/m/mikewazowski_vk/mikewazowski_vk_019.webp'
		)
		await bot.sendMessage(chatId, message, startKeyboard)
		return true
	}

	async back(msg, bot) {
		const chatId = msg.chat.id
		const message = 'Главное меню'
		await bot.sendMessage(chatId, message, startKeyboard)
		return true
	}

	async bot(msg, bot) {
		const chatId = msg.chat.id
		const message = 'Бот'
		await bot.sendMessage(chatId, message, backKeyboard)
		return true
	}

	async setting(msg, bot) {
		const chatId = msg.chat.id
		const message = `О том как настроить бота вы можете прочитать тут👇:\n\nGitHub:\nhttps://github.com/ManucherKM/voice`
		await bot.sendMessage(chatId, message, botKeyboard)
		return true
	}

	async voice(msg, bot) {
		const messages = {
			treatment: 'Обработка команды ⏳',
			translated_text: '',
		}

		const chatId = msg.chat.id

		const { message_id } = await bot.sendMessage(chatId, messages.treatment)

		const { file_id } = msg.voice

		const audioLink = await bot.getFileLink(file_id)

		messages.translated_text = await ConvertController.getConvertText(audioLink)

		if (!!messages.translated_text) {
			const command = await WordSearchController.searchWords(
				messages.translated_text
			)
			if (!command) {
				const msg_err = 'Бот не смог обработать вашу команду😞\nПопробуйте снова'
				await bot.editMessageText(msg_err, {
					chat_id: chatId,
					message_id,
				})
				return
			}

			const msg_success = `Команда: ${command} принята`
			await bot.editMessageText(msg_success, {
				chat_id: chatId,
				message_id,
			})
		} else if (!messages.translated_text) {
			const msg_err = 'Бот не смог обработать вашу команду😞\nПопробуйте снова'
			await bot.editMessageText(msg_err, {
				chat_id: chatId,
				message_id,
			})
		}
		return true
	}
}

export default new MessageService()
