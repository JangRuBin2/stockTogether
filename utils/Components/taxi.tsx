import React, { useEffect, useState } from "react";
import StockSearch from "./stockSearch";
import { Link } from "react-router-dom";

const corpAutoComp = () => {
  const [userName, setUserName] = useState("");
  const [stocks, setStocks] = useState("");
  const [recruitmentPeriod, setRecruitmentPeriod] = useState("");
  const [maximumDrivePeriod, setMaximumDrivePeriod] = useState("");
  const [purchasePrice, setPurchasePrice] = useState("");
  const [stockAmount, setStockAmount] = useState("");
  const [targetPrice, setTargetPrice] = useState("");
  const [stopLossPrice, setStopLossPrice] = useState("");
  const [maxPerson, setMaxPerson] = useState("");

  const handleChangeUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const handleChangeStocks = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStocks(e.target.value);
  };

  const handleChangeRecruitmentPeriod = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRecruitmentPeriod(e.target.value);
  };
  const handleChangeMaximumDrivePeriod = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setMaximumDrivePeriod(e.target.value);
  };

  const handleChangePurchasePrice = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPurchasePrice(e.target.value);
  };
  const handleChangeStockAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStockAmount(e.target.value);
  };
  const handleChangeTargetPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTargetPrice(e.target.value);
  };
  const handleChangeStopLossPrice = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setStopLossPrice(e.target.value);
  };
  const handleChangeMaxPerson = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMaxPerson(e.target.value);
  };
  return (
    <div className="main">
      <form action="" method="">
        <input
          type="text"
          placeholder="기사이름"
          name="userName"
          value={userName}
          onChange={handleChangeUserName}
        />
        <input
          type="text"
          placeholder="회사명"
          name="stocks"
          value={stocks}
          onChange={handleChangeStocks}
        ></input>
        <Link to={"/stockSearch"}>
          <button type="button" value="클릭">
            검색
          </button>
        </Link>
        <input
          type="date"
          placeholder="모집 마감 기간"
          name="recruitmentPeriod"
          value={recruitmentPeriod}
          onChange={handleChangeRecruitmentPeriod}
        ></input>
        <input
          type="date"
          placeholder="최대 운행 기간"
          name="maximumDrivePeriod"
          value={maximumDrivePeriod}
          onChange={handleChangeMaximumDrivePeriod}
        ></input>
        <input
          type="number"
          placeholder="구매 희망 금액"
          name="purchasePrice"
          value={purchasePrice}
          onChange={handleChangePurchasePrice}
        ></input>
        <input
          type="number"
          placeholder="구매 희망 수량"
          name="stockAmount"
          value={stockAmount}
          onChange={handleChangeStockAmount}
        ></input>
        <input
          type="number"
          placeholder="희망 목표 금액"
          name="targetPrice"
          value={targetPrice}
          onChange={handleChangeTargetPrice}
        ></input>
        <input
          type="number"
          placeholder="절망 폭파 금액"
          name="stopLossPrice"
          value={stopLossPrice}
          onChange={handleChangeStopLossPrice}
        ></input>
        <input
          type="number"
          placeholder="최대 인원수"
          name="maxPerson"
          min="1"
          max="10"
          value={maxPerson}
          onChange={handleChangeMaxPerson}
        ></input>
      </form>
    </div>
  );
};

export default corpAutoComp;
