// import React, { useState } from "react";
// import { HiOutlineMenu } from "react-icons/hi"; // Hamburger Menu Icon
// import { IoCloseOutline } from "react-icons/io5"; // Close Icon
// import { NavLink } from "react-router-dom";

// const Navbar = () => {
//   const [nav, setNav] = useState(false);

//   const handleNav = () => {
//     setNav(!nav);
//   };

//   return (
//     <>
//       {/* Navbar Container */}
//       <div className="flex justify-between m-4 fixed top-0 left-0 w-full border-b-2 bg-white z-50">
//         <div className="flex gap-2">
//           <img
//             src="./public/Zerodhalogo.jpeg"
//             alt="/public/Zerodhalogo.jpeg"
//             className="w-[25px] h-[30px]"
//           />
//           <p className="uppercase text-blue-600 font-bold text-2xl">Zerodha</p>
//         </div>
//         <div>
//           <ul className="md:flex text-[#52534b] items-center gap-x-10 hidden">
//             <li className="cursor-pointer hover:text-blue-600 ">
//               <NavLink
//                 to="/"
//                 className={({ isActive }) =>
//                   isActive
//                     ? "text-blue-500"
//                     : "text-gray-600 hover:text-blue-500"
//                 }
//               >
//                 Home
//               </NavLink>
//             </li>
//             <li className="cursor-pointer hover:text-blue-600">
//               <NavLink
//                 to="/about"
//                 className={({ isActive }) =>
//                   isActive
//                     ? "text-blue-500"
//                     : "text-gray-600 hover:text-blue-500"
//                 }
//               >
//                 About
//               </NavLink>
//             </li>
//             <li className="cursor-pointer hover:text-blue-600">
//               <NavLink
//                 to="/pricing"
//                 className={({ isActive }) =>
//                   isActive
//                     ? "text-blue-500"
//                     : "text-gray-600 hover:text-blue-500"
//                 }
//               >
//                 Price
//               </NavLink>
//             </li>
//             <li className="cursor-pointer hover:text-blue-600">
//               <NavLink
//                 to="/signup"
//                 className={({ isActive }) =>
//                   isActive
//                     ? "text-blue-500"
//                     : "text-gray-600 hover:text-blue-500"
//                 }
//               >
//                 Signup
//               </NavLink>
//             </li>
//             <li className="cursor-pointer hover:text-blue-600">
//               <NavLink
//                 to="/support"
//                 className={({ isActive }) =>
//                   isActive
//                     ? "text-blue-500"
//                     : "text-gray-600 hover:text-blue-500"
//                 }
//               >
//                 Support
//               </NavLink>
//             </li>
//             <li className="cursor-pointer hover:text-blue-600">
//               <NavLink
//                 to="/product"
//                 className={({ isActive }) =>
//                   isActive
//                     ? "text-blue-500"
//                     : "text-gray-600 hover:text-blue-500"
//                 }
//               >
//                 Product
//               </NavLink>
//             </li>
//           </ul>
//         </div>

//         {/* section-2 */}
//         <button onClick={handleNav}>
//           {nav ? (
//             <IoCloseOutline size={35} className="text-[#5a5a53] md:hidden" />
//           ) : (
//             <HiOutlineMenu size={35} className="text-[#5a5a53] md:hidden" />
//           )}
//         </button>
//       </div>

