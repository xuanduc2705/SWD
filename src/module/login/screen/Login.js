import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { useState } from "react";
import { FloatLabel } from "primereact/floatlabel";
import { InputText } from "primereact/inputtext";
import { useNavigate } from "react-router-dom";
import { Password } from "primereact/password";
import { LoginApi } from "../api";
import img from "@/image/doctor.png";
const Login = () => {
  const header = (
    <div>
      <img
        src="https://bookingcare.vn/assets/icon/bookingcare-maskable-icon.png"
        style={{ width: "80px" }}
        className="flex mx-auto mt-4"
      />
      <span className="flex justify-content-center font-bold">
        {" "}
        BookingCare
      </span>
      <span
        className="flex justify-content-center font-bold text-4xl	mt-4"
        style={{ color: "#08a6b8" }}
      >
        Welcome
      </span>
    </div>
  );

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [checkpass, setCheckpass] = useState(false);
  const navigate = useNavigate();
  const handleLogin = async () => {
    const response = await LoginApi(username, password);
    if (response.success) {
      localStorage.setItem("token", response?.data);
      navigate("/home");
      window.location.reload();
    } else {
      setCheckpass(true);
    }
  };
  const footer = (
    <div className="flex justify-content-center">
      <Button
        label="Login"
        icon="pi pi-sign-in"
        onClick={handleLogin}
        className="w-6"
      />
    </div>
  );
  return (
    <div
      className="h-screen"
      style={{
        backgroundColor: "#c3e9ed",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="card w-10 mx-auto grid bg-green-50 shadow-7 fadein animation-duration-2000"
        style={{
          height: "80vh",
          borderRadius: "5vh",
          backgroundColor: "#eff7f8",
        }}
      >
        <div className="col-7">
          <img src={img} className="w-full" />
        </div>
        <div
          className="col-5"
          style={{ display: "flex", alignItems: "center" }}
        >
          <Card
            footer={footer}
            header={header}
            className="w-8 mx-auto shadow-8"
            style={{ borderRadius: "1.5vh" }}
          >
            <div className="flex flex-column justify-content-center ">
              <FloatLabel className="mx-auto mb-4">
                <InputText
                  className="w-17rem"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  invalid={checkpass}
                />
                <label for="username" className="font-bold text-1xl">
                  Username
                </label>
              </FloatLabel>
              <FloatLabel className="mx-auto">
                <Password
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  toggleMask
                  feedback={false}
                  invalid={checkpass}
                />
                {checkpass ? (
                  <label
                    for="password"
                    className="font-bold text-1xl"
                    style={{ color: "red" }}
                  >
                    Password
                  </label>
                ) : (
                  <label for="password" className="font-bold text-1xl ">
                    Password
                  </label>
                )}
              </FloatLabel>
              {checkpass && (
                <div className="col-10 mx-auto">
                  <span
                    className="flex  mr-4 mt-3 text-center	"
                    style={{ color: "red" }}
                  >
                    Wrong user information! Please check again!
                  </span>
                </div>
              )}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
export default Login;
