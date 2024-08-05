import { Carousel } from "primereact/carousel";
import { banner } from "../../../constants";
const productTemplate = (item) => {
  return (
    <div style={{ position: "relative" }}>
      <img
        className=""
        style={{
          width: "100%",
          aspectRatio: "3",
          borderRadius: "3vh",
        }}
        src={item.src}
        alt="Banner"
      />
    </div>
  );
};
const Banner = () => {
  return (
    <Carousel
      className="w-12"
      style={{ margin: "0 auto" }}
      value={banner}
      numVisible={1}
      numScroll={1}
      showNavigators={false}
      itemTemplate={productTemplate}
      showIndicators
      autoplayInterval={3000}
      circular
    />
  );
};

export default Banner;
