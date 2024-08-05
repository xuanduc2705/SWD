const Partner = (props) => {
  const { label, list } = props;
  return (
    <div
      style={{
        backgroundImage:
          "url(https://cdn.bookingcare.vn/fo/w640/2023/11/01/140311-background5.png)",
      }}
      className="pb-4"
    >
      <div className="flex ">
        <span className=" flex mx-auto mt-4 font-bold text-5xl">{label}</span>
      </div>
      <div className="grid mt-3 ">
        <div className="col-6">
          <img
            src="https://i.ytimg.com/vi_webp/FyDQljKtWnI/maxresdefault.webp"
            style={{ width: "90%", borderRadius: "2vh" }}
            className="flex mx-auto"
          />
        </div>
        <div className="grid col-6 p-2">
          {list?.map((item, index) => (
            <div className="col-6">
              <div
                style={{
                  backgroundColor: "white",
                  height: "90px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "2vh",
                }}
              >
                <img src={item?.src} className="w-6 flex mx-auto" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Partner;
