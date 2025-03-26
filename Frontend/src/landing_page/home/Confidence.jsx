import React from "react";

const Confidence = (props) => {
  return (
    <>
      <div className="mx-4 px-4 my-8">
        <p className="text-2xl text-[#2c2929] py-2">{props.head}</p>
        <p className="text-[#4b4747] py-2">{props.summary}</p>
      </div>
    </>
  );
};

export default Confidence;
