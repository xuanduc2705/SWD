import React, { useState, useRef, useEffect } from "react";
import { classNames } from "primereact/utils";
import AppTopbar from "./AppTopBar";
import { ScrollTop } from "@/uiCore";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <React.Fragment>
      {/* {visible && <UserInfo visible={visible} setVisible={setVisible} />} */}
      <div style={{ overflow: "auto", height: "1000px" }}>
        <div>
          <AppTopbar />
        </div>
        <div>
          <div className=" w-10 mx-auto my-4">{props.children}</div>
          {/* <AppFooter /> */}
        </div>
        <Footer />
        <ScrollTop
          target="parent"
          threshold={400}
          className="w-4rem h-4rem border-round bg-primary fadeindown animation-ease-in animation-duration-300 "
          icon="pi pi-arrow-up text-base"
        />
      </div>
    </React.Fragment>
  );
};

export default Layout;
