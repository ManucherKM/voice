const commands = ['Выключи компьютер', 'Перезагрузи компьютер']

class WordSearchService {
	async searchWords(str) {
		const percent = 0.6 // 60%

		const targets = []

		for (let i = 0; i < commands.length; i++) {
			const command = commands[i]

			let matches = 0

			for (const letter of command) {
				if (str.includes(letter)) {
					matches++
				}
			}

			const min_matches = Math.floor(command.length * percent)

			if (matches >= min_matches) {
				const obj = {
					idx: i,
					matches: matches,
				}
				targets.push(obj)
			}
		}

		let command = {
			idx: null,
			matches: 0,
		}

		for (const target of targets) {
			if (target.matches > command.matches) {
				command = target
			}
		}

		if (command.idx === null) {
			return false
		}

		return commands[command.idx]
	}
}
export default new WordSearchService()
