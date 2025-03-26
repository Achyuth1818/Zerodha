import React, { useState } from "react";
import { FaEye, FaChevronDown } from "react-icons/fa";

function Person(props) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDetails = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="text-center">
        <div>
          <img
            src={props.imageurl}
            alt="/public/nithin-kamath.png"
            className="w-[300px] h-[300px] mx-auto rounded-full my-[8%]"
          />
          <p className="my-4 text-3xl text-[#343434] mb-0">{props.name}</p>
          <p className="text-[12px]">{props.work}</p>
          <div>
            <button onClick={toggleDetails}>
              <span>
                {isOpen ? (
                  <FaChevronDown
                    size={24}
                    className="hover:text-blue-500 text-[#676363]"
                  />
                ) : (
                  <FaEye
                    size={24}
                    className="hover:text-blue-500  text-[#4d4848]"
                  />
                )}
              </span>
            </button>
            {isOpen && (
              <div className="text-[13px] text-[#333434] mx-8 text-start">
                <p>{props.summary}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Person;
