import express, { json } from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import router from "./router";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT as unknown as number;

app.use(cors(), json(), helmet(), morgan("dev"));
app.use("/api", router);
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

export default app;
