import MessageService from '../Service/MessageService.js'

class MessageController {
	async start(msg, bot) {
		try {
			if (!msg) {
				console.log('Пустое сообщение')
				return
			}
			const res = await MessageService.start(msg, bot)

			if (!res) {
				return false
			}

			return true
		} catch (e) {
			console.log(e)
		}
	}
	async back(msg, bot) {
		try {
			if (!msg) {
				console.log('Пустое сообщение')
				return
			}
			const res = await MessageService.back(msg, bot)

			if (!res) {
				return false
			}
		} catch (e) {
			console.log(e)
		}
	}
	async bot(msg, bot) {
		try {
			if (!msg) {
				console.log('Пустое сообщение')
				return
			}
			const res = await MessageService.bot(msg, bot)

			if (!res) {
				return false
			}

			return true
		} catch (e) {
			console.log(e)
		}
	}
	async setting(msg, bot) {
		try {
			if (!msg) {
				console.log('Пустое сообщение')
				return
			}
			const res = await MessageService.setting(msg, bot)

			if (!res) {
				return false
			}

			return true
		} catch (e) {
			console.log(e)
		}
	}
	async voice(msg, bot) {
		try {
			if (!msg) {
				console.log('Пустое сообщение')
				return
			}
			const res = await MessageService.voice(msg, bot)

			if (!res) {
				return false
			}

			return true
		} catch (e) {
			console.log(e)
		}
	}
}
export default new MessageController()
