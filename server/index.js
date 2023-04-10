import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";

dotenv.config();
const app = express();
const router = express.Router();

app.use(
  cors({
    origin: true,
  })
);

app.use(
  express.json({
    limit: "30mb",
  })
);

app.use(
  express.urlencoded({
    extended: true,
    limit: "30mb",
  })
);
const port = process.env.PORT || 4000;

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post("/message", async (req, res) => {
  const { message } = req.body;

  const openai = new OpenAIApi(configuration);
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: message,
    max_tokens: 1000,
    temperature: 0.9,
  });

  console.log(response);
  return res.status(200).json({
    message: response.data.choices[0].text,
  });
});

app.listen(port, () => {
  console.log("Server is running");
});
