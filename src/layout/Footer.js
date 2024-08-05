import image from "@/image/imageBanner.png";

const Footer = (props) => {
  return (
    <div
      style={{ backgroundColor: "#efefef", minWidth: "100%" }}
      className="grid py-4"
    >
      <div className="col-10 flex mx-auto">
        <div className="col-5 flex flex-column">
          <span className="font-semibold text-xl my-2">
            Công ty Cổ phần Công nghệ BookingCare
          </span>
          <div className="flex flex-column">
            <span className="my-1 text-xl">
              Lô B4/D21, Khu đô thị mới Cầu Giấy, Phường Dịch Vọng Hậu, Quận Cầu
              Giấy, Thành phố Hà Nội, Việt Nam
            </span>
            <span className="my-1 text-xl">
              ĐKKD số. 0106790291. Sở KHĐT Hà Nội cấp ngày 16/03/2015
            </span>
            <span className="my-1 text-xl">024-7301-2468 (7h - 18h)</span>
            <span className="my-1 text-xl">
              support@bookingcare.vn (7h - 18h)
            </span>
          </div>
          <span className="font-semibold text-xl">
            Văn phòng tại TP Hồ Chí Minh
          </span>
          <div className="flex flex-column my-2">
            <span className="my-1 text-xl">
              Tòa nhà H3, 384 Hoàng Diệu, Phường 6, Quận 4, TP.HCM
            </span>
          </div>
          <img
            src="https://bookingcare.vn/assets/icon/bo-cong-thuong.svg"
            width={"150px"}
          />
        </div>
        <div className="col-2 flex flex-column">
          <span
            className="text-2xl font-bold my-2"
            style={{ color: "#ffc10e" }}
          >
            BOOKING CARE
          </span>
          <span className="text-primary text-xl font-semibold my-2">
            Tuyển dụng
          </span>
          <span className="text-primary text-xl font-semibold my-2">
            Chính sách bảo mật
          </span>
          <span className="text-primary text-xl font-semibold my-2">
            Quy chế hoạt động
          </span>
          <span className="text-primary text-xl font-semibold my-2">
            Liên hệ hợp tác
          </span>
          <span className="text-primary text-xl font-semibold my-2">
            Điều khoản sử dụng
          </span>
          <span className="text-primary text-xl font-semibold my-2">
            Câu hỏi thường gặp
          </span>
        </div>
        <div className="col-5">
          <span className="font-semibold text-xl my-2">
            Đối tác bảo trợ nội dung
          </span>
          <div className="flex flex-row my-3">
            <div
              style={{ width: "100px", alignItems: "center" }}
              className="flex"
            >
              <img
                src="https://cdn.bookingcare.vn/fo/w128/2023/09/08/093706-hellodoctorlogo.png"
                style={{ width: "90%" }}
              />
            </div>
            <div className="flex flex-column">
              <span className="font-semibold text-xl my-1">Hello Doctor</span>
              <span className=" text-xl my-1">
                Bảo trợ chuyên mục nội dung "sức khỏe tinh thần"
              </span>
            </div>
          </div>
          <div className="flex flex-row my-3">
            <div
              style={{ width: "100px", alignItems: "center" }}
              className="flex"
            >
              <img
                src="https://cdn.bookingcare.vn/fo/w128/2022/03/21/082316-logo-bernard.png"
                style={{ width: "90%" }}
              />
            </div>
            <div className="flex flex-column">
              <span className="font-semibold text-xl my-1">
                Hệ thống y khoa chuyên sâu Quốc tế Bernard
              </span>
              <span className=" text-xl my-1">
                Bảo trợ chuyên mục nội dung "y khoa chuyên sâu"
              </span>
            </div>
          </div>
          <div className="flex flex-row my-3">
            <div
              style={{ width: "100px", alignItems: "center" }}
              className="flex"
            >
              <img
                src="https://cdn.bookingcare.vn/fo/w128/2024/01/09/064252-doctor-check-2.png"
                style={{ width: "90%" }}
              />
            </div>
            <div className="flex flex-column">
              <span className="font-semibold text-xl my-1">
                Doctor Check-Kiểm soát bệnh
              </span>
              <span className=" text-xl my-1">
                Bảo trợ chuyên mục nội dung "sức khỏe tổng quát"
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
