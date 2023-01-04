import pkg from '@deepgram/sdk';
const { Deepgram } = pkg;
const deepgramApiKey = process.env.DEEPGRAM;
const deepgram = new Deepgram(deepgramApiKey);

class ConvertService {
    async getConvertText(link, language) {
        const params = [
            { url: link },
            { punctuate: true, model: 'general', language: language, tier: 'base' }
        ]
        const res = await deepgram.transcription.preRecorded(...params);
        const text = res.results.channels[0].alternatives[0].transcript;
        return text;
    }
}

export default new ConvertService