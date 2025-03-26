import React from "react";
import { BiRupee } from "react-icons/bi";
const Pricing = () => {
  return (
    <>
      <div className="m-4 p-4 text-start md:flex md:flex-row md:gap-[5%] md:mx-[8%]">
        <div>
          <p className="text-3xl text-[#282628] my-5">Unbeatable pricing</p>
          <p className="my-4">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
        </div>
        <div className="flex flex-row  bg-[#f7f7ee] items-center justify-center">
          <div className="flex gap-4 hover:bg-slate-200 cursor-pointer p-5 rounded-full">
            <p className="flex text-3xl font-serif font-bold text-orange-500">
              <BiRupee className="mt-2 text-orange-900" /> 199
            </p>
            <p id="free">free account opening</p>
          </div>
          <div className="flex gap-4 hover:bg-slate-200 cursor-pointer p-5 rounded-full">
            <p className="flex text-3xl font-serif font-bold text-orange-500">
              <BiRupee className="mt-2 text-orange-900" /> 499
            </p>
            <p id="avg">Average account opening</p>
          </div>
          <div className="flex gap-4 hover:bg-slate-200 cursor-pointer p-5 rounded-full">
            <p className="flex text-3xl font-serif font-bold text-orange-500">
              <BiRupee className="mt-2 text-orange-900" /> 999
            </p>
            <p id="high">High account openin</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
