import React from "react";
import SupportPortal from "./SupportPortal";
import Ticket from "./Ticket";
import Navbar from "../Navbar";
import Footer from "../Footer";
const SupportPage = () => {
  return (
    <>
      <div>
        <Navbar />
        <SupportPortal />
        <Ticket />
        <Footer />
      </div>
    </>
  );
};

export default SupportPage;
