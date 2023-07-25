import { useState } from "react";
import Link from "next/link";

import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import useStickyHeader from "../../header/StickyHeader";
import NotificationData from "../../../data/dashboard/notification-data.json";
import Dashboard from "../../../../assets/icons/dashboard.png";
// import Dashboard from "../../../assets/icons/dashboard.png";
import Setting from "../../../../assets/icons/setting.png";
import Wallet from "../../../../assets/icons/wallet.png";
import Scan from "../../../../assets/icons/scan.png";
import Home from "../../../../assets/icons/home.png";
import Rfp from "../../../../assets/icons/Rfp.png";
import Contract from "../../../../assets/icons/contract.png";
import Project from "../../../../assets/icons/project.png";

const DashboardHeader = () => {
  const BrandLogo = "img/core-img/logo.png";

  let [check] = useState(true);
  const sticky = useStickyHeader(10);
  const stickyClass = `${sticky && check ? "sticky-on" : ""}`;
  const [createProject, setCreateProject] = useState(false);

  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
  };

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
      path: "/settings",
      icon: "bi-gear",
      text: "Settings",
    },
    {
      path: "/logged-out",
      icon: "bi-door-closed-fill",
      text: "Log out",
    },
  ];

  const DashboardNav = [
    // {
    //   id: 0,
    //   path: "/create",
    //   icon: "bi-image",
    //   text: "New Escrow Contract",

    // },
    {
      id: 1,
      path: "/projects",
      icon: "bi-image",
      text: "Projects",
      innerArr: [
        // {
        //   id: 0,
        //   path: "/soon",
        //   text: "4 Downhaven St",
        // },
        // {
        //   id: 1,
        //   path: "/soon",
        //   text: "BitRegalo Development",
        // },
        // {
        //   id: 2,
        //   path: "/soon",
        //   text: "Xyz",
        // },
        {
          id: 3,
          path: "/createrfp",
          text: "Create Project",
          icon: "bi-image",
        },
      ],
    },
    {
      id: 2,
      path: "/",
      icon: "bi-wallet2",
      text: "RFP",
      innerArr: [
        {
          id: 0,
          path: "/createrfp",
          icon: "bi-image",
          text: "Create RFP",
        },
        // {
        //   id: 1,
        //   path: "/createrfp",
        //   icon: "bi-image",
        //   text: "View Tenders",
        // },
        // {
        //   id: 2,
        //   icon: "bi-image",
        //   text: "Chat",
        //   path: "/soon",
        // },
      ],
    },
    // {
    //   id: 3,
    //   path: "/soon",
    //   icon: "bi-image",
    //   text: "Contracts",
    //   innerArr: [
    //     {
    //       id: 0,
    //       path: "/soon",
    //       text: "Related to project",
    //     },
    //     {
    //       id: 1,
    //       path: "/soon",
    //       text: "Active",
    //     },
    //     {
    //       id: 2,
    //       path: "/soon",
    //       text: "Xyz",
    //     },
    //     {
    //       id: 3,
    //       path: "/soon",
    //       text: "Create Users list",
    //     },
    //   ],
    // },

    {
      id: 6,
      path: "/projects",
      icon: "bi-image",
      text: "Escrow Contracts",
      innerArr: [
        // {
        //   id: 0,
        //   path: "/soon",
        //   text: "4 Downhaven St",
        // },
        // {
        //   id: 1,
        //   path: "/soon",
        //   text: "BitRegalo Development",
        // },
        // {
        //   id: 2,
        //   path: "/soon",
        //   text: "Xyz",
        // },
        {
          id: 3,
          path: "/create",
          text: "Create Escrow",
          icon: "bi-image",
        },
      ],
    },
    {
      id: 5,
      path: "/my-wallet",
      icon: "bi-wallet2",
      text: "E-Wallet",
      // innerArr: [
      //   {
      //     id: 0,
      //     path: "/my-wallet",
      //     text: "E-Wallet",
      //     icon: "bi-wallet2",
      //   },
      //   {
      //     id: 1,
      //     path: "/my-wallet",
      //     text: "Withdrawal",
      //     icon: "bi-wallet2",
      //   },
      // ],
    },

    {
      id: 7,
      path: "/",
      icon: "bi-gear",
      text: "Settings",
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
      icon: Home,
      text: "Home",
    },
    // {
    //   id: 1,
    //   path: "/rfq",
    //   icon: "bi-wallet2",
    //   text: "RFQ",
    //   innerArr: [
    //     {
    //       id: 0,
    //       path: "/createrfp",
    //       icon: "bi-wallet2",
    //       text: "Create Project",
    //     },
    //   ],
    // },

    {
      id: 1,
      path: "/projects",
      icon: Project,
      text: "Create",
      innerArr: [
        // {
        //   id: 0,
        //   path: "/soon",
        //   text: "4 Downhaven St",
        // },
        // {
        //   id: 1,
        //   path: "/soon",
        //   text: "BitRegalo Development",
        // },
        // {
        //   id: 2,
        //   path: "/soon",
        //   text: "Xyz",
        // },
        {
          id: 1,
          path: "/createrfp",
          text: "Create Project",
          // icon: "bi-image",
        },
        {
          id: 2,
          path: "/create",
          text: "Create RFP",
          // icon: "bi-image",
        },
        {
          id: 3,
          path: "/create",
          text: "Create Escrow",
          // icon: "bi-image",
        },
      ],
    },
    {
      id: 2,
      path: "/dashboard",
      icon: Dashboard,
      text: "Dashboard",
      // innerArr: DashboardNav,
    },
    {
      id: 4,
      path: "/rfp",
      icon: Rfp,
      text: "RFP",
      // innerArr: [
      //   {
      //     id: 0,
      //     path: "/createrfp",
      //     icon: "bi-image",
      //     text: "Create RFP",
      //   },
      //   // {
      //   //   id: 1,
      //   //   path: "/createrfp",
      //   //   icon: "bi-image",
      //   //   text: "View Tenders",
      //   // },
      //   // {
      //   //   id: 2,
      //   //   icon: "bi-image",
      //   //   text: "Chat",
      //   //   path: "/soon",
      //   // },
      // ],
    },
    {
      id: 6,
      path: "/contract",
      icon: Contract,
      text: "Contracts",
      // innerArr: [
      //   // {
      //   //   id: 0,
      //   //   path: "/soon",
      //   //   text: "4 Downhaven St",
      //   // },
      //   // {
      //   //   id: 1,
      //   //   path: "/soon",
      //   //   text: "BitRegalo Development",
      //   // },
      //   // {
      //   //   id: 2,
      //   //   path: "/soon",
      //   //   text: "Xyz",
      //   // },
      //   {
      //     id: 3,
      //     path: "/create",
      //     text: "Create Escrow",
      //     icon: "bi-image",
      //   },
      // ],
    },
    {
      id: 5,
      path: "/my-wallet",
      icon: Wallet,
      text: "E-Wallet",
    },

    {
      id: 7,
      path: "/settings",
      icon: Setting,
      text: "Settings",
    },
    {
      id: 8,
      path: "/",
      icon: Scan,
      text: "Scan",
    },
  ];

  const userDropdownList = userDropdownData.map((elem, index) => (
    <li key={index}>
      <Link className="dropdown-item" href={elem.path}>
        <i className={`me-2 bi ${elem.icon}`} />
        {elem.text}
      </Link>
    </li>
  ));

  const notificationCards = NotificationData.slice(0, 4).map((elem, index) => (
    <li key={index}>
      <Link className="dropdown-item" href={`/notification-details/${elem.id}`}>
        <i
          className={`me-2 bg-${elem.icon[0].color} bi ${elem.icon[0].icon}`}
        />
        {elem.notification}
      </Link>
    </li>
  ));

  return (
    <>
      <header
        className={`header-area ${stickyClass} dashboard-header px-0 px-sm-0`}
      >
        <nav
          style={{ backgroundColor: "#0c153b" }}
          className="navbar navbar-expand-lg"
        >
          <div className="container-fluid">
            <div className="d-flex align-items-center">
              {/* Brand Logo */}
              {/* <div className="admin-logo me-2 me-sm-3">
                <Link className="d-block" to="/dashboard">
                  <img src={`/${BrandLogo}`} alt="" style={{ height: 64 }} />
                </Link>
              </div> */}

              {/* Search Form */}
              <div className="search-form">
                <Form
                  className="position-relative d-flex align-items-center"
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}
                >
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Search"
                  />
                  <button className="position-absolute" type="submit">
                    <i className="bi bi-search" />
                  </button>
                </Form>
              </div>
            </div>

            {/* Header Meta */}
            <div className="header-meta d-flex align-items-center">
              {/* Notification */}
              <Dropdown className="user-dropdown mx-1 mx-sm-3">
                <Dropdown.Toggle className="user-btn" id="userDropdown">
                  <img
                    src={`${process.env.PUBLIC_URL}/img/core-img/notification.png`}
                    alt=""
                  />
                </Dropdown.Toggle>

                <Dropdown.Menu className="mt-3 noti-dd-menu" align="end">
                  {notificationCards}
                  <li>
                    <Link
                      className="dropdown-item justify-content-center"
                      href="/notifications"
                    >
                      View all notifications
                    </Link>
                  </li>
                </Dropdown.Menu>
              </Dropdown>

              {/* User Dropdown */}
              <Dropdown className="user-dropdown">
                <Dropdown.Toggle className="user-btn" id="userDropdown">
                  <img
                    src={`${process.env.PUBLIC_URL}/img/core-img/user.png`}
                    alt=""
                  />
                </Dropdown.Toggle>

                <Dropdown.Menu className="mt-3" align="end">
                  {userDropdownList}
                </Dropdown.Menu>
              </Dropdown>

              {/* Menu Toggler */}
              <div className="menu-toggler ms-1 ms-sm-3" onClick={handleToggle}>
                <i className="bi bi-list" />
              </div>

              {/* Button */}
              <Link
                className="btn btn-sm btn-danger rounded-pill ms-2 ms-sm-3 d-none d-sm-block"
                href="/logged-out"
              >
                Log Out
              </Link>
            </div>
          </div>
        </nav>
      </header>

      <div
        className={`admin-sidebar-wrap ${
          isActive ? "sidebar-active" : "sidebar-disabled"
        }`}
      >
        <div className="overflowY-scroll">
          <img
            src={`${process.env.PUBLIC_URL}/${BrandLogo}`}
            alt=""
            style={{ marginBottom: 32 }}
          />
          {/* User Profile */}
          <div className="user-profile">
            {/* User Name */}

            {/* Balance */}
            <div className="card shadow mb-5">
              <div className="card-body text-center p-4">
                <h6 className="mb-1">{balanceCard[0].title}</h6>
                <h5 className="mb-0 text-dark d-flex align-items-center justify-content-center">
                  <span className="me-2">{balanceCard[0].balanceType}</span>
                  <span className="counter">{balanceCard[0].balance}</span>
                </h5>

                {/* Recharge Button */}
                <Link
                  className="btn btn-yellow rounded-pill btn-sm w-100 mt-3"
                  href="#"
                >
                  Recharge
                </Link>
              </div>
            </div>
          </div>

          {/* Sidenav */}
          <div className="sidenav">
            <ul>
              <li>Menu</li>
              {AdminNav.map((elem, index) => (
                <>
                  <li
                    style={
                      elem.id === 1 && createProject
                        ? { marginBottom: "8px" }
                        : { marginBottom: "15px" }
                    }
                    key={index}
                  >
                    <Link
                      className={"fz-18"}
                      onClick={() => {
                        if (elem.id === 1) {
                          setCreateProject(true);
                        } else {
                          setCreateProject(false);
                        }
                      }}
                      href={elem.path}
                    >
                      {/* {elem.id !==4 &&
                      <i className={`bi ${elem.icon}`} />
                    } */}
                      <img
                        style={{ marginRight: "10px" }}
                        src={elem.icon}
                        width={25}
                      />
                      {elem.text}
                    </Link>
                  </li>
                  <ul
                    style={{
                      marginLeft: 12,
                      marginTop: 0,
                      marginBottom: "2px",
                    }}
                  >
                    {createProject &&
                      elem?.innerArr?.map((elem1, ind) => (
                        <li key={ind} style={{ marginBottom: 10 }}>
                          <Link href={elem1.path} style={{ marginBottom: 0 }}>
                            <i className={`bi ${elem1.icon}`} />
                            {elem1.text}
                          </Link>

                          {elem1?.innerArr && (
                            <ul style={{ marginLeft: 12, marginTop: 0 }}>
                              {elem1?.innerArr?.map((elem2, ind) => (
                                <li key={ind} style={{ marginBlock: 10 }}>
                                  <Link
                                    href={elem2.path}
                                    style={{ marginBottom: 0 }}
                                  >
                                    <i className={`bi ${elem2.icon}`} />
                                    {elem2.text}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                  </ul>
                </>
              ))}
            </ul>
          </div>

          <div className="mt-auto">
            <div className="mt-5" />
            {/* Copyright Text */}
            <div className="copywrite-text mt-4">
              <p className="mb-0 fz-14">
                {new Date().getFullYear()} © All rights reserved by
                <a
                  className="fz-14 ms-1"
                  rel="noreferrer"
                  href="https://themeforest.net/user/designing-world/portfolio"
                  target="_blank"
                >
                  BitRegalo
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardHeader;
