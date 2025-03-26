import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

import LeftSection from "./leftSection";
import Hero from "./Hero";
import RightSection from "./RightSection";

const ProductPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <LeftSection
        image="./public/console.png"
        name="Kite"
        summary="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        heading="Try Demo → "
        heading2="Learn more →"
        image2="./public/appstoreBadge.svg"
        image3="./public/googlePlayBadge.svg"
      />

      <RightSection
        image="./public/ecosystem (1).png "
        name="Console"
        summary="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        heading2="Learn more →"
        image2="./public/appstoreBadge.svg"
        image3="./public/googlePlayBadge.svg"
      />
      <LeftSection
        image="./public/coin.png"
        name="Coin"
        summary="OBuy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        heading="Coin → "
        image2="./public/appstoreBadge.svg"
        image3="./public/googlePlayBadge.svg"
      />

      <RightSection
        image="./public/kiteconnect.png"
        name="Kite Connect API"
        summary="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        heading="Kite Connect  → "
        image2="./public/appstoreBadge.svg"
        image3="./public/googlePlayBadge.svg"
      />
      <LeftSection
        image=" public/education.svg  "
        name="Varsity mobile"
        summary="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go.."
        image2="./public/appstoreBadge.svg"
        image3="./public/googlePlayBadge.svg"
      />

      <div className="mt-20">
        <Footer />
      </div>
    </>
  );
};

export default ProductPage;
