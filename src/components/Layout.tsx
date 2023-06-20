import { ReactNode, useEffect, useState } from "react";
import Footer from "./Footer";
import Navbars from "./Navbar";

interface Props{
  children : ReactNode;
}

const Layout = ({ children }:Props) => {

  return (
    <>
      <Navbars/>
      <div>
        {children}
      </div>
      <Footer/>
    </>
   
  );
};

export default Layout;