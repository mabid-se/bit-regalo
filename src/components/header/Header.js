import { useState } from "react";
// import { Link, NavLink } from "react-router-dom";
// import Link from "next/link";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

import CreateNewButton from "./CreateNewButton";
import NavDropDown from "./DropDown";
import FuntoNavbar from "./Nav";
import SearchForm from "./SearchForm";
import useStickyHeader from "./StickyHeader";

export default function Header() {
  let [check] = useState(true);
  const sticky = useStickyHeader(10);
  const stickyClass = `${sticky && check ? "sticky-on" : ""}`;

  return (
    <header className={`header-area ${stickyClass}`}>
      <Navbar expand="lg">
        <Container>
          {/* Navbar Toggler */}
          <Navbar.Toggle className="navbar-toggler" aria-controls="funtoNav" />

          {/* Navbar */}
          <Navbar.Collapse id="funtoNav">
            {/* Navbar List */}

            {/* <div className="navbar-nav navbar-nav-scroll my-2 my-lg-0">
              <NavLink to="/soon">White Paper</NavLink>
              <a href={"https://web13.co.nz/public/login"}>
                <NavLink>Seed Investor Portal</NavLink>
              </a>
            </div> */}
            {/* Header Meta */}
            <div className="header-meta d-flex align-items-center ms-lg-auto">
              {/* Search Form */}
              {/* <SearchForm /> */}

              {/* User Dropdown */}
              {/* <NavDropDown
                dropdownID="dropdownMenuButton1"
                toggleIcon="bi-three-dots"
                dropdownList={[
                  {
                    text: "Dashboard",
                    url: "/dashboard",
                    icon: "bi-speedometer2",
                  },
                  {
                    text: "Collections",
                    url: "/collections",
                    icon: "bi-collection",
                  },
                  {
                    text: "Notifications",
                    url: "/notifications",
                    icon: "bi-bell",
                  },
                  {
                    text: "Settings",
                    url: "/settings",
                    icon: "bi-gear",
                  },
                ]}
              /> */}

              {/* <div className="navbar-nav navbar-nav-scroll my-2 my-lg-0">
                <NavLink to="/soon" style={{ marginRight: 16 }}>
                  Login
                </NavLink>
              </div>
              <CreateNewButton
                buttonColor="btn-warning"
                buttonURL="/register"
                buttonText="Register"
              /> */}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
