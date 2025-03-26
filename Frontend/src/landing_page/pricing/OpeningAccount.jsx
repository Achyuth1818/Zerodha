import React from "react";

const OpeningAccount = () => {
  return (
    <>
      <div className=" md:mx-[20%] mx-4">
        <p className="text-2xl text-[#333433] my-4">
          Charges for account opening
        </p>
        <div className="border-2  w-full h-[250px]">
          <div className="top flex justify-between m-4">
            <div className="left  ml-8 mt-2"> Type of account</div>
            <div className="right  mr-8 mt-2">Charges</div>
          </div>
          <div className="bottom flex justify-between  border-t-2">
            <div className="left ml-8 mt-2">
              <ul className="m-2 px-3">
                <li className="m-2 p-1">Online Test</li>
                <li className="m-2 p-1">Offline account</li>
                <li className="m-2 p-1">NRI account (offline only)</li>
                <li className="m-2 p-1">
                  Partnership, LLP, HUF, or Corporate accounts (offline only)
                </li>
              </ul>
            </div>
            <div className="right mr-8">
              {" "}
              <ul className="m-4 text-end">
                <li>
                  <button className="rounded-sm text-white  px-3 bg-green-600 m-2">
                    free
                  </button>
                </li>
                <li>
                  {" "}
                  <button className="rounded-sm text-white  px-3 bg-green-600 m-2">
                    free
                  </button>
                </li>
                <li className="m-2 px-2 text-[#252b25]"> ₹ 500</li>
                <li className="m-2 px-2 text-[#252b25]">₹ 500</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OpeningAccount;
