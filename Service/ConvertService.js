import pkg from '@deepgram/sdk';
const { Deepgram } = pkg;
const deepgramApiKey = process.env.DEEPGRAM;
const deepgram = new Deepgram(deepgramApiKey);

class ConvertService {
    async getConvertText(link, language) {
        const res = await deepgram.transcription.preRecorded({ url: link }, { punctuate: true, model: 'general', language: language, tier: 'enhanced' })
        console.log(res);

        // deepgram.transcription.preRecorded({ url: link }, { punctuate: true, model: 'general', language: language, tier: 'enhanced' })
        //     .then(transcription => console.log(transcription.results.channels[0].alternatives[0]));
    }
}

export default new ConvertService