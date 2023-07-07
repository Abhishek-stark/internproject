import React from "react";
import Image from "next/image";
import "./sidebar.css";
import "./navigations.css";
const Sidebar = () => {
  return (
    <div className="sidebar_container">
      <div className="sidebar">
        <div className="sidebar_icon">
          <div>
            <Image
              src="./man.svg"
              alt="button"
              className="sidebarLogo"
              width={50}
              height={50}
              priority
            />
          </div>
          <div>
            <Image
              src="./tripledot.svg"
              alt="button"
              className="sidebarLogo"
              width={50}
              height={50}
              priority
            />
          </div>
        </div>
        <div className="alfredsec">
          <div>
            <Image
              src="./alfred.svg"
              alt="button"
              className="alfredLogo"
              width={50}
              height={50}
              priority
            />
          </div>
          <div className="alfred">Hello Alfred</div>
          <div className="alfredid">alfred@gmail.com</div>
        </div>
        <div className="tablesec">
          <div className="detailsec dashboardlogo">
            <Image
              src="./dashboard.svg"
              alt="button"
              className="tablesecLogo"
              width={50}
              height={50}
              priority
            />
            <p>Dashboard</p>
          </div>
          <div className="detailsec notessec">
            <Image
              src="./notes.svg"
              alt="button"
              className="tablesecLogo"
              width={50}
              height={50}
              priority
            />
            <p>Notes</p>
          </div>
          <div className="detailsec">
            <Image
              src="./tasks.svg"
              alt="button"
              className="tablesecLogo"
              width={50}
              height={50}
              priority
            />
            <p>Tasks</p>
          </div>
          <div className="detailsec">
            <Image
              src="./cloud.svg"
              alt="button"
              className="tablesecLogo"
              width={50}
              height={50}
              priority
            />
            <p>Files</p>
          </div>
          <div className="detailsec">
            <Image
              src="./email.svg"
              alt="button"
              className="tablesecLogo"
              width={50}
              height={50}
              priority
            />
            <p>Emails</p>
          </div>
          <div className="detailsec">
            <Image
              src="./group.svg"
              alt="button"
              className="tablesecLogo"
              width={50}
              height={50}
              priority
            />
            <p>Clients</p>
          </div>
          <div className="detailsec">
            <Image
              src="./calendars.svg"
              alt="button"
              className="tablesecLogo"
              width={50}
              height={50}
              priority
            />
            <p>Calendars</p>
          </div>
          <div className="detailsec settinglogo">
            <Image
              src="./setting.svg"
              alt="button"
              className="tablesecLogo"
              width={50}
              height={50}
              priority
            />
            <p>Setting</p>
          </div>
        </div>
        <div className="social">
          <div>
            <Image
              src="./local_phone.svg"
              alt="button"
              className="socialLogo"
              width={50}
              height={50}
              priority
            />
          </div>
          <div>
            <Image
              src="./mail.svg"
              alt="button"
              className="socialLogo"
              width={50}
              height={50}
              priority
            />
          </div>
          <div>
            <Image
              src="./chrome_reader_mode.svg"
              alt="button"
              className="socialLogo"
              width={50}
              height={50}
              priority
            />
          </div>
          <div>
            {" "}
            <Image
              src="./ic_telegram.svg"
              alt="button"
              className="socialLogo"
              width={50}
              height={50}
              priority
            />
          </div>
          <div>
            <Image
              src="./ic_whatsapp.svg"
              alt="button"
              className="socialLogo"
              width={50}
              height={50}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
