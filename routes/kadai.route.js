// routes/kadai.route.js

import express from "express";
import { getResult } from "../controllers/kadai.controller.js";

export const kadaiRouter = express.Router();

kadaiRouter.get("/", (req, res) => getResult(req, res));
