import React, { useState } from "react";
import Logo from "../../Images/Logo.png";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Importing icons for hamburger menu

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const leftNavData = [
    { data: "Our Products", nav: "/products" },
    { data: "Brochure", nav: "/brochure" },
    { data: "Dealer form", nav: "/dealerForm" },
  ];
  const rightNavData = [
    { data: "Locate Us", nav: "/products" },
    { data: "About Us", nav: "/brochure" },
    { data: "Schedule a Visit", nav: "/dealerForm" },
  ];

  return (
    <div className="bg-black flex items-center p-4">
      <Link to="/" className="pl-4 md:pl-14">
        <img src={Logo} width={140} alt="Citizen Care Group" />
      </Link>
      <div className="flex w-full justify-end lg:justify-between items-end px-4 md:px-10">
        <div className="hidden md:flex gap-4">
          {/* left div for the navigation */}
          {leftNavData.map((item, index) => (
            <Link key={index} to={item.nav} className="text-white">
              {item.data}
            </Link>
          ))}
        </div>
        {/* right div for the CTA section */}
        <div className="hidden md:flex gap-4">
          {rightNavData.map((item, index) =>
            item.data === "Schedule a Visit" ? (
              <Link key={index} to={item.nav} className="text-customGreen">
                {item.data}
              </Link>
            ) : (
              <Link key={index} to={item.nav} className="text-white">
                {item.data}
              </Link>
            )
          )}
        </div>
        {/* Hamburger menu icon */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute z-10 top-16 left-0 w-full bg-black p-4">
          <div className="flex flex-col gap-4">
            {leftNavData.map((item, index) => (
              <Link key={index} to={item.nav} className="text-white">
                {item.data}
              </Link>
            ))}
            {rightNavData.map((item, index) =>
              item.data === "Schedule a Visit" ? (
                <Link key={index} to={item.nav} className="text-customGreen">
                  {item.data}
                </Link>
              ) : (
                <Link key={index} to={item.nav} className="text-white">
                  {item.data}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
