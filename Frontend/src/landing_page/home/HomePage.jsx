import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Hero from "./Hero";
import OpenAccount from "./OpenAccount";
import Pricing from "./Pricing";
import EducationStats from "./EducationStats";

const HomePage = () => {
  return (
    <div className="text-center mt-[100px]">
      <Navbar />
      <Hero />
      <OpenAccount
        head="Invest in everything"
        summary="Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more."
      />

      <EducationStats />

      <Pricing />
      <OpenAccount
        head="Open a Zerodha account"
        summary="Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades."
      />

      <Footer />
    </div>
  );
};

export default HomePage;
