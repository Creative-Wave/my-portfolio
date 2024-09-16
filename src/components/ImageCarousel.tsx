import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    autoplay: true,
    arrows: false,
  };

  return (
    <div className="w-full max-w-screen-md mx-auto">
      {" "}
      {/* Center the slider container */}
      <Slider {...settings}>
        <div className="flex justify-center">
          {" "}
          {/* Center each image container */}
          <img
            src="/big-img1.png"
            className="w-[500px] h-auto mx-auto carousel-image"
            alt="Project 1"
          />
        </div>
        <div className="flex justify-center">
          {" "}
          {/* Center each image container */}
          <img
            src="/project1.png"
            className="w-[500px] h-auto mx-auto carousel-image"
            alt="Project 2"
          />
        </div>
        <div className="flex justify-center">
          {" "}
          {/* Center each image container */}
          <img
            src="/big-img1.png"
            className="w-[500px] h-auto mx-auto carousel-image"
            alt="Project 3"
          />
        </div>
      </Slider>
    </div>
  );
};

export default ImageCarousel;
