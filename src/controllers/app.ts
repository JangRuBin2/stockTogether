import express from "express";
import path from "path";
import dbConnect from "../../utils/DB/dbConfigure";
import axios from "axios";
import dotenv from "dotenv"
// import fs from "fs";
dotenv.config({ path: "../../.env" }); // env 경로 설정
const root = path.join(__dirname, "..", ".."); //C:\Users\over9\KDT-2_FullStack\KDT-2-Project-A-5
const rootPublic = path.join(root, "public"); //C:\Users\over9\KDT-2_FullStack\KDT-2-Project-A-5\public

const app = express();
// DB 연결
dbConnect.connect((err) => {
  if (err) {
    console.error("DB연결에 실패했습니다", err);
    return;
  }
  console.log("DB연결에 성공했습니다");
});
let stockData = null;
// 알파벤티지에 주식 데이터 요청하는 함순
  async function stockDataRequest() {
    try {
      const symbol = "IBM";
      const apiKey = process.env.alphaApiKey;
      const response = await axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${symbol}&apikey=${apiKey}`)
      stockData = response.data;
      console.log(stockData);
    } catch (error) {
      console.error('주식 데이터를 받아오는데 실패했습니다', error);
    }
    // 3분에 한번씩 주식데이터 요청
    setTimeout(stockDataRequest, 3 * 60 * 1000);
  }
  // 최초 주식 데이터 요청
  stockDataRequest();
app.use(express.static(root)); //root 디렉토리
app.use(express.static(rootPublic)); //root의 하위 디렉토리는 첫번째만 접근 가능하기 때문에 별도로 지정.

app.get("/", (req, res) => {
  console.log({ root: rootPublic });
  res.sendFile(`index.html`, { root: rootPublic });



});

app.use((req, res) => {
  res.status(404).send("not found");
});

app.listen(8080, () => {
  console.log("connected");
});
