import { dvtd } from "@/constants/services";
import ListServices from "./ListServices";
import { Link, useLocation } from "react-router-dom";

const Services = () => {
  const list = dvtd;
  const location = useLocation().pathname;
  const list_id = String(location).split("/");
  const id = list_id?.[2];
  return (
    <div>
      {list
        ?.filter((e) => e.id == id)
        ?.map((item, index) => (
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
              / {item?.name}
            </span>
            <div className="mt-5">
              <ListServices type={item?.value} />
            </div>
          </div>
        ))}
    </div>
  );
};
export default Services;
