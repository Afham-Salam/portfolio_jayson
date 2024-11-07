import React, { useState } from "react";
import { navitems } from "../utils/data";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <div className="w-full h-[70px] bg-[#333647] fixed flex justify-between items-center px-3 py-3 md:px-8 md:py-4 z-50">
        <div className="flex gap-5 md:gap-10 justify-center items-center">
          <div className="block lg:hidden">

            
            <button onClick={toggleMenu} aria-label="toggle menu">
            {menuOpen?
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                   d="M6 6l12 12M6 18L18 6"
                 
                />
              </svg>
            : <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                   d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
              }
              </button>
          </div>

          <div className="text-white text-[25px] navbarTitle">
            <p>Jayson Das</p>
          </div>
        </div>

        <div className="hidden lg:flex gap-8 items-center">
          <ul className="flex gap-8">
            {navitems.map((item, index) => (
              <a href={item.path}><li className="text-white  hover:text-[#df4b22] tracking-wide" key={index}>
              {item.name}
            </li></a>
            ))}
          </ul>

          <a href="#contact"><button className="text-white bg-[#df4b22] hover:bg-[#d85430db] rounded-md py-2 px-3">
            Contact Me
          </button></a>
        </div>

        <div className="lg:hidden">
          <button className="text-white bg-[#df4b22] hover:bg-[#d85430db] rounded-md py-2 px-3">
            Contact Me
          </button>
        </div>
      </div>

      {/* Mobile menu - toggle on small and medium screens */}
      {menuOpen && (
        <div
          className={`lg:hidden bg-[#333647] text-white p-4 transition-transform duration-500  ease-[cubic-bezier(0.25, 0.8, 0.25, 1)] fixed w-full ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          } top-[70px] z-10`}
        >
          
          <ul className="flex flex-col gap-5 tracking-tight">
            {navitems.map((item, index) => (
             <a  href={item.path}> <li
             className="text-white tracking-wider "
             key={index}
             onClick={toggleMenu}
           >
             {item.name}
           </li></a>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
