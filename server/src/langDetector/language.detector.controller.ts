import express, { Response, Request } from "express";
import { LanguageDetector } from "./language.detector.servise";

const router = express.Router();

router.patch("/d", async (request: Request, response: Response) => {
  try {
    const { textDetect } = request.body;
    const solution = new LanguageDetector();
    response.status(200).send(await solution.detectLanguage(textDetect));
  } catch (error: any) {
    response.status(500).send(error);
  }
});

export { router };
