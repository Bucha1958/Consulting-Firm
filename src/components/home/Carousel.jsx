import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { data } from "../data";
import arrow from "../../assets/offering/cil_arrow-right.png";

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="mt-10">
      <Slider {...settings}>
        {data.map((item) => {
          return (
            <div>
              <div className="relative grid justify-center bg-[#F1F1F1] p-5 text-center rounded-lg lg:w-72 md:w-[21rem] w-[19.7rem] h-60">
                <div>
                  <h3 className="font-medium text-lg mb-3 text-lg">
                    {item.name}
                  </h3>
                  <div className="text-[#373737] text-sm mb-3 w-[15.125rem]">
                    {item.desc}
                  </div>
                  <div className="flex justify-center items-center gap-1 text-[#143561] font-medium">
                    <button>Learn More</button>
                    <span>
                      <img src={arrow} alt="" />
                    </span>
                  </div>
                </div>

                <div className="absolute top-0 -right-3">
                  <img
                    src={item.image}
                    className="bg-[#143561] rounded-full p-2"
                    alt=""
                  />
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Carousel;
