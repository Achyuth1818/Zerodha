import React from "react";
import OneTicket from "./OneTicket";
import { FaUserCircle, FaChartLine, FaWallet, FaCoins } from "react-icons/fa";
import { MdAccountBalance } from "react-icons/md";

const Ticket = () => {
  const icon1 = <FaCoins size={25} />;
  const icon2 = <FaChartLine size={25} />;
  const icon3 = <FaWallet size={25} />;
  const icon4 = <MdAccountBalance size={25} />;
  const icon5 = <FaUserCircle size={25} />;
  return (
    <>
      <div>
        <p className="text-[#333332] m-4 text-[20px] font-serif">
          To create a ticket, select a relevant topic
        </p>
      </div>
      <div className="md:grid grid-cols-3 grid-flow-row">
        <div>
          <OneTicket
            icon={icon1}
            heading="Account Opening"
            first="Getting started"
            second="Online"
            third="Offline"
            fourth="Charges"
            fifth="Company, Partnership and HUF"
            sixth="Non Resident Indian (NRI)"
          />
        </div>
        <div>
          <OneTicket
            icon={icon3}
            heading=" Your Zerodha Account"
            first="Login credentials"
            second="Account modification and segment additionle"
            third="Your Profile"
            fourth="CMR & DP ID"
            fifth="Nomination"
            sixth="Transfer and conversion of shares"
          />
        </div>
        <div>
          <OneTicket
            icon={icon2}
            heading=" Trading and Markets"
            first="Trading FAQs"
            second="Kite"
            third="Margins"
            fourth="Product and order types"
            fifth=" orporate actions"
            sixth="Kite Features"
          />
        </div>
        <div>
          <OneTicket
            icon={icon3}
            heading="Funds"
            first="Fund Withdrawl"
            second="Adding funds"
            third="Adding bank accounts"
            fourth="eMandates"
          />
        </div>
        <div>
          <OneTicket
            icon={icon4}
            heading="Console"
            first="IPO"
            second="Portfolio"
            third="Fund Statement"
            fourth="Profile"
            fifth="Reports"
            sixth="Refferial program"
          />
        </div>
        <div>
          <OneTicket
            icon={icon5}
            heading="Coin"
            first="Understanding mutual funds and Coin"
            second="Coin app"
            third="Coin web"
            fourth="Transactions and reports"
            fifth="National Pension Scheme (NPS)"
          />
        </div>
      </div>
    </>
  );
};

export default Ticket;
