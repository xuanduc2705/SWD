import { shift } from "@/constants";
import { useGetAllBooking } from "@/module/Admin/Check/utils";
import { useGetAllDoctor } from "@/module/doctor/utils";
import { Link } from "react-router-dom";

const MyBooking = () => {
  const list = useGetAllBooking();
  const doctor = useGetAllDoctor();
  console.log(list);
  const convert = (date) => {
    const dt = date?.split("-");
    return `${dt[2]} - ${dt[1]} -${dt[0]}`;
  };
  const shiftlist = shift;

  return (
    <>
      <div>
        <div>
          <span className="text-lg">
            <Link
              to={"/"}
              style={{ textDecoration: "none" }}
              className="text-primary"
            >
              <i className="pi pi-home mr-1 text-xl"></i>
              Home
            </Link>{" "}
            / My Booking
          </span>
          <div className="mt-5">
            <div className="">
              {list?.map((e) => (
                <div className="card w-9 mx-auto">
                  <div className="flex flex-row-reverse text-xl font-bold ">
                    {e?.status == 0 && <p>Đang chờ duyệt</p>}
                    {e?.status == 1 && (
                      <p style={{ color: "#14b8a6" }}>Đã duyệt</p>
                    )}
                    {e?.status == 2 && <p style={{ color: "red" }}>Từ chối</p>}
                  </div>
                  <div className="flex flex-column p-3">
                    <p>
                      <strong className="font-bold text-xl">Bác sĩ :</strong>
                      <span className="ml-2 font-medium text-xl">
                        {doctor?.find((i) => i.id == e?.doctorId)?.name}
                      </span>
                    </p>
                    <p>
                      <strong className="font-bold text-xl">Ngày:</strong>
                      <span className="ml-2 font-medium text-xl">
                        {convert(String(e?.createdAt)?.substring(0, 10))}
                      </span>
                    </p>
                    <p>
                      <strong className="font-bold text-xl">Thời gian:</strong>
                      <span className="ml-2 font-medium text-xl">
                        {shift?.find((i) => i.id == e.shiftTo)?.time}
                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MyBooking;
