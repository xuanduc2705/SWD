import { dvtd } from "@/constants/services";
import { useLocation, useNavigate } from "react-router-dom";
import { useGetListDoctor } from "./utils";
import { bacsi } from "@/constants/doctor";

const ServiceInfo = (props) => {
  const {} = props;
  const location = useLocation().pathname;
  const list_location = location.split("/");
  const list = dvtd.filter((e) => e.id == list_location[2])?.[0]?.value;
  const list_data = list?.filter((e) => e.id == list_location[3])?.[0];
  const doctor = useGetListDoctor();

  const navigate = useNavigate();
  const HandleNavigate = (id) => {
    navigate(`/doctor/${id}`);
  };
  return (
    <div>
      {list_data && (
        <div className="flex flex-column">
          <div className="flex flex-column">
            <span className="font-medium text-4xl">{list_data.name}</span>
            <div className="flex flex-column p-2 ">
              {list_data?.info?.map((item, index) => (
                <div>
                  <span className="font- text-700 text-2xl ">{item.head}</span>
                  <ul>
                    {item.list.map((listItem, listIndex) => (
                      <li className="" key={listIndex}>
                        {listItem}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {doctor
        ?.filter((e) => [1, 2, 3, 4, 5, 6, 7, 8].includes(e?.id))
        ?.map((e) => (
          <div className="card grid" onClick={() => HandleNavigate(e?.id)}>
            <div className="col-6 flex flex-row">
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
                  src={e?.profilePic}
                />
              </div>
              <span className="text-primary text-2xl">{e?.name}</span>
            </div>
            <div className="col-6"></div>
          </div>
        ))}
    </div>
  );
};
export default ServiceInfo;
