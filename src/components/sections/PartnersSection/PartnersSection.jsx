import React from "react";
import Partners from "../../../assets/icons/partners.png";
import styles from "./PartnersStyle.module.scss";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import "swiper/swiper.scss"; // core Swiper
import "swiper/modules/navigation/navigation.scss"; // Navigation module
import "swiper/modules/pagination/pagination.scss"; // Pagination module
import { PrevArrow } from "../../PrevArrow";
import { NextArrow } from "../../NextArrow";
const PartnersSection = () => {
  const data = [
    {
      id: 1,
      img: "https://www.appdisqus.com/wp-content/uploads/2017/07/microsoft-1200x750.jpg",
      parners: "Microsoft",
    },
    {
      id: 2,
      img: "https://clipart-best.com/img/microsoft/microsoft-clip-art-13.png",
      parners: "Microsoft",
    },
    {
      id: 3,
      img: "https://clipart-best.com/img/microsoft/microsoft-clip-art-13.png",
      parners: "Microsoft",
    },
    {
      id: 4,
      img: "https://clipart-best.com/img/microsoft/microsoft-clip-art-13.png",
      parners: "Microsoft",
    },
    {
      id: 5,
      img: "https://clipart-best.com/img/microsoft/microsoft-clip-art-13.png",
      parners: "Microsoft",
    },
    {
      id: 6,
      img: "https://clipart-best.com/img/microsoft/microsoft-clip-art-13.png",
      parners: "Microsoft",
    },
    {
      id: 7,
      img: "https://clipart-best.com/img/microsoft/microsoft-clip-art-13.png",
      parners: "Microsoft",
    },
    {
      id: 8,
      img: "https://clipart-best.com/img/microsoft/microsoft-clip-art-13.png",
      parners: "Microsoft",
    },
  ];
  return (
    <div className={styles.PartnersSection}>
      <div className="container center">
        <div className={styles.PartnersSection__container}>
          <div className="small-text">Наши клиенты</div>
          <div className="main-title" style={{ paddingTop: 40 }}>
            С нами работают
          </div>
          <div
            className={styles.PartnersSection__slider}
            style={{ paddingTop: 80 }}
          >
            {" "}
            <div className="parners-section">
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={0}
                slidesPerView={4}
                mousewheel={true}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                  disabledClass: "disable",
                }}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                >
                <div>
                  {data.map((el, i) => {

                    return (
                      <SwiperSlide>
                        <span
                          style={{ backgroundColor: "#000" }}
                          height={130}
                          key={el.id}
                        >
                          <div className="width-box">
                            <img src={Partners} alt={el.parners} />
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

export { PartnersSection };
