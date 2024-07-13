import React from "react";
import Logo from "../../Images/Logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
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
    <div className=" bg-black  flex items-center p-4 ">
      <Link to="/" className=" pl-14">
        <img src={Logo} width={140} alt="Citizen Care Group" />
      </Link>
      <div className=" flex w-full justify-between px-10">
        <div className=" flex gap-4">
          {/* left div for the  navigation */}
          {leftNavData.map((item, index) => (
            <Link key={index} to={item.nav} className=" text-white">
              {" "}
              {item.data}{" "}
            </Link>
          ))}
        </div>
        {/* right div for the CTA section  */}

        <div className=" flex gap-4">
          {/* left div for the  navigation */}
          {rightNavData.map((item, index) =>
            item.data === "Schedule a Visit" ? (
              <Link key={index} to={item.nav} className=" text-customGreen">
                {item.data}{" "}
              </Link>
            ) : (
              <Link key={index} to={item.nav} className=" text-white">
                {" "}
                {item.data}{" "}
              </Link>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
