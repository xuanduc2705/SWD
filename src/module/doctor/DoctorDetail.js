import { shift } from "@/constants";
import { Avatar, Button } from "@/uiCore";
import { colors } from "@mui/material";
import { Link } from "react-router-dom";

const DoctorDetail = (props) => {
  const { type } = props;
  return (
    <div>
      <div className="flex flex-column">
        <div className="flex flex-row">
          <div
            style={{
              minWidth: "15%",
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
              src={
                type?.profilePic !== "khong co"
                  ? type?.profilePic
                  : "https://t4.ftcdn.net/jpg/03/59/58/91/360_F_359589186_JDLl8dIWoBNf1iqEkHxhUeeOulx0wOC5.jpg"
              }
            />
          </div>
          <div className="flex flex-column">
            <span className="font-semibold text-5xl my-1">{type?.name}</span>
            <span className=" text-xl text-500 my-2">{type?.briefInfo}</span>
            <div className="flex flex-row">
              <Button
                label={`Thích : ${type?.like ? type?.like : " 0 "}`}
                style={{ width: "auto" }}
                className="my-1 mx-2"
              ></Button>
              <Button
                label={`Chia sẻ : ${type?.share ? type?.share : "0"}`}
                style={{ width: "auto" }}
                className="my-1 mx-2"
              ></Button>
            </div>
          </div>
        </div>
        <div className="grid mt-4 ">
          <div className="col-6 p-2">
            <div
              className="flex flex-column shadow-4 border-round-xl p-3"
              style={{ minHeight: "250px" }}
            >
              <span>
                <i className="pi pi-calendar-plus font-bold text-2xl"></i>
                <span className=" font-medium text-2xl ml-2">Lịch Khám</span>
              </span>
              <div className="grid mt-4 mx-auto gap-3">
                {type?.shift?.map((e) => (
                  <Link to={`/checkout?did=${type?.id}&shift=${e}`}>
                    <Button
                      style={{
                        width: "140px",
                        fontWeight: "bold",
                      }}
                      severity="secondary"
                    >
                      {shift?.filter((sh) => sh.id == e)?.[0].time}
                    </Button>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="col-6 p-2">
            <div
              className=" card  border-round-xl flex flex-column p-3 shadow-4 "
              style={{ minHeight: "250px" }}
            >
              <span className="font-medium text-3xl ">ĐỊA CHỈ KHÁM</span>
              <div className="p-2 flex flex-column">
                <span className="font-normal text-xl ">{type?.room}</span>
                <span className="font-normal text-500 text-xl">
                  {type?.location}
                </span>
              </div>
              <span className="font-medium text-3xl">
                {" "}
                Giá Khám : <span className="font-normal">{type?.price}đ</span>
              </span>
            </div>
          </div>
        </div>
        <div
          className="flex flex-column mt-3 py-5 mx-1 px-6 border-round-xl shadow-5 "
          style={{ backgroundColor: "#eeeeee" }}
        >
          {type?.info?.map((e, index) => (
            <div className="flex flex-column">
              <span className="font-semibold text-3xl">{e.head}</span>
              <ul>
                {e.list.map((item) => (
                  <li className="text-xl text-600" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default DoctorDetail;
