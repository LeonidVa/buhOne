import React from "react";
import styles from "./ServicesPageStyle.module.scss";
const ServicesSection = () => {
  const block = [
    {
      id: "1",
      img: "https://get.pxhere.com/photo/work-architecture-structure-sky-white-glass-building-city-skyscraper-urban-cityscape-downtown-construction-line-reflection-high-tower-corporate-office-landmark-facade-blue-exterior-industry-business-modern-tower-block-windows-symmetry-tall-new-center-shape-headquarters-company-financial-corporation-success-metropolis-workplace-business-building-metropolitan-area-1033249.jpg",
      title: "Бухгалтерское обслуживание",
    },
    {
      id: "2",
      img: "https://get.pxhere.com/photo/work-architecture-structure-sky-white-glass-building-city-skyscraper-urban-cityscape-downtown-construction-line-reflection-high-tower-corporate-office-landmark-facade-blue-exterior-industry-business-modern-tower-block-windows-symmetry-tall-new-center-shape-headquarters-company-financial-corporation-success-metropolis-workplace-business-building-metropolitan-area-1033249.jpg",
      title: "Бухгалтерское обслуживание",
    },
    {
      id: "3",
      img: "https://get.pxhere.com/photo/work-architecture-structure-sky-white-glass-building-city-skyscraper-urban-cityscape-downtown-construction-line-reflection-high-tower-corporate-office-landmark-facade-blue-exterior-industry-business-modern-tower-block-windows-symmetry-tall-new-center-shape-headquarters-company-financial-corporation-success-metropolis-workplace-business-building-metropolitan-area-1033249.jpg",
      title: "Бухгалтерское обслуживание",
    },
    {
      id: "4",
      img: "https://get.pxhere.com/photo/work-architecture-structure-sky-white-glass-building-city-skyscraper-urban-cityscape-downtown-construction-line-reflection-high-tower-corporate-office-landmark-facade-blue-exterior-industry-business-modern-tower-block-windows-symmetry-tall-new-center-shape-headquarters-company-financial-corporation-success-metropolis-workplace-business-building-metropolitan-area-1033249.jpg",
      title: "Бухгалтерское обслуживание",
    },
    {
      id: "5",
      img: "https://get.pxhere.com/photo/work-architecture-structure-sky-white-glass-building-city-skyscraper-urban-cityscape-downtown-construction-line-reflection-high-tower-corporate-office-landmark-facade-blue-exterior-industry-business-modern-tower-block-windows-symmetry-tall-new-center-shape-headquarters-company-financial-corporation-success-metropolis-workplace-business-building-metropolitan-area-1033249.jpg",
      title: "Бухгалтерское обслуживание",
    },
    {
      id: "6",
      img: "https://get.pxhere.com/photo/work-architecture-structure-sky-white-glass-building-city-skyscraper-urban-cityscape-downtown-construction-line-reflection-high-tower-corporate-office-landmark-facade-blue-exterior-industry-business-modern-tower-block-windows-symmetry-tall-new-center-shape-headquarters-company-financial-corporation-success-metropolis-workplace-business-building-metropolitan-area-1033249.jpg",
      title: "Бухгалтерское обслуживание",
    },
  ];
  return (
    <div className={styles.servicesPage}>
      <div className="container center">
        <div className={styles.servicesPage__container}>
          <div className="small-text">Наши услуги</div>
          <div className="main-title" style={{ paddingTop: 40 }}>
            Мы специализируемся
          </div>
          <div
            className={styles.servicesPage__block}
            style={{ paddingTop: 102 }}
          >
            {block.map((el, inxs) => {
              console.log(el.img);
              return (
                <div
                  className={styles.block}
                  style={{ backgroundImage: `url(${el.img})` }}
                  id={el.id}
                >
                  <div className={styles.block__black}></div>
                  <div className={styles.block__text}>
                    <div>{el.title}</div>
                  </div>
                </div>
              );
            })}

          </div>
        </div>
      </div>
    </div>
  );
};

export { ServicesSection };
