import { Button } from "primereact/button";
import { Link, useNavigate } from "react-router-dom";
import error from "@/image/error.png";
import error2 from "@/image/b6b26a5967923abecb1be3c309a373da.png";
const ErrorPath = () => {
  const navigate = useNavigate();
  const handleReturn = () => {
    navigate(-1);
  };
  return (
    <div
      class="flex  h-screen"
      style={{
        // backgroundColor: "#b8dce8",
        position: "relative",
      }}
    >
      <div
        className="flex flex-column"
        style={{ position: "absolute", top: "50px", left: "150px" }}
      >
        <span
          className="fadein animation-duration-1000  font-bold text-500	"
          style={{ fontSize: "10rem" }}
        >
          Oops!!!!
        </span>
        <span
          className="fadein animation-duration-1000  font-medium text-4xl my-4"
          style={{ color: "#3ab4e0" }}
        >
          Không tìm thấy đường dẫn ?
        </span>
        <span
          className="fadein animation-duration-1000  font-normal text-2xl my-2"
          style={{ color: "black", maxWidth: "60%" }}
        >
          Có vẻ như bạn đang truy cập vào một trang không tồn tại hoặc bạn không
          có quyền truy cập!
        </span>
        <Button onClick={handleReturn} className="font-bold w-3 text-2xl mt-3">
          Quay về trước đó
        </Button>
      </div>
      <div style={{ position: "absolute", right: "15%", top: "15%" }}>
        <img
          style={{ width: "120%" }}
          src={
            "https://cdn.dribbble.com/users/329098/screenshots/6563414/404-ill.jpg?resize=800x600&vertical=center"
          }
        />
      </div>
    </div>
  );
};
export default ErrorPath;
