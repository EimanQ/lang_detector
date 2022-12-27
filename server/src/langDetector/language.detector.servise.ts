import dotenv from "dotenv";
const { Translate } = require(`@google-cloud/translate`).v2;
dotenv.config();

class LanguageDetector {
  credentials: any;
  translate: any;
  constructor() {
    this.credentials = JSON.parse(process.env.credentials as string);
    this.translate = new Translate({
      credentials: this.credentials,
      projectId: this.credentials.project_id,
    });
  }

  detectLanguage = async (textDetect: string): Promise<{}[]> => {
    try {
      const response: {}[] = await this.translate.detect(textDetect);
      return response;
    } catch (error: any) {
      return error;
    }
  };
}

export { LanguageDetector };
