import { useState } from "react";
import Link from "next/link";

import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import useStickyHeader from "../../header/StickyHeader";
import NotificationData from "../../../data/dashboard/notification-data.json";
import CreateNewButton from "../../header/CreateNewButton";

const ProjectHeader = () => {
  const BrandLogo = "img/core-img/dashboard-logo.png";

  let [check] = useState(true);
  const sticky = useStickyHeader(10);
  const stickyClass = `${sticky && check ? "sticky-on" : ""}`;

  const userDropdownData = [
    {
      path: "/dashboard",
      icon: "bi-person-circle",
      text: "Dashboard",
    },
    {
      path: "/live-bids",
      icon: "bi-hammer",
      text: "My bids",
    },
    {
      path: "/my-collection",
      icon: "bi-collection",
      text: "Collection",
    },
    {
      path: "/",
      icon: "bi-gear",
      text: "Settings",
    },
    {
      path: "/logged-out",
      icon: "bi-door-closed-fill",
      text: "Log out",
    },
  ];

  const userInfo = [
    {
      thumbnail: "img/bg-img/u2.jpg",
      username: "Designing W.",
      userType: "Premium User",
    },
  ];

  const balanceCard = [
    {
      title: "Current balance",
      icon: "img/core-img/ethereum.png",
      balance: 4.0678,
      balanceType: "$",
    },
  ];

  const AdminNav = [
    {
      id: 0,
      path: "/",
      icon: "bi-folder",
      text: "My Project A",
    },
    {
      id: 1,
      path: "/",
      icon: "bi-folder",
      text: "RFP",
      innerArr: [
        {
          id: 0,
          path: "/",
          icon: "bi-image",
          text: "Active",
        },
        {
          id: 1,
          path: "/",
          icon: "bi-image",
          text: "Draft",
        },
      ],
    },
    {
      id: 2,
      path: "/",
      icon: "bi-folder",
      text: "Contracts",
      innerArr: [
        {
          id: 0,
          path: "/",
          icon: "bi-image",
          text: "Issued",
        },
        {
          id: 1,
          path: "/",
          icon: "bi-image",
          text: "Expired",
        },
        {
          id: 2,
          path: "/",
          icon: "bi-image",
          text: "Released",
        },
        {
          id: 3,
          path: "/",
          icon: "bi-image",
          text: "Dispute",
        },
      ],
    },
    { id: 3, path: "/", icon: "bi-folder", text: "Voting" },
    { id: 4, path: "/", icon: "bi-folder", text: "NFT" },
    { id: 4, path: "/", icon: "bi-star", text: "Important" },
    { id: 5, path: "/", icon: "bi-clock", text: "Recents" },
    { id: 6, path: "/", icon: "bi-trash", text: "Deleted" },
  ];

  const AdminNav2 = [
    {
      id: 0,
      path: "/",
      icon: "bi-file",
      text: "Documents",
    },
    { id: 1, path: "/", icon: "bi-image", text: "Images" },
    { id: 3, path: "/", icon: "bi-camera-video", text: "Videos" },
    { id: 4, path: "/", icon: "bi-music-note", text: "Music" },
    { id: 5, path: "/", icon: "bi-layers", text: "Archive Files" },
  ];

  return (
    <>
      <div
        className={`admin-projects-sidebar-wrap ${
          true ? "sidebar-active" : "sidebar-disabled"
        }`}
      >
        <div className="overflowY-scroll">
          {/* User Profile */}

          {/* Sidenav */}
          <div className="sidenav">
            <ul>
              <div style={{ marginBottom: 32 }}>
                <CreateNewButton
                  buttonText={"Create New Project"}
                  buttonColor={"btn-yellow"}
                  buttonURL={"/create"}
                />
              </div>
              {AdminNav.map((elem, index) => (
                <>
                  <li key={index} style={{ marginBottom: 16 }}>
                    <Link href={elem.path}>
                      <i className={`bi ${elem.icon}`} />
                      {elem.text}
                    </Link>
                  </li>
                  <ul style={{ marginLeft: 16, marginTop: 0 }}>
                    {elem?.innerArr?.map((elem, ind) => (
                      <li key={ind} style={{ marginBottom: 10 }}>
                        <Link href={elem.path} style={{ marginBottom: 0 }}>
                          <i className={`bi ${elem.icon}`} />
                          {elem.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              ))}

              <li>DECENTRALIZED ASSETS</li>
              {AdminNav2.map((elem, index) => (
                <li key={index} style={{ marginBottom: 16 }}>
                  <Link href={elem.path}>
                    <i className={`bi ${elem.icon}`} />
                    {elem.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectHeader;
