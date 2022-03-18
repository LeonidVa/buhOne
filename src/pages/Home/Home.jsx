import React, { Component } from "react";
import { NextArrow } from "../../components/NextArrow";
import { PrevArrow } from "../../components/PrevArrow";
import { SectionSlider } from "../../components/sections/section-slider/SectionSlider";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";

import "swiper/swiper.scss";
import "swiper/modules/navigation/navigation.scss";
import "swiper/modules/pagination/pagination.scss";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  } from "swiper";

const HomePage = () => {
  const slideMassive = [
    {
      city: "Бухгалтерские услуги в Санкт-Петербурге",
      img: "https://i.pinimg.com/originals/37/28/04/372804976c5f498ba754ae1ac1394a52.jpg",
    },
    {
      city: "Бухгалтерские услуги в Санкт-Петербурге",
      img: "https://i.pinimg.com/originals/37/28/04/372804976c5f498ba754ae1ac1394a52.jpg",
    },
    {
      city: "Бухгалтерские услуги в Санкт-Петербурге",
      img: "https://i.pinimg.com/originals/37/28/04/372804976c5f498ba754ae1ac1394a52.jpg",
    },
  ];

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      mousewheel={true}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        disabledClass: "disable",
      }}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}

    >
      {slideMassive.map((el, id) => {

        return (
          <div>
            <SwiperSlide >
              <SectionSlider img={el.img} text={el.city} key={id}/>
            </SwiperSlide>
          </div>
        );
      })}
      <div className="display-flex">
        <div className="swiper-pagination"></div>
        <div className="swiper-button-prev">
          <PrevArrow />
        </div>
        <div className="swiper-button-next">
          <NextArrow />
        </div>

      </div>
    </Swiper>
  );
};
export default HomePage;

