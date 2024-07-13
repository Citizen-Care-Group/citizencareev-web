import React from "react";
import Logo from "../../Images/Logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const scooterFooterData = [
    {
      title: "Scooters",
      subLinks: [
        {
          subItem: "Smart Energy",
          SubItemNavigation: "/",
        },
        {
          subItem: "Smart Prime",
          SubItemNavigation: "/",
        },
        {
          subItem: "Smart Power",
          SubItemNavigation: "/",
        },
        {
          subItem: "Electric Power",
          SubItemNavigation: "/",
        },
        {
          subItem: "Electric Force",
          SubItemNavigation: "/",
        },
      ],
    },
  ];
  console.log(scooterFooterData);
  return (
    <div className=" w-full flex p-10 bg-black text-white">
      <div className=" w-[50%]">
        <img src={Logo} width={160} alt="" />
        <p className=" text-left">
          Citizen Care EV are the new buzz word when it comes to the world of
          automotive. With fossil fuel reserves running out and pollution levels
          increasing to dangerous levels, an alternative to internal combustion
          engines is the need of the hour.
        </p>
        <div>Social Links</div>
      </div>
      <div className=" flex justify-around">
        <div>
          {scooterFooterData.map((item, index) => {
            return (
              <div className=" text-left" key={index}>
                {<h1 className=" my-6"> {item.title} </h1>}
                <div className="flex flex-col gap-3 text-left">
                  {item?.subLinks?.map((subItem) => {
                    return (
                      <Link key={subItem} to={subItem?.SubItemNavigation}>
                        {" "}
                        {subItem.subItem}{" "}
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        <div className=" w-[30%] text-left flex gap-3 flex-col">
                  <h1 className=" my-6"> Contact</h1>
                  <p>Citizen Care Group, 159A, Behind IndusInd Bank, New Patliputra, Patna-, 800013.</p>

                  {/* to add a link to email */}
                  <a href="/">info@citizencareev.com</a>
                  {/* to add link to mobile contact  auto contact */}
                  <a href="/">9608 555 514</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
