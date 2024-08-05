import {
  CalendarForm,
  FormUpdate,
  InputForm,
  InputTextareaForm,
} from "@/components/FormUpdate";
import { shift } from "@/constants";
import { bacsi } from "@/constants/doctor";
import { useGetUserProfile } from "@/module/home/utils";
import { InputText, RadioButton } from "@/uiCore";
import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { saveBooking } from "../api";
import { useGetAllDoctor } from "@/module/doctor/utils";

const Checkout = () => {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const did = searchParams.get("did");
  const shi = searchParams.get("shift");
  const [infos, setInfos] = useState({
    shift: shi,
    doctorid: did,
    name: "",
    gender: true,
    phone: "",
    dob: "",
    email: "",
    address: "",
    note: "",
  });
  const handleData = () => {
    let info = { ...infos };
    if (info?.fullName == "") return "Vui lòng điền tên";
    if (info?.email == "") return "Vui lòng điền email";
    if (info?.phoneNumber == "") return "Vui lòng điền sđt";
    if (info?.dob == "") return "Vui lòng chọn ngày sinh";
    if (info?.address == "") return "Vui lòng điền địa chỉ";
    return info;
  };
  const list = useGetAllDoctor();
  const doctor = list?.find((e) => e.id == did);
  console.log(doctor);
  const profile = useGetUserProfile();
  useEffect(() => {
    if (profile && profile?.fullName) {
      setInfos({
        shift: shi,
        doctorid: did,
        fullName: profile.fullName,
        email: profile.email,
        phoneNumber: profile.phoneNumber,
        gender: profile.gender,
        dob: String(profile.dob)?.substring(0, 10),
        address: profile.address,
      });
    }
  }, [profile]);
  return (
    <div className="">
      <div className="flex flex-row justify-content-center mb-4">
        <div
          style={{
            width: "10%",
            aspectRatio: "1",
            borderRadius: "50%",
            overflow: "hidden",
            cursor: "pointer",
          }}
          className="mx-4"
        >
          <img
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            src={doctor?.profilePic}
          />
        </div>
        <div className="flex flex-column">
          <span className="text-2xl my-1">Bác sĩ: {doctor?.name}</span>
          <span className="text-2xl my-1">
            Lịch khám: {shift?.find((e) => e.id == shi)?.time}
          </span>
        </div>
      </div>
      <div className="card w-8 mx-auto ">
        <FormUpdate
          checkId={1}
          //   title="Checkout thông tin"
          handleData={handleData}
          //   route="/service_type"
          actions={{ update: saveBooking }}
          refreshObjects={[setInfos]}
        >
          <InputForm
            value={infos.fullName}
            onChange={(e) => setInfos({ ...infos, fullName: e.target.value })}
            label="Tên khách hàng"
          />
          <div className="my-2">
            <label htmlFor="ingredient1" className="mx-2">
              Nam
            </label>
            <RadioButton
              inputId="ingredient1"
              checked={infos?.gender == true}
              onChange={(e) => setInfos({ ...infos, gender: true })}
            />
            <label htmlFor="ingredient1" className="mx-2">
              Nữ
            </label>
            <RadioButton
              inputId="ingredient1"
              checked={infos?.gender == false}
              onChange={(e) => setInfos({ ...infos, gender: false })}
            />
          </div>

          <InputForm
            value={infos.email}
            onChange={(e) => setInfos({ ...infos, email: e.target.value })}
            label="Email"
          />
          <InputForm
            value={infos.phoneNumber}
            onChange={(e) =>
              setInfos({ ...infos, phoneNumber: e.target.value })
            }
            label="Số điện thoại"
          />
          <CalendarForm
            value={new Date(infos.dob)}
            onChange={(e) => setInfos({ ...infos, dob: e.target.value })}
            label="Ngày sinh"
          />
          <InputForm
            value={infos.address}
            onChange={(e) => setInfos({ ...infos, address: e.target.value })}
            label="Địa chỉ"
          />
          <InputTextareaForm
            value={infos.note}
            onChange={(e) => setInfos({ ...infos, note: e.target.value })}
            label="Lý do"
          />
        </FormUpdate>
      </div>
    </div>
  );
};
export default Checkout;
