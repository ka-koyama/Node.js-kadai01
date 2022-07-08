// controllers/kadai.controller.js

import { getkadai } from "../services/kadai.service.js";

export const getResult = async (req, res, next) => {
  try {
    const result = await getkadai({});
    return res.status(200).json({
      本日の運勢: result,
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};
