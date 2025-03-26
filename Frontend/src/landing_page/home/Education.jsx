import React from "react";
import Confidence from "./Confidence";

const Education = () => {
  return (
    <>
      <Confidence
        head="Customer first name"
        summary="That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India."
      />
      <Confidence
        head="No spam or gimmicks"
        summary="No gimmicks, spam,gamification, or annoying push notifications. High quality apps that you use at your pace, the way you like."
      />
      <Confidence
        head="The Zerodha universe"
        summary="Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs"
      />
      <Confidence
        head="Do better with money"
        summary="With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money."
      />
    </>
  );
};

export default Education;
