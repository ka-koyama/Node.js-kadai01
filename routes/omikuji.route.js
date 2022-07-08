import express from "express";
import { getResult } from "../controllers/omikuji.controller.js"

export const omikujiRouter = express.Router(); //exportと記載 = 他のファイルからimport可能

omikujiRouter.get("/", (req, res) => getResult(req, res));