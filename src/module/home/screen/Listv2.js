import { Link, Navigate, useNavigate } from "react-router-dom";

const Listv2 = (props) => {
  const { label, list, url } = props;
  const navigate = useNavigate();
  const hanldeNavigate = (id) => {
    navigate(`${url}/${id}`);
  };
  return (
    <div>
      <span className="m-4 font-bold text-3xl">{label}</span>
      <div className="grid mt-5">
        {list.map((item, index) => (
          <div
            className="col-6 my-3"
            onClick={() => hanldeNavigate(item?.id)}
            style={{ cursor: "pointer" }}
          >
            <div
              className="flex mx-auto w-11 shadow-4 flex-row border-round-3xl px-4 py-3"
              style={{
                backgroundImage:
                  "url(https://bookingcare.vn/_next/static/media/ic_background_grid_item.b108f491.png)",
              }}
            >
              <img
                style={{
                  width: "90px",
                  height: "90px",
                  borderRadius: "50%",
                  backgroundColor: "#fef5dc",
                }}
                className="mx-3"
                src={item?.src}
              />
              <span
                className="mx-3 text-3xl flex my-auto"
                style={{ fontWeight: "600" }}
              >
                {item?.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Listv2;
