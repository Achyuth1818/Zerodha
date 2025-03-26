import React from "react";

const LeftSection = (props) => {
  return (
    <>
      <div className="md:flex m-4 md:mx-[10%]">
        <div className=" md:flex left m-4 md:w-[50%] hidden mb-0">
          <img src={props.image} alt="public/ecosystem.png" />
        </div>cd
        <div className="right md:w-[50%] md:mt-[10%] mb-0">
          <p className="m-4 text-[38px] text-[#3b3838] ">{props.name}</p>
          <p className="m-4 text-[#303632] font-serif">{props.summary}</p>
          <p className="m-4 text-blue-600 font-serif hover:text-[#363131] w-[fit-content] ">
            {props.heading}
          </p>
          <p className="m-4 text-blue-600 font-serif hover:text-[#363131] w-[fit-content]">
            {props.heading2}
          </p>
          <div className="flex m-4 gap-8">
            <img src={props.image2} />
            <img src={props.image3} />
          </div>
        </div>
        <div className="left m-4 md:w-[50%] md:hidden mb-0">
          <img src={props.image} alt="public/ecosystem.png" />
        </div>
      </div>
    </>
  );
};

export default LeftSection;
