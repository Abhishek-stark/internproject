"use client";
import React from "react";
// import { useState } from "react";
import "./pagecontainer.css";
import Image from "next/image";
import { Roboto } from "next/font/google";
import "./Component/Navigation";
import Navigation from "./Component/Navigation";
import Sidebar from "./Component/Sidebar";
import Maincontent from "./Component/Maincontent";
const roboto = Roboto({
  weight: "700",
  subsets: ["latin"],
});
const page = () => {
  // const [classprop, seteclassprop] = useState(true);

  let propsvaulue = true;
  let classprop = propsvaulue;
  const sendprops = () => {
    classprop = !propsvaulue;
  };
  return (
    <div className="pagecontainer">
      <div className="container">
        <div className="navbar">
          <ul className="ul_container">
            <li className="ul_li1">
              <button className="menubtn">
                <Image
                  src="./button.svg"
                  alt="button"
                  className="vercelLogo"
                  width={50}
                  height={50}
                  priority
                  onClick={sendprops}
                />
              </button>
            </li>

            <li className="ul_li2">
              <h4 className={roboto.className}>Constructor</h4>
            </li>
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
    </div>
  );
};

export default page;
