import React from "react";
import { AboutSection } from "../components/sections/AboutSection";
import { ContactUs } from "../components/sections/ContactUs";
import { FeedBack } from "../components/sections/FeedBack";
import { PartnersSection } from "../components/sections/PartnersSection";
import { ServicesSection } from "../components/sections/ServicesSection";
import { SliderComponent } from "../components/SliderComponent";

import HomePage from "../pages/Home/Home";

const Home = () => {
  const data = [
    {
      id: 1,
      avatar:
        "https://eharitonova.ru/wp-content/uploads/2012/09/1282297050_business-woman-table-group.jpg",
      text: "Microsoft",
      fio: "Екатерина Иванова",
      position: "Директор ООО “Раз-два”",
      discription:
        "Lorem Ipsum - это текст-'рыба', часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной 'рыбой' для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum - это текст-'рыба', часто используемый в печати и вэб-дизайне.",
    },
    {
      id: 2,
      avatar:
        "https://eharitonova.ru/wp-content/uploads/2012/09/1282297050_business-woman-table-group.jpg",
      text: "Microsoft",
      fio: "Екатерина Иванова",
      position: "Директор ООО “Раз-два”",
      discription:
        "Lorem Ipsum - это текст-'рыба', часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной 'рыбой' для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum - это текст-'рыба', часто используемый в печати и вэб-дизайне.",
    },
    {
      id: 3,
      avatar:
        "https://eharitonova.ru/wp-content/uploads/2012/09/1282297050_business-woman-table-group.jpg",
      text: "Microsoft",
      fio: "Екатерина Иванова",
      position: "Директор ООО “Раз-два”",
      discription:
        "Lorem Ipsum - это текст-'рыба', часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной 'рыбой' для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum - это текст-'рыба', часто используемый в печати и вэб-дизайне.",
    },
    {
      id: 4,
      avatar:
        "https://eharitonova.ru/wp-content/uploads/2012/09/1282297050_business-woman-table-group.jpg",
      text: "Microsoft",
      fio: "Екатерина Иванова",
      position: "Директор ООО “Раз-два”",
      discription:
        "Lorem Ipsum - это текст-'рыба', часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной 'рыбой' для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum - это текст-'рыба', часто используемый в печати и вэб-дизайне.",
    },
  ];
  return (
    <div>
      <HomePage />
      <ServicesSection />
      <AboutSection />
      <PartnersSection />
      <div className="feedback">
        <SliderComponent
          className="slider-component"
          slider={<FeedBack />}
          entry="Отзывы"
          title="Ваши благодарности"
          slidesPerView={1}
          data={data}
        />
      </div>
      <ContactUs />
    </div>
  );
};

export default Home;
