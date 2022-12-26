import dotenv from "dotenv";
import express from "express";
const router = express.Router();
const { Translate } = require(`@google-cloud/translate`).v2;

dotenv.config();

export const credentials = JSON.parse(process.env.credentials as string);

const translate = new Translate({
  credentials: credentials,
  projectId: credentials.project_id,
});

const detectLanguage = async (text: string) => {
  try {
    const response: {}[] = await translate.detect(text);
    return response[0];
  } catch (error) {
    return error;
  }
};

detectLanguage(`kurwa mac`)
  .then((res) => console.log(`res`, res))
  .catch((err) => console.log(err.message));

export { router };
