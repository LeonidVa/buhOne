import React from "react";
import Partners from "../../assets/icons/partners.png";
import styles from "./Slider.module.scss";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  allowSlideNext,
  allowSlidePrev,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import "swiper/swiper.scss"; // core Swiper
import "swiper/modules/navigation/navigation.scss"; // Navigation module
import "swiper/modules/pagination/pagination.scss"; // Pagination module
import { PrevArrow } from "../PrevArrow";
import { NextArrow } from "../NextArrow";
const SliderComponent = (props) => {
  const { data, entry, title, className, slidesPerView, slider } = props;

  return (
    <div className={styles.SliderComponent}>
      <div className="container center">
        <div className={styles.PartnersSection__container}>
          <div className="small-text">{entry}</div>
          <div className="main-title" style={{ paddingTop: 40 }}>
            {title}
          </div>
          <div
            className={styles.PartnersSection__slider}
            style={{ paddingTop: 80 }}
          >
            {" "}
            <div className={className}>
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={10}
                slidesPerView={slidesPerView}
                mousewheel={true}
                speed={700}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                  disabledClass: "disable", // When the navigation button is not available, the Class is added, that is, when the Swiper index is 0, the last Class class name without prevel will add a disable, which is .swiper-button-prev .disable
                }}
                speed={700}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
               >
                <div>
                  {data.map((el, i) => {
                  return (
                      <SwiperSlide>
                        <span style={{ backgroundColor: "#000" }} key={i}>
                          <div className="width-box">
                            <span>
                              <img
                                className="slide-img"
                                src={el.img}
                                alt={el.parners}
                              />
                            </span>
                            <span>{slider}</span>
                          </div>
                        </span>
                      </SwiperSlide>
                    );
                  })}
                </div>
                <div className="display-flex">
                  <div className="swiper-button-prev">
                    <PrevArrow bgColor={"#005FA3"} op={0.2} />
                  </div>
                  <div className="swiper-button-next">
                    <NextArrow bgColor={"#005FA3"} op={0.2} />
                  </div>
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { SliderComponent };

