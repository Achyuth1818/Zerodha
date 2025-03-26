import React from "react";

const OpenAccount = (props) => {
  return (
    <>
      <div className="m-4 p-2 md:p-4">
        <p className="font-semibold text-[#504f4f] text-5xl m-4">
          {props.head}
        </p>
        <p className="text-2xl  text-[#242222] my-4 md:p-4">{props.summary}</p>
        <button className=" my-6 px-10 py-2 bg-blue-500 text-white hover:bg-[#242222] rounded-sm md:px-10">
          Sign up for free
        </button>
      </div>
    </>
  );
};

export default OpenAccount;
