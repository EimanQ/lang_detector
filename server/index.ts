import dotenv from "dotenv";
import { app } from "./src/app";

dotenv.config();
export const port: any = process.env.PORT;

app.listen(port, () => console.log(`Server is running on port - ${port}`));
