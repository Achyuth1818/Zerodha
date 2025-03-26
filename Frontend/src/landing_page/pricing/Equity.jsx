import React from "react";

const Equity = () => {
  return (
    <>
      <div className="text-center m-8">
        <img
          src="public/pricing0.svg"
          alt="public/pricing0.svg"
          className="w-full h-[100px]"
        />
        <p className="text-4xl text-[#444040] mb-4 ">Free equity delivery</p>
        <p className="text-[#807f7f]">
          All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0
          brokerage.
        </p>
      </div>
      <div className="text-center m-8">
        <img
          src="./public/intradayTrades.svg"
          alt="public/pricing0.svg"
          className="w-full h-[100px]"
        />
        <p className="text-4xl text-[#444040]  mb-4">Intraday and F&O trades</p>
        <p className="text-[#807f7f]">
          Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday
          trades across equity, currency, and commodity trades. Flat ₹20 on all
          option trades.
        </p>
      </div>
      <div className="text-center m-8">
        <img
          src="public/pricing0.svg"
          alt="public/pricing0.svg"
          className="w-full h-[100px]"
        />
        <p className="text-4xl text-[#444040] mb-4 ">Free direct MF</p>
        <p className="text-[#807f7f]">
          All direct mutual fund investments are absolutely free — ₹ 0
          commissions & DP charges.
        </p>
      </div>
    </>
  );
};

export default Equity;