//       {/* Mobile Navigation */}
//       {nav && (
//         <div className="fixed left-0 top-0 w-[60%] h-full bg-slate-100 text-start my-4 p-8 z-40">
//           <ul>
//             <li className="m-6 text-xl font-serif text-[#343434] cursor-pointer">
//               <NavLink
//                 to="/"
//                 className={({ isActive }) =>
//                   isActive
//                     ? "text-blue-500"
//                     : "text-gray-600 hover:text-blue-500"
//                 }
//               >
//                 Home
//               </NavLink>
//             </li>
//             <li className="m-6 text-xl font-serif text-[#343434] cursor-pointer">
//               <NavLink
//                 to="/about"
//                 className={({ isActive }) =>
//                   isActive
//                     ? "text-blue-500"
//                     : "text-gray-600 hover:text-blue-500"
//                 }
//               >
//                 About
//               </NavLink>
//             </li>
//             <li className="m-6 text-xl font-serif text-[#3f3a3a] cursor-pointer">
//               <NavLink
//                 to="/pricing"
//                 className={({ isActive }) =>
//                   isActive
//                     ? "text-blue-500"
//                     : "text-gray-600 hover:text-blue-500"
//                 }
//               >
//                 Price
//               </NavLink>
//             </li>

//             <li className="m-6 text-xl font-serif text-[#343434]  cursor-pointer">
//               <NavLink
//                 to="/signup"
//                 className={({ isActive }) =>
//                   isActive
//                     ? "text-blue-500"
//                     : "text-gray-600 hover:text-blue-500"
//                 }
//               >
//                 signup
//               </NavLink>
//             </li>
//             <li className="m-6 text-xl font-serif text-[#343434]  cursor-pointer">
//               <NavLink
//                 to="/support"
//                 className={({ isActive }) =>
//                   isActive
//                     ? "text-blue-500"
//                     : "text-gray-600 hover:text-blue-500"
//                 }
//               >
//                 support
//               </NavLink>
//             </li>
//             <li className="m-6 text-xl font-serif text-[#343434]  cursor-pointer">
//               <NavLink
//                 to="/product"
//                 className={({ isActive }) =>
//                   isActive
//                     ? "text-blue-500"
//                     : "text-gray-600 hover:text-blue-500"
//                 }
//               >
//                 Product
//               </NavLink>
//             </li>
//           </ul>
//         </div>
//       )}
//     </>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { HiOutlineMenu } from "react-icons/hi"; // Hamburger Menu Icon
import { IoCloseOutline } from "react-icons/io5"; // Close Icon
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      {/* Navbar Container */}
      <div className="w-full fixed top-0 left-0 z-50 bg-white shadow-md border-b-2 border-gray-200">
        <div className="flex justify-between items-center px-4 py-2 mr-[10%]">
          {/* Logo Section */}
          <div className="flex items-center gap-2">
            <img
              src="/Zerodhalogo.jpeg"
              alt="Zerodha Logo"
              className="w-[25px] h-[30px]"
            />
            <p className="uppercase text-blue-600 font-bold text-2xl">
              Zerodha
            </p>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex text-[#52534b] items-center gap-x-10 ">
            {["Home", "About", "Pricing", "Product", "Support", "Signup"].map(
              (item) => (
                <li key={item} className="cursor-pointer hover:text-blue-600">
                  <NavLink
                    // to={`/${item.toLowerCase()}`}
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className={({ isActive }) =>
                      isActive
                        ? "text-blue-500"
                        : "text-gray-600 hover:text-blue-500"
                    }
                  >
                    {item}
                  </NavLink>
                </li>
              )
            )}
          </ul>

          {/* Hamburger Menu */}
          <button onClick={handleNav} className="md:hidden">
            {nav ? (
              <IoCloseOutline size={35} className="text-[#5a5a53]" />
            ) : (
              <HiOutlineMenu size={35} className="text-[#5a5a53]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {nav && (
        <div className="fixed left-0 top-0 w-[60%] h-full bg-slate-100 z-40 text-start p-8 shadow-lg">
          <ul>
            {["Home", "About", "Pricing", "Product", "Support", "Signup"].map(
              (item) => (
                <li
                  key={item}
                  className="m-6 text-xl font-serif text-[#343434] cursor-pointer"
                >
                  <NavLink
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className={({ isActive }) =>
                      isActive
                        ? "text-blue-500"
                        : "text-gray-600 hover:text-blue-500"
                    }
                  >
                    {item}
                  </NavLink>
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
