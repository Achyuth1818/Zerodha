import React from "react";

const Signup = () => {
  return (
    <>
      <div>
        <div className="flex gap-2 my-4 pb-2  border-b-2 ">
          <img
            src="./public/Zerodhalogo.jpeg"
            alt="/public/Zerodhalogo.jpeg"
            className="w-[25px] h-[25px]"
          />
          <p className="uppercase text-blue-600 font-bold text-xl">Zerodha</p>
        </div>

        <div className="mt-4  my-[5%] justify-center items-center md:mx-[20%]">
          <img src="./public/homeHero.png" alt="public/homeHero.png" />
        </div>
      </div>
    </>
  );
};

export default Signup;
