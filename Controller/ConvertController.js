import ConvertService from "../Service/ConvertService.js";

class ConvertController {
    async getConvertText(link, language = 'en-US') {
        try {
            if (!link) {
                console.log("Не найдена ссылка на аудиофайл");
                return
            }

            const res = await ConvertService.getConvertText(link, language);

            if (!res) {
                console.log("Не удалось конвертировать аудиофайл");
                return
            }

            return res;
        } catch (e) {
            console.log(e);
        }
    }
}

export default new ConvertController