import express from "express";
import { router as detector } from "./langDetector/language.detector";
const app = express();

app.use("/detector", detector);

export { app };
