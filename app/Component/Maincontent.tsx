"use client";
import React from "react";
import "./maincontents.css";
import "./navigations.css";
import "./sidebar.css";
import Image from "next/image";
import { useState } from "react";
const Maincontent = () => {
  const [classname, setclassname] = useState(false);
  const [gr1c1, setgr1c1] = useState(false);
  const [gr1c2, setgr1c2] = useState(false);
  const [gr1c3, setgr1c3] = useState(false);
  const [gr1c4, setgr1c4] = useState(false);
  const [gr1c5, setgr1c5] = useState(false);
  const [gr2c1, setgr2c1] = useState(false);
  const [gr2c2, setgr2c2] = useState(true);
  const [gr3c1, setgr3c1] = useState(false);
  const [gr3c2, setgr3c2] = useState(false);
  const [gr4c1, setgr4c1] = useState(false);
  const [hides, sethiding] = useState(true);

  const hiding = () => {
    sethiding(false);
  };
  const g1r1 = () => {
    setgr1c1(!gr1c1);
    setgr1c2(false);
    setgr1c3(false);
    setgr1c4(false);
    setgr1c5(false);
    setgr2c1(false);
    setgr2c2(false);
    setgr3c1(false);
    setgr3c2(false);
    setgr4c1(false);
    sethiding(true);
  };
  const g1r2 = () => {
    setgr1c1(false);
    setgr1c2(!gr1c2);
    setgr1c3(false);
    setgr1c4(false);
    setgr1c5(false);
    setgr2c1(false);
    setgr2c2(false);
    setgr3c1(false);
    setgr3c2(false);
    setgr4c1(false);
    sethiding(true);
  };
  const g1r3 = () => {
    setgr1c1(false);
    setgr1c2(false);
    setgr1c3(!gr1c3);
    setgr1c4(false);
    setgr1c5(false);
    setgr2c1(false);
    setgr2c2(false);
    setgr3c1(false);
    setgr3c2(false);
    setgr4c1(false);
    sethiding(true);
  };
  const g1r4 = () => {
    setgr1c1(false);
    setgr1c2(false);
    setgr1c3(false);
    setgr1c4(!gr1c4);
    setgr1c5(false);
    setgr2c1(false);
    setgr2c2(false);
    setgr3c1(false);
    setgr3c2(false);
    setgr4c1(false);
    sethiding(true);
  };
  const g1r5 = () => {
    setgr1c1(false);
    setgr1c2(false);
    setgr1c3(false);
    setgr1c4(false);
    setgr1c5(!gr1c5);
    setgr2c1(false);
    setgr2c2(false);
    setgr3c1(false);
    setgr3c2(false);
    setgr4c1(false);
    sethiding(true);
  };
  const g2r1 = () => {
    setgr1c1(false);
    setgr1c2(false);
    setgr1c3(false);
    setgr1c4(false);
    setgr1c5(false);
    setgr2c1(!gr2c1);
    setgr2c2(false);
    setgr3c1(false);
    setgr3c2(false);
    setgr4c1(false);
    sethiding(true);
  };
  const g2r2 = () => {
    setgr1c1(false);
    setgr1c2(false);
    setgr1c3(false);
    setgr1c4(false);
    setgr1c5(false);
    setgr2c1(false);
    setgr2c2(!gr2c2);
    setgr3c1(false);
    setgr3c2(false);
    setgr4c1(false);
    sethiding(true);
  };
  const g3r1 = () => {
    setgr1c1(false);
    setgr1c2(false);
    setgr1c3(false);
    setgr1c4(false);
    setgr1c5(false);
    setgr2c1(false);
    setgr2c2(false);
    setgr3c1(!gr3c1);
    setgr3c2(false);
    setgr4c1(false);
    sethiding(true);
  };
  const g3r2 = () => {
    setgr1c1(false);
    setgr1c2(false);
    setgr1c3(false);
    setgr1c4(false);
    setgr1c5(false);
    setgr2c1(false);
    setgr2c2(false);
    setgr3c1(false);
    setgr3c2(!gr3c2);
    setgr4c1(false);
    sethiding(true);
  };
  const g4r1 = () => {
    setgr1c1(false);
    setgr1c2(false);
    setgr1c3(false);
    setgr1c4(false);
    setgr1c5(false);
    setgr2c1(false);
    setgr2c2(false);
    setgr3c1(false);
    setgr3c2(false);
    setgr4c1(!gr4c1);
    sethiding(true);
  };

  return (
    <div className="main">
      <div className="content_nav">
        <div className="content_navlink">
          <ul className="content_ul">
            <li className="contentlink">
              <Image
                src="./tasks.svg"
                alt="button"
                className="contentLogo"
                width={50}
                height={50}
                priority
              />
              <p>List Tasks</p>
            </li>
            <li className="contentlink">
              <Image
                src="./dashboard.svg"
                alt="button"
                className="contentLogo"
                width={50}
                height={50}
                priority
              />
              <p>Boards</p>
            </li>
            <li className="contentlink">
              <Image
                src="./calendars.svg"
                alt="button"
                className="contentLogo"
                width={50}
                height={50}
                priority
              />
              <p>Calendar</p>
            </li>
            <li className="contentlink">
              <Image
                src="./gannt.svg"
                alt="button"
                className="contentLogo"
                width={50}
                height={50}
                priority
              />
              <p>Gantt</p>
            </li>
            <li className="contentlink">
              <Image
                src="./timeline.svg"
                alt="button"
                className="contentLogo"
                width={50}
                height={50}
                priority
              />
              <p>Timeline</p>
            </li>
            <li className="contentlink">
              <Image
                src="./activity.svg"
                alt="button"
                className="contentLogo"
                width={50}
                height={50}
                priority
              />
              <p>Activity</p>
            </li>
          </ul>
        </div>
        <div className="content_navesearch">
          <Image
            src="./searchicon.svg"
            alt="searchlogo"
            className="searchlogo"
            width={14}
            height={14}
            priority
          />
          <form action="">
            <input
              type="search"
              className="content_search"
              placeholder="search Tasks"
            />
          </form>
        </div>
      </div>
      <div className="contentgrid">
        <div className="congrid grid1">
          <div className="grid1card1 purple">
            <div className="cardleft">
              <div>
                <p className="cardtext">To Do</p>
                <Image
                  src="./five.svg"
                  alt="button"
                  className="cardLogo"
                  width={30}
                  height={30}
                  priority
                />
              </div>
            </div>
            <div className="cardright">
              <Image
                src="./dotes.svg"
                alt="button"
                className="cardLogo"
                width={30}
                height={30}
                priority
              />{" "}
              <Image
                src="./pluseicon.svg"
                alt="button"
                className="cardLogo"
                width={30}
                height={30}
                priority
              />
            </div>
          </div>
          <div className="grid1card2">
            <div className="cardimg">
              <Image
                src="./flowerimg.svg"
                alt="button"
                className="flowerimg"
                width={230}
                height={170}
                priority
              />
            </div>
            <div className="tasknum">
              <p>Space Tasks 2</p>
              <Image
                src="./Avatar9.svg"
                alt="button"
                className="avatarimg"
                width={20}
                height={20}
                priority
              />
            </div>
            <div className="moneytxtdiv">
              <p className="makemoneytxt">Make Money Online Through</p>
            </div>
            <div className="iconslist">
              <div>
                <Image
                  src="./preview.svg"
                  alt="Preview"
                  className="g2c2Logo"
                  width={18}
                  height={10}
                  priority
                />
                <span>4</span>
              </div>
              <div>
                <Image
                  src="./attachment.svg"
                  alt="attachementLogo"
                  className="g2c2Logo"
                  width={24}
                  height={29}
                  priority
                />
                <span>2</span>
              </div>

              <div>
                <Image
                  src="./alarmclock.svg"
                  alt="button"
                  className="g2c2Logo"
                  width={19.08}
                  height={19.79}
                  priority
                />
                <span>6 Days Left</span>
              </div>
            </div>
          </div>
          <div
            className={`grid1card3 ${gr1c1 ? "orangec3" : "c3"} `}
            onClick={g1r1}
          >
            <div className="g1c3sec1">
              <span>Space Tasks 2</span>
              <div>
                <Image
                  src="./avimg1.svg"
                  alt="ladypic"
                  className="g1c3img img1"
                  width={20}
                  height={20}
                  priority
                />
                <Image
                  src="./avimg2.svg"
                  alt="manpic"
                  className="g1c3img img2"
                  width={20}
                  height={20}
                  priority
                />
              </div>
            </div>
            <p className="makemoneytxt">Make Money Online Through</p>
          </div>
          <div
            className={`grid1card4 ${gr1c2 ? "orangec3" : "c3"} `}
            onClick={g1r2}
          >
            <div className="g1c3sec1">
              <span>Space Tasks 2</span>
              <div>
                <Image
                  src="./al1.svg"
                  alt="ladypic"
                  className="g1c3img img1"
                  width={20}
                  height={20}
                  priority
                />
                <Image
                  src="./al2.svg"
                  alt="ladypic"
                  className="g1c3img img2"
                  width={20}
                  height={20}
                  priority
                />
                <Image
                  src="./al3.svg"
                  alt="ladypic"
                  className="g1c3img img3"
                  width={20}
                  height={20}
                  priority
                />
              </div>
            </div>
            <p className="makemoneytxt">Make Money Online Through</p>
          </div>
          {/* grid1card5 */}
          <div
            className={`grid1card5 ${gr1c3 ? "orangec3" : "c3"} `}
            onClick={g1r3}
          >
            <div className="g1c3sec1">
              <span>Space Tasks 2</span>
              <div>
                <Image
                  src="./al4.svg"
                  alt="ladypic"
                  className="g1c3img img1"
                  width={20}
                  height={20}
                  priority
                />
              </div>
            </div>
            <p className="makemoneytxt">Make Money Online Through</p>
          </div>
          <div
            className={`grid1card6 ${gr1c4 ? "orangec3" : "c3"} `}
            onClick={g1r4}
          >
            <div className="g1c3sec1">
              <span>Space Tasks 2</span>
              <div>
                <Image
                  src="./al5.svg"
                  alt="ladypic"
                  className="g1c3img img1"
                  width={20}
                  height={20}
                  priority
                />
              </div>
            </div>
            <p className="makemoneytxt">Make Money Online Through</p>
          </div>
          <div
            className={`grid1card7 ${gr1c5 ? "orangec3" : "c3"} `}
            onClick={g1r5}
          >
            <div className="g1c3sec1">
              <span>Space Tasks 2</span>
              <div>
                <Image
                  src="./al6.svg"
                  alt="ladypic"
                  className="g1c3img img1"
                  width={20}
                  height={20}
                  priority
                />
              </div>
            </div>
            <p className="makemoneytxt">Make Money Online Through</p>
          </div>
          <div className="newtask">
            <span>+ NEW TASK</span>
          </div>
        </div>
        <div className="congrid grid2">
          <div className="grid1card1 tealblue">
            <div className="cardleft">
              <div>
                <p className="cardtext">In Work</p>
                <Image
                  src="./five.svg"
                  alt="button"
                  className="cardLogo"
                  width={30}
                  height={30}
                  priority
                />
              </div>
            </div>
            <div className="cardright">
              <Image
                src="./dotes.svg"
                alt="button"
                className="cardLogo"
                width={30}
                height={30}
                priority
              />{" "}
              <Image
                src="./pluseicon.svg"
                alt="button"
                className="cardLogo"
                width={30}
                height={30}
                priority
              />
            </div>
          </div>
          <div
            className={`grid1card7 c3update ${gr2c1 ? "orangec3" : "c3"} `}
            onClick={g2r1}
          >
            <div className="g1c3sec1">
              <span>Space Tasks 2</span>
              <div>
                <Image
                  src="./av21.svg"
                  alt="ladypic"
                  className="g1c3img img1"
                  width={20}
                  height={20}
                  priority
                />
              </div>
            </div>
            <p className="makemoneytxt">Types Of Paper In Catalog</p>
          </div>
          <div className="grid1card2">
            <div className="cardimg">
              <Image
                src="./resorts.svg"
                alt="button"
                className="flowerimg"
                width={230}
                height={170}
                priority
              />
            </div>
            <div className="tasknum">
              <p>Space Tasks 2</p>
              <Image
                src="./Avatar9.svg"
                alt="button"
                className="avatarimg"
                width={20}
                height={20}
                priority
              />
            </div>
            <div className="moneytxtdiv">
              <p className="makemoneytxt">Global Resorts Network</p>
            </div>
            <div className="iconslist">
              <div>
                <Image
                  src="./preview.svg"
                  alt="Preview"
                  className="g2c2Logo"
                  width={18}
                  height={10}
                  priority
                />
                <span>4</span>
              </div>
              <div>
                <Image
                  src="./attachment.svg"
                  alt="attachementLogo"
                  className="g2c2Logo"
                  width={24}
                  height={29}
                  priority
                />
                <span>2</span>
              </div>

              <div>
                <Image
                  src="./alarmclock.svg"
                  alt="button"
                  className="g2c2Logo"
                  width={19.08}
                  height={19.79}
                  priority
                />
                <span>6 Days Left</span>
              </div>
            </div>
          </div>
          <div
            className={`grid1card7 ${gr2c2 ? "orangec3" : "c3"} `}
            onClick={g2r2}
          >
            <div className="g1c3sec1">
              <span>Space Tasks 2</span>
              <div>
                <Image
                  src="./av23.svg"
                  alt="ladypic"
                  className="g1c3img img1"
                  width={20}
                  height={20}
                  priority
                />
              </div>
            </div>
            <p className="makemoneytxt">Development Apps</p>
          </div>
          <div className="grid1card7 bigc3 c3">
            <div className="g1c3sec1">
              <span>Space Tasks 2</span>
              <div>
                <Image
                  src="./av23.svg"
                  alt="ladypic"
                  className="g1c3img img1"
                  width={20}
                  height={20}
                  priority
                />
              </div>
            </div>
            <p className="makemoneytxt">Copper Canyon</p>
            <div className="iconslist">
              <div>
                <Image
                  src="./preview.svg"
                  alt="Preview"
                  className="g2c2Logo"
                  width={18}
                  height={10}
                  priority
                />
                <span>4</span>
              </div>
              <div>
                <Image
                  src="./attachment.svg"
                  alt="attachementLogo"
                  className="g2c2Logo"
                  width={24}
                  height={29}
                  priority
                />
                <span>2</span>
              </div>

              <div>
                <Image
                  src="./redclock.svg"
                  alt="button"
                  className="g2c2Logo"
                  width={19.08}
                  height={19.79}
                  priority
                />
                <span className="redspan">1 Days Left</span>
              </div>
            </div>
          </div>
          <div className="newtask">
            <span>+ NEW TASK</span>
          </div>
        </div>
        <div className="congrid grid3">
          <div className="grid1card1">
            <div className="cardleft">
              <div>
                <p className="cardtext">Review</p>
                <Image
                  src="./five.svg"
                  alt="button"
                  className="cardLogo"
                  width={30}
                  height={30}
                  priority
                />
              </div>
            </div>
            <div className="cardright">
              <Image
                src="./dotes.svg"
                alt="button"
                className="cardLogo"
                width={30}
                height={30}
                priority
              />{" "}
              <Image
                src="./pluseicon.svg"
                alt="button"
                className="cardLogo"
                width={30}
                height={30}
                priority
              />
            </div>
          </div>
          <div
            className={`grid1card7 c3update ${gr3c1 ? "orangec3" : "c3"} `}
            onClick={g3r1}
          >
            <div className="g1c3sec1">
              <span>Space Tasks 2</span>
              <div>
                <Image
                  src="./av31.svg"
                  alt="ladypic"
                  className="g1c3img img1"
                  width={20}
                  height={20}
                  priority
                />
              </div>
            </div>
            <p className="makemoneytxt">Astronomy Of Astrology</p>
          </div>
          <div
            className={`grid1card7 ${gr3c2 ? "orangec3" : "c3"} `}
            onClick={g3r2}
          >
            <div className="g1c3sec1">
              <span>Space Tasks 2</span>
              <div>
                <Image
                  src="./av23.svg"
                  alt="ladypic"
                  className="g1c3img img1"
                  width={20}
                  height={20}
                  priority
                />
              </div>
            </div>
            <p className="makemoneytxt">Astronomy Binoculars A Great</p>
          </div>
          <div className="grid1card7 c3">
            <div className="g1c3sec1">
              <div>
                <Image
                  src="./rcross.svg"
                  alt="ladypic"
                  className="rcross"
                  width={13.19}
                  height={13.18}
                  priority
                />
              </div>
              <span className="secondary_font">Task name or type</span>
              <div>
                <Image
                  src="./av33.svg"
                  alt="ladypic"
                  className="g1c3img img1"
                  width={20}
                  height={20}
                  priority
                />
              </div>
            </div>
            <div className="iconslist">
              <div className="g3c4">
                <div>
                  <Image
                    src="./flag.svg"
                    alt="Preview"
                    className="g2c2Logo"
                    width={15}
                    height={17}
                    priority
                  />
                </div>
                <div>
                  <Image
                    src="./attachment.svg"
                    alt="attachementLogo"
                    className="g2c2Logo"
                    width={24}
                    height={29}
                    priority
                  />
                </div>

                <div>
                  <Image
                    src="./watch.svg"
                    alt="button"
                    className="g2c2Logo"
                    width={20}
                    height={20}
                    priority
                  />
                </div>
              </div>

              <div className="btndiv">
                <button className="savebtn">Save</button>
              </div>
            </div>
          </div>
          {/* adding */}
          <div
            className={`${
              (gr1c1 ||
                gr1c2 ||
                gr1c3 ||
                gr1c4 ||
                gr1c5 ||
                gr2c1 ||
                gr2c2 ||
                gr3c1 ||
                gr3c2 ||
                gr4c1) &&
              hides
                ? "commondiv"
                : "hide"
            }`}
          >
            <div className="commondivsec1">
              <div className="topsec">
                <ul>
                  <li>
                    <span>
                      {gr2c1
                        ? "Types Of Paper"
                        : gr2c2
                        ? "Development Apps"
                        : gr3c1
                        ? "Astronomy Of Astrology"
                        : gr3c2
                        ? "Astronomy Binoculars"
                        : gr4c1
                        ? "Copper Canyon"
                        : "Make Money Online"}
                    </span>
                  </li>
                </ul>
                <Image
                  src="./cicon.svg"
                  alt="ladypic"
                  className="g1c3img img1"
                  width={20}
                  height={20}
                  priority
                />
              </div>
              <div>
                <Image
                  src="./rcross.svg"
                  alt="ladypic"
                  className="g1c3img img1"
                  width={20}
                  height={20}
                  priority
                  onClick={hiding}
                />
              </div>
            </div>
            <div className="commondivsec2">
              <div className="comdivflexclass">
                <div>
                  <Image
                    src="./dirarrow.svg"
                    alt="ladypic"
                    className="commondivlogo"
                    width={14.58}
                    height={16.58}
                    priority
                  />
                  <p>4 Subtasks</p>
                </div>
              </div>
              <div className="comdivflexclass">
                <div>
                  <Image
                    src="./flag.svg"
                    alt="ladypic"
                    className="commondivlogo"
                    width={15}
                    height={17}
                    priority
                  />
                  <p>Priority Enabled</p>
                </div>
              </div>
              <div className="comdivflexclass">
                <div>
                  <Image
                    src="./file.svg"
                    alt="ladypic"
                    className="commondivlogo"
                    width={24}
                    height={17}
                    priority
                  />
                  <p>3 Files</p>
                </div>
              </div>
              <div className="comdivflexclass">
                <div>
                  <Image
                    src="./comment.svg"
                    alt="ladypic"
                    className="commondivlogo"
                    width={20}
                    height={20}
                    priority
                  />
                  <p>7 Comments</p>
                </div>
              </div>
              <div className="comdivflexclass">
                <div>
                  <Image
                    src="./av23.svg"
                    alt="ladypic"
                    className="tylerimgs"
                    width={30}
                    height={30}
                    priority
                  />
                  <p>Tyler Norman</p>
                </div>
              </div>
            </div>
            <div className="commondivsec3">
              <div className="bottomsec1">
                <div className="bottomsec31">
                  <p className="lightcolor">START DATE</p>
                  <p className="medium-size">Sep 3,9:00 pm</p>
                </div>
                <div className="bottomsec33">
                  <Image
                    src="./gtarrow.svg"
                    alt="ladypic"
                    className="gtarrow"
                    width={7}
                    height={12}
                    priority
                  />
                </div>
                <div className="bottomsec32">
                  <p className="lightcolor">DUE DATE</p>
                  <p className="medium-size">Sep 4,9:00 pm</p>
                </div>
              </div>

              <div className="bottomsec2">
                <Image
                  src="./playbtn.svg"
                  alt="ladypic"
                  className="playbtnimg"
                  width={60}
                  height={60}
                  priority
                />
                <span className="videoplaytime">0:00</span>
              </div>
            </div>
          </div>
          {/* adding🔚  */}
        </div>
        <div className="congrid grid4">
          <div className="grid1card1 green">
            <div className="cardleft">
              <div>
                <p className="cardtext">Done</p>
                <Image
                  src="./five.svg"
                  alt="button"
                  className="cardLogo"
                  width={30}
                  height={30}
                  priority
                />
              </div>
            </div>
            <div className="cardright">
              <Image
                src="./dotes.svg"
                alt="button"
                className="cardLogo"
                width={30}
                height={30}
                priority
              />{" "}
              <Image
                src="./pluseicon.svg"
                alt="button"
                className="cardLogo"
                width={30}
                height={30}
                priority
              />
            </div>
          </div>
          <div
            className={`grid1card7 c3update ${gr4c1 ? "orangec3" : "c3"} `}
            onClick={g4r1}
          >
            <div className="g1c3sec1">
              <span>Space Tasks 2</span>
              <div>
                <Image
                  src="./av23.svg"
                  alt="ladypic"
                  className="g1c3img img1"
                  width={20}
                  height={20}
                  priority
                />
              </div>
            </div>
            <p className="makemoneytxt">Copper Canyon</p>
          </div>
        </div>

        {/* commondiv */}
        {/* <div
          className={`${
            (gr1c1 ||
              gr1c2 ||
              gr1c3 ||
              gr1c4 ||
              gr1c5 ||
              gr2c1 ||
              gr2c2 ||
              gr3c1 ||
              gr3c2 ||
              gr4c1) &&
            hides
              ? "commondiv"
              : "hide"
          }`}
        >
          <div className="commondivsec1">
            <div className="topsec">
              <ul>
                <li>
                  <span>
                    {gr2c1
                      ? "Types Of Paper"
                      : gr2c2
                      ? "Development Apps"
                      : gr3c1
                      ? "Astronomy Of Astrology"
                      : gr3c2
                      ? "Astronomy Binoculars"
                      : gr4c1
                      ? "Copper Canyon"
                      : "Make Money Online"}
                  </span>
                </li>
              </ul>
              <Image
                src="./cicon.svg"
                alt="ladypic"
                className="g1c3img img1"
                width={20}
                height={20}
                priority
              />
            </div>
            <div>
              <Image
                src="./rcross.svg"
                alt="ladypic"
                className="g1c3img img1"
                width={20}
                height={20}
                priority
                onClick={hiding}
              />
            </div>
          </div>
          <div className="commondivsec2">
            <div className="comdivflexclass">
              <div>
                <Image
                  src="./dirarrow.svg"
                  alt="ladypic"
                  className="commondivlogo"
                  width={14.58}
                  height={16.58}
                  priority
                />
                <p>4 Subtasks</p>
              </div>
            </div>
            <div className="comdivflexclass">
              <div>
                <Image
                  src="./flag.svg"
                  alt="ladypic"
                  className="commondivlogo"
                  width={15}
                  height={17}
                  priority
                />
                <p>Priority Enabled</p>
              </div>
            </div>
            <div className="comdivflexclass">
              <div>
                <Image
                  src="./file.svg"
                  alt="ladypic"
                  className="commondivlogo"
                  width={24}
                  height={17}
                  priority
                />
                <p>3 Files</p>
              </div>
            </div>
            <div className="comdivflexclass">
              <div>
                <Image
                  src="./comment.svg"
                  alt="ladypic"
                  className="commondivlogo"
                  width={20}
                  height={20}
                  priority
                />
                <p>7 Comments</p>
              </div>
            </div>
            <div className="comdivflexclass">
              <div>
                <Image
                  src="./av23.svg"
                  alt="ladypic"
                  className="tylerimgs"
                  width={30}
                  height={30}
                  priority
                />
                <p>Tyler Norman</p>
              </div>
            </div>
          </div>
          <div className="commondivsec3">
            <div className="bottomsec1">
              <div className="bottomsec31">
                <p className="lightcolor">START DATE</p>
                <p className="medium-size">Sep 3,9:00 pm</p>
              </div>
              <div className="bottomsec33">
                <Image
                  src="./gtarrow.svg"
                  alt="ladypic"
                  className="gtarrow"
                  width={7}
                  height={12}
                  priority
                />
              </div>
              <div className="bottomsec32">
                <p className="lightcolor">DUE DATE</p>
                <p className="medium-size">Sep 4,9:00 pm</p>
              </div>
            </div>

            <div className="bottomsec2">
              <Image
                src="./playbtn.svg"
                alt="ladypic"
                className="playbtnimg"
                width={60}
                height={60}
                priority
              />
              <span className="videoplaytime">0:00</span>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Maincontent;
