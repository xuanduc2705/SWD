import { chuyenkhoa, csyt, dvtd, ktx, partner, sktt } from "@/constants";
import Banner from "./Banner";
import List from "./List";
import Listv2 from "./Listv2";
import Partner from "./Partner";
import { bacsi } from "@/constants/doctor";
import { useGetUserProfile } from "../utils";
import { useGetAllDoctor } from "@/module/doctor/utils";

const Home = () => {
  const profile = useGetUserProfile();
  const listdoc = useGetAllDoctor();

  return (
    <div className="">
      <Banner />
      <Listv2 list={dvtd} label="Dịch vụ toàn diện" url="/services" />
      <List label="Chuyên khoa" value={chuyenkhoa} adding="Xem thêm" />
      <List
        label="Bác sĩ nổi bật"
        url="doctor"
        value={listdoc}
        isCircle
        background="https://cdn.bookingcare.vn/fo/w640/2023/11/01/140311-background5.png"
        adding="Xem thêm"
      />
      <List label="Khám từ xa" value={ktx} adding="Xem thêm" />
      <List
        label="Sức khỏe tinh thần"
        value={sktt}
        background="https://cdn.bookingcare.vn/fo/2023/11/01/140308-background2.png"
      />
      <List label="Cơ sở y tế" value={csyt} adding="Xem thêm" />
      <Partner list={partner} label="Truyền thông nói gì về BookingCare" />
      <List label="Chuyên khoa" value={chuyenkhoa} adding="Xem thêm" />
    </div>
  );
};
export default Home;
