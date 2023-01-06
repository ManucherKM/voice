import WordSearchService from '../Service/WordSearchService.js'

class WordSearchController {
	async searchWords(str) {
		if (!str) {
			console.log('Пустая строка')
			return false
		}

		const res = await WordSearchService.searchWords(str)

		if (!res) {
			console.log('Процент соответствия меньше 60%')
			return false
		}

		return res
	}
}

export default new WordSearchController()
