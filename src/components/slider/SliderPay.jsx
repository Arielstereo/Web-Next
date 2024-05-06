import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Visa from "../icons/Visa";
import Master from "../icons/Master";
import Mp from "../icons/Mp";
import Cash from "../icons/Cash";
import Bank from "../icons/Bank";
import AmEx from "../icons/AmEx";

const SliderPay = () => {
  const settings = {
    className: "slider variable-width",
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    variableWidth: true
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div style={{ width: 100 }}>
          <Visa />
        </div>
        <div style={{ width: 100 }}>
          <Master />
        </div>
        <div style={{ width: 100 }}>
          <Mp />
        </div>
        <div style={{ width: 100 }}>
          <Cash />
        </div>
        <div style={{ width: 100 }}>
          <Bank />
        </div>
        <div style={{ width: 100 }}>
          <AmEx />
        </div>
      </Slider>
    </div>
  );
};

export default SliderPay;
