var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
require(`dotenv`).config();
const detecorExpress = require("express");
const { Translate } = require(`@google-cloud/translate`).v2;
const credentials = JSON.parse(process.env.credentials);
const translate = new Translate({
    credentials: credentials,
    projectId: credentials.project_id,
});
console.log(translate);
const detectLanguage = (text) => __awaiter(this, void 0, void 0, function* () {
    try {
        const response = yield translate.detect(text);
    }
    catch (error) { }
});
const detectorRouter = detecorExpress.Router();
module.exports = detectorRouter;
//# sourceMappingURL=language.detector.js.map