import React from "react";

const Explanation = () => {
  return (
    <>
      <div>
        <p className="text-center text-[#333343] my-4 text-xl">
          <span className="text-blue-500 hover:text-[#453f3f]">
            Calculate your costs upfront{" "}
          </span>
          using our brokerage calculator
        </p>
      </div>
      <div className="m-6">
        <div>
          <p className="text-3xl text-[#242824] my-6">Charges explained</p>
          <p className="text-xl text-[#665c5c] my-4 ">
            Securities/Commodities transaction tax
          </p>
          <p className="text-[13px] text-[#232323]">
            Tax by the government when transacting on the exchanges. Charged as
            above on both buy and sell sides when trading equity delivery.
            Charged only on selling side when trading intraday or on F&O.
          </p>
          <p className="text-[13px] text-[#232323]">
            When trading at Zerodha, STT/CTT can be a lot more than the
            brokerage we charge. Important to keep a tab.
          </p>
          <p className="text-xl text-[#665c5c] my-4">
            Transaction/Turnover Charges
          </p>
          <p className="text-[13px] text-[#232323]">
            Charged by exchanges (NSE, BSE, MCX) on the value of your
            transactions.
          </p>
          <p className="text-[13px] text-[#232323]">
            BSE has revised transaction charges in XC, XD, XT, Z and ZP groups
            to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been
            merged into a new group X w.e.f 01.12.2017)
          </p>
          <p className="text-[13px] text-[#232323]">
            BSE has revised transaction charges in SS and ST groups to ₹1,00,000
            per crore of gross turnover.
          </p>
          <p className="text-[13px] text-[#232323]">
            BSE has revised transaction charges for group A, B and other non
            exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC,
            W, T) at ₹375 per crore of turnover on flat rate basis w.e.f.
            December 1, 2022.
          </p>
          <p className="text-[13px] text-[#232323]">
            BSE has revised transaction charges in M, MT, TS and MS groups to
            ₹275 per crore of gross turnover.
          </p>
          <p className="text-xl text-[#665c5c] my-4">Call & trade</p>
          <p className="text-[13px] text-[#232323]">
            Additional charges of ₹50 per order for orders placed through a
            dealer at Zerodha including auto square off orders.
          </p>
          <p className="text-xl text-[#665c5c] my-4">Stamp charges</p>
          <p className="text-[13px] text-[#232323]">
            Stamp charges by the Government of India as per the Indian Stamp Act
            of 1899 for transacting in instruments on the stock exchanges and
            depositories.
          </p>
          <div>
            <p className="text-xl text-[#665c5c] my-4">Disclaimer</p>
            <p className="text-[13px] text-[#232323]">
              For Delivery based trades, a minimum of ₹0.01 will be charged per
              contract note. Clients who opt to receive physical contract notes
              will be charged ₹20 per contract note plus courier charges.
              Brokerage will not exceed the rates specified by SEBI and the
              exchanges. All statutory and regulatory charges will be levied at
              actuals. Brokerage is also charged on expired, exercised, and
              assigned options contracts. Free investments are available only
              for our retail individual clients. Companies, Partnerships,
              Trusts, and HUFs need to pay 0.1% or ₹20 (whichever is less) as
              delivery brokerage. A brokerage of 0.25% of the contract value
              will be charged for contracts where physical delivery happens. For
              netted off positions in physically settled contracts, a brokerage
              of 0.1% will be charged.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Explanation;
