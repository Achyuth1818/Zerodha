import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Broking from "./Broking";
import KickStarted from "./KickStarted";
import People from "./People";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <Broking />
      <KickStarted />
      <People />
      <Footer />
    </>
  );
};

export default AboutPage;
