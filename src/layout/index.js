import React, { useState, useRef, useEffect } from "react";
import { classNames } from "primereact/utils";
import AppTopbar from "./AppTopBar";

const Layout = (props) => {
  return (
    <React.Fragment>
      {/* {visible && <UserInfo visible={visible} setVisible={setVisible} />} */}
      <div>
        <div>
          <AppTopbar />
        </div>
        <div>
          <div className=" w-10 mx-auto my-4">{props.children}</div>
          {/* <AppFooter /> */}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Layout;
