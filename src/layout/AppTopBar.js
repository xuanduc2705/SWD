import { OptionsHeader } from "@/components/OptionsHeader";
import { itemsMenu } from "@/constants";
import image from "@/image/imageBanner.png";
import React, { useRef } from "react";
import { Button } from "primereact/button";
import { Menu } from "primereact/menu";
import { Toast } from "primereact/toast";
import { Avatar } from "@/uiCore";
import { Link, useNavigate } from "react-router-dom";
import { useGetUserProfile } from "@/module/home/utils";

const AppTopbar = () => {
  const menuLeft = useRef(null);
  const menuRight = useRef(null);
  const toast = useRef(null);
  const profile = useGetUserProfile();
  const user_item = [
    {
      label: profile?.fullName,
      items: [
        {
          label: "Thông tin",
          icon: "pi pi-user",
        },
        {
          label: "Đổi mật khẩu",
          icon: "pi pi-lock",
        },
        {
          label: "Đăng xuất",
          icon: "pi pi-upload",
          command: () => {
            localStorage.removeItem("token");
            window.location.reload();
          },
        },
      ],
    },
  ];
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const handleNavigateHome = () => {
    navigate("/");
  };
  const convertName = (name) => {
    const con = name?.split(" ");
    const a = String(name)?.substring(0, 1);
    return `${con[0]?.substring(0, 1)}${con[1]?.substring(
      0,
      1
    )}${con[2]?.substring(0, 1)} `;
  };
  return (
    <div className="grid">
      <div className="col-10 flex mx-auto">
        <div className="col-4 flex flex-row">
          <span
            className="pi pi-align-justify mr-5 my-auto"
            style={{ fontSize: "4vh", fontWeight: "bold", color: "grey" }}
          ></span>
          <div onClick={() => handleNavigateHome()}>
            <img
              src={image}
              style={{ width: "65%", paddingTop: "10px", cursor: "pointer" }}
            />
          </div>
        </div>
        <div className="col-4 flex flex-row">
          <div className="w-3 my-auto">
            <span className=" span_header_choose ">Tất cả</span>
          </div>
          <div className="w-3 my-auto">
            <span className=" span_header">Tại nhà</span>
          </div>
          <div className="w-3 my-auto ">
            <span className="span_header">Tại viện</span>
          </div>
          <div className="w-3 my-auto">
            <span className=" span_header">Sống khỏe</span>
          </div>
        </div>
        <div
          className="col-4 flex flex-row-reverse"
          style={{ position: "relative" }}
        >
          {/* <OptionsHeader
            icon="pi pi-user"
            name="XuanDuc"
            onClick={(event) => menuRight.current.toggle(event)}
            aria-controls="popup_menu_right"
            aria-haspopup
          /> */}
          {token ? (
            <Avatar
              label="Us"
              size="xlarge"
              shape="circle"
              className="flex my-auto ml-4"
              onClick={(event) => menuRight.current.toggle(event)}
              aria-controls="popup_menu_right"
              aria-haspopup
            />
          ) : (
            <Link to={"/login"} style={{ textDecoration: "none" }}>
              <OptionsHeader icon="pi pi-sign-in" name="Đăng nhập" />
            </Link>
          )}
          <OptionsHeader icon="pi pi-headphones" name="Hỗ trợ" />
          <Link to={"/mybooking"} style={{ textDecoration: "none" }}>
            <OptionsHeader icon="pi pi-envelope" name="Đơn của tôi" />
          </Link>

          <Toast ref={toast}></Toast>
          <Menu
            model={user_item}
            popup
            ref={menuRight}
            id="popup_menu_right"
            popupAlignment="right"
          />
          {/* <Button
            label="Show Right"
            icon="pi pi-align-right"
            className="mr-2"
            onClick={(event) => menuRight.current.toggle(event)}
            aria-controls="popup_menu_right"
            aria-haspopup
          /> */}
        </div>
      </div>
    </div>
  );
};
export default AppTopbar;
