"use client";
import React from "react";
import { useState } from "react";
import "./pagecontainer.css";
import Image from "next/image";
import { Roboto } from "next/font/google";
import "./Component/Navigation";
import Navigation from "./Component/Navigation";
("use client");
import Navbar from "./Component/Navbar";
const page = () => {
  return (
    <div className="pagecontainer">
      <Navbar />
    </div>
  );
};

export default page;
