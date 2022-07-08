// app.js

import express from "express";
//おみくじのrouteを読み込む
import { omikujiRouter } from "./routes/omikuji.route.js";
//じゃんけんrouteを読み込む
import { jankenRouter } from "./routes/janken.route.js";

const app = express();
//postで送られてきたデータを受け取る
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const port = 3001;

// 編集
app.get("/",(req, res) => {
  res.json({
    uri: "/",
    message: "Hello Node.js!" ,
  });
});

app.use("/omikuji", (req, res) => omikujiRouter(req, res));

app.use("/janken", (req, res) => jankenRouter(req, res));

//おみくじ
app.get("/omikuji",(req, res) => {
    const omikuji = ["大吉", "中吉", "小吉", "凶", "大凶"];
    const min = 0;
    const max = omikuji.length - 1;
    const index = Math.floor(Math.random() * (max - min + 1)) + min;
    res.json({
      uri: "/omikuji",
      message: omikuji[index] ,
    });
  });

//ジャンケン
app.get("/janken",(req, res) => {
    res.json({
      uri: "/janken",
      message: "This is Janken URI!" ,
    });
  });

app.listen(port, () => {
    console.log('Example app listening at http://localhost:${port}');
});