import { useGetListDoctor } from "./utils";

const DetailService = (props) => {
  const { type } = props;
  const doctor = useGetListDoctor();
  console.log(doctor);
  return (
    <div>
      <div className="grid">
        {type?.map((item, index) => (
          <div className="col-3 flex flex-column">
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
export default DetailService;
