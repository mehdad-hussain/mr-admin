import { useRouter } from "next/router";
import React from "react";

import Sidebar from "../Components/Sidebar";

const Layout = ({ children, pageTitle, backOption, styles }) => {
  const router = useRouter();
  return (
    <>
      <Sidebar styles={styles} />
      {children}
    </>
  );
};

export default Layout;
