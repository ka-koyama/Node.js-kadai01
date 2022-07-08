// app.js

import express from "express";
// 課題のrouterを読み込む
import { kadaiRouter } from "./routes/kadai.route.js";

const app = express();
const port = 3001;

// 課題のルーティングを変更
app.use("/kadai", (req, res) => kadaiRouter(req, res));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
