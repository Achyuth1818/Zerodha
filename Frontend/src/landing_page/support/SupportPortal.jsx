import React from "react";
import { FaSearch } from "react-icons/fa";
const SupportPortal = () => {
  return (
    <>
      <div className="w-full h-[70%] bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500">
        <div className="flex justify-between m-4 pt-[50px] text-white">
          <div className="left cursor-pointer m-4">Support Portal</div>
          <div className="right m-4  underline">Track tickets</div>
        </div>
        <div className="md:flex disabled">
          {" "}
          <p className=" md:flex m-4 text-white text-2xl font-serif md:mx-[25%] my-5  hidden ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
            autem.
          </p>
        </div>
        <div className="flex justify-between m-4 md:mx-[25%] my-5">
          <input
            type="text"
            placeholder="Eg: how do i activate F&O, why is my order getting rejected ..."
            className="w-screen h-[50px] rounded-sm p-2"
          />
          <div className="h-[50px] bg-white text-center rounded-br-sm rounded-tr-sm  ">
            {" "}
            <FaSearch size={25} className="text-[#575753] m-2 my-3" />
          </div>
        </div>

        <div className="md:flex md:justify-between md:mx-[25%]">
          <div>
            <div className="m-8">
              {" "}
              <span className="text-white border-b-[1px] pb-2">
                Track account opening
              </span>
            </div>
            <div className="m-8">
              {" "}
              <span className="text-white border-b-[1px] pb-2">
                Track segment activation
              </span>
            </div>
            <div className="m-8">
              {" "}
              <span className="text-white border-b-[1px] pb-2">
                Intraday margins
              </span>
            </div>
            <div className="m-8">
              {" "}
              <span className="text-white border-b-[1px] pb-2">
                Kite user manual
              </span>
            </div>
          </div>
          <div className="m-8 text-white py-8">
            <p className="text-2xl">Featured</p>
            <div className="mx-8 my-4 border-b-[1px] w-[fit-content] pb-2">
              <p>1. MCX Crude option contract expiry - November 2024</p>
            </div>
            <div className="mx-8 my-4 border-b-[1px] w-[fit-content] pb-2">
              <p>2. Trading holiday on account of Gurunanak Jayanti</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SupportPortal;
