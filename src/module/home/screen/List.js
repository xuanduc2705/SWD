import { banner, chuyenkhoa } from "@/constants";
import { Carousel } from "@/uiCore";
import { useNavigate } from "react-router-dom";

const responsiveOptions = [
  {
    breakpoint: "1400px",
    numVisible: 2,
    numScroll: 1,
  },
  {
    breakpoint: "1199px",
    numVisible: 3,
    numScroll: 1,
  },
  {
    breakpoint: "767px",
    numVisible: 2,
    numScroll: 1,
  },
  {
    breakpoint: "575px",
    numVisible: 1,
    numScroll: 1,
  },
];
const List = (props) => {
  const { label, value, isCircle, background, adding, url } = props;
  const navigate = useNavigate();
  const hanldeNavigate = (id) => {
    navigate(`${url}/${id}`);
  };
  const productTemplate = (item) => {
    return (
      <div style={{ position: "relative" }} className="flex flex-column my-3">
        {isCircle ? (
          <div
            style={{
              margin: "0 auto",
              width: "60%",
              aspectRatio: "1",
              borderRadius: "50%",
              overflow: "hidden",
              cursor: "pointer",
            }}
            onClick={() => hanldeNavigate(item?.id)}
          >
            <img
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              src={
                item?.profilePic !== "khong co"
                  ? item?.profilePic
                  : "https://t4.ftcdn.net/jpg/03/59/58/91/360_F_359589186_JDLl8dIWoBNf1iqEkHxhUeeOulx0wOC5.jpg"
              }
            />
          </div>
        ) : (
          <div
            style={{
              margin: "0 auto",
              width: "70%",
              aspectRatio: "1.2",
              overflow: "hidden",
            }}
          >
            <img
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              src={item?.src}
            />
          </div>
        )}
        <span
          className="font-bold flex mx-auto text-2xl mt-2"
          style={{ cursor: "pointer" }}
          onClick={() => hanldeNavigate(item?.id)}
        >
          {item?.name}
        </span>
      </div>
    );
  };
  return (
    <div
      className="flex flex-column my-6"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div
        className="flex flex-row"
        style={{ justifyContent: "space-between" }}
      >
        <span className="m-4 font-bold text-3xl">{label}</span>
        <span
          className="m-4 font-bold text-2xl "
          style={{
            color: "#34929e",
            backgroundColor: "#daf3f6",
            padding: "10px",
            borderRadius: "2vh",
          }}
        >
          {adding}
        </span>
      </div>
      <div>
        <Carousel
          className="w-12"
          style={{ margin: "0 auto" }}
          value={value}
          numScroll={1}
          numVisible={3}
          showIndicators={false}
          itemTemplate={productTemplate}
          responsiveOptions={responsiveOptions}
        />
      </div>
    </div>
  );
};
export default List;
