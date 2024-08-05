import { useLocation, useNavigate } from "react-router-dom";

const ListServices = (props) => {
  const { type } = props;
  const navigate = useNavigate();
  const location = useLocation().pathname;
  const hanldeNavigate = (id) => {
    navigate(`${location}/${id}`);
  };
  return (
    <div>
      <div className="grid">
        {type?.map((item, index) => (
          <div
            className="col-3 flex flex-column"
            style={{ cursor: "pointer" }}
            onClick={() => hanldeNavigate(item.id)}
          >
            <img
              src={item?.src}
              style={{ width: "100%", aspectRatio: "1.7" }}
            />
            <span className="font-bold text-2xl flex mx-auto">
              {item?.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ListServices;
