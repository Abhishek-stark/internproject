"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import "./../pagecontainer.css";
import Navigation from "./Navigation";
import Sidebar from "./Sidebar";
import Maincontent from "./Maincontent";
const Navbar = () => {
  const [classprop, seteclassprop] = useState(true);

  const sendprops = () => {
    seteclassprop(!classprop);
  };
  return (
    <div className="container">
      <div className="navbar">
        <ul className="ul_container">
          <li className="ul_li1">
            <Image
              src="./Button.svg"
              alt="button"
              className="vercelLogo"
              width={50}
              height={50}
              priority
              onClick={sendprops}
            />
          </li>

          <li className="ul_li2 lic">Constructor</li>
          <li className="ul_li3">Dashboard</li>
          <li className="ul_li3">About Us</li>
          <li className="ul_li3">News</li>
          <li className="ul_li3">user Policy</li>
          <li className="ul_li3">Contacts</li>
          <li className="ul_li3">...</li>
          <li className="ul_li9">
            <Image
              src="./searchicon.svg"
              alt="button"
              className="navsearchicon"
              width={18}
              height={18}
              priority
            />
            <form action="">
              <input
                type="search"
                placeholder="Search Products,Orders and clients"
              />
            </form>
            <Image
              src="./gtarrow.svg"
              alt="button"
              className="gtarrowicon"
              width={7}
              height={12}
              priority
            />
          </li>
          <li>
            <Image
              src="./account_circle.svg"
              alt="button"
              className="vercelLogo"
              width={50}
              height={50}
              priority
            />
          </li>
          <li className="ul_li3">Clayton Santos</li>
          <li className="ul_li11">
            {" "}
            <Image
              src="./alarm.svg"
              alt="button"
              className="vercelLogo"
              width={50}
              height={50}
              priority
            />
          </li>
          <li className="ul_li12">
            {" "}
            <Image
              src="./cross.svg"
              alt="button"
              className="vercelLogo"
              width={50}
              height={50}
              priority
            />
          </li>
        </ul>
      </div>
      <div className={`${classprop ? "mainsection" : "changedmainsection"}`}>
        <Navigation classpasses={classprop} />
        <Sidebar />
        <Maincontent />
      </div>
    </div>
  );
};

export default Navbar;
