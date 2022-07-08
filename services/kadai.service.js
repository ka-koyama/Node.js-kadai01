// services/kadai.service.js

export const getkadai = async (query) => {
    try {
      const omikuji = ["大吉", "中吉", "小吉", "凶", "大凶"];
      const index = Math.floor( Math.random() * omikuji.length) ;
      return { result: omikuji[index] };
    } catch (e) {
      throw Error("Error");
    }
  };
  