import React from "react";
import Charges from "./Charges";
import Equity from "./Equity";
import Explanation from "./Explanation";
import OpeningAccount from "./OpeningAccount";
import Navbar from "../Navbar";
import Footer from "../Footer";

const PricingPage = () => {
  return (
    <>
     
     <Navbar />
      <Charges />
      <Equity />
      <Explanation />
      <OpeningAccount />
      <Footer />
    
    </>
  );
};

export default PricingPage;
