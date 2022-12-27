import express from "express";
import cors from "cors";
import { router as detector } from "./langDetector/language.detector.controller";
const app = express();

app.use(cors());
app.use(express.json());
app.use("/detector", detector);

export { app };