import React, { useState } from "react";
import DashboardHeader from "../components/dashboard/header/DashboardHeader";
import CreateNewButton from "../components/header/CreateNewButton";
// import DashboardHeader from "../components/dashboard/header/DashboardHeader";
// import CreateNewButton from "../components/header/CreateNewButton";
import Header from "../components/header/Header";

const Layout = ({ children }) => {
  const [user, setUser] = useState(true);

  return (
    <div>
      {user ? (
        <>
          <DashboardHeader />
          {/* <CreateNewButton /> */}
          <CreateNewButton buttonURL="#" />
        </>
      ) : (
        <Header />
      )}
      <div className={user ? "admin-wrapper" : "public-wrapper"}>
        {children}
      </div>
    </div>
  );
};

export default Layout;
