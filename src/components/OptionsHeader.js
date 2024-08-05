export const OptionsHeader = (props) => {
  const { icon, name, onClick } = props;
  return (
    <div>
      <div className="flex flex-column py-3 mx-4" onClick={onClick}>
        <span
          className={icon}
          style={{ fontSize: "2.2rem", margin: "0 auto", color: "#45c3d3" }}
        ></span>
        <span
          style={{ fontSize: "1.2rem", fontWeight: "bold", color: "#45c3d3" }}
        >
          {name}
        </span>
      </div>
    </div>
  );
};
