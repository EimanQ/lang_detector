require(`dotenv`).config();
const detecorExpress = require("express");
const { Translate } = require(`@google-cloud/translate`).v2;

const credentials = JSON.parse(process.env.credentials);

const translate = new Translate({
  credentials: credentials,
  projectId: credentials.project_id,
});

console.log(translate);

const detectLanguage = async (text: string) => {
  try {
    const response = await translate.detect(text);
  } catch (error) {}
};
const detectorRouter = detecorExpress.Router();

module.exports = detectorRouter;
