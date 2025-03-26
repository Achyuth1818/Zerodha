import React from "react";

const OneTicket = (props) => {
  return (
    <>
      <div>
        <div className="flex gap-4 m-4">
          <p>{props.icon}</p>
          <p className="font-serif text-xl text-[#334343]">{props.heading}</p>
        </div>
        <div>
          <ul className="m-4 p-4">
            <li className="m-2 text-[#2651a9] hover:text-[#434533]">
              {props.first}
            </li>
            <li className="m-2 text-[#2651a9] hover:text-[#434533] w-[fit-content]">
              {props.second}
            </li>
            <li className="m-2 text-[#2651a9] hover:text-[#434533] w-[fit-content]">
              {props.three}
            </li>
            <li className="m-2 text-[#2651a9] hover:text-[#434533] w-[fit-content]">
              {props.fourth}
            </li>
            <li className="m-2 text-[#2651a9] hover:text-[#434533] w-[fit-content]">
              {props.fifth}
            </li>
            <li className="m-2 text-[#2651a9] hover:text-[#434533] w-[fit-content] ">
              {props.sixth}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default OneTicket;

{
  /* <FaCoins size={25} className="hover:text-[#5a4d4d] m-4" />
<FaChartLine size={25} className="hover:text-[#5a4d4d] m-4" />
<FaWallet size={25} className="hover:text-[#5a4d4d] m-4" />
<MdAccountBalance size={25} className="hover:text-[#5a4d4d] m-4" />
<FaUserCircle size={25} className="hover:text-[#5a4d4d] m-4" /> */
}
