import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import SliderImage1 from "../../assets/Images/allMAinIMages/exercise1.jpg";
import SliderImage2 from "../../assets/Images/allMAinIMages/exercise2.png";
import SliderImage3 from "../../assets/Images/allMAinIMages/exercise3.png";
import SliderImage4 from "../../assets/Images/allMAinIMages/exercise4.png";
import SliderImage5 from "../../assets/Images/allMAinIMages/exercise5.jpg";
import SliderImage6 from "../../assets/Images/allMAinIMages/exercise6.jpg";

const ImageSlider = () => {
  return (
    <div className="w-150 h-80 ">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        <SwiperSlide>
          <img
            src={SliderImage1}
            alt="slide"
            className="w-full h-100 object-cover rounded-2xl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={SliderImage2}
            alt="slide"
            className="w-full h-100 object-cover rounded-2xl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={SliderImage3}
            alt="slide"
            className="w-full h-100 object-cover rounded-2xl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={SliderImage4}
            alt="slide"
            className="w-full h-100 object-cover rounded-2xl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={SliderImage5}
            alt="slide"
            className="w-full h-100 object-cover rounded-2xl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={SliderImage6}
            alt="slide"
            className="w-full h-100 object-cover rounded-2xl"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ImageSlider;
