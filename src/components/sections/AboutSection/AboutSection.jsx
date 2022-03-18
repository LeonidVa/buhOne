import React from "react";
import { Link } from "react-router-dom";
import styles from "./AboutSectionStyle.module.scss";

const AboutSection = () => {
  const data = [
    {
      id: "1",
      count: 90,
      end: "Завершено крупных сделок",
      link: "/keys",
    },
    {
      id: "1",
      count: 90,
      end: "Завершено крупных сделок",
      link: "/contacts",
    },
    {
      id: "1",
      count: 90,
      end: "Завершено крупных сделок",
      link: "/services",
    },
    {
      id: "1",
      count: 90,
      end: "Завершено крупных сделок",
      link: "/about",
    },
  ];
  return (
    <div className={styles.AboutSection}>
      <div className="container center">
        <div className={styles.AboutSection__container}>
          <div className={styles.AboutSection__left}>
            <div className="small-text">О нас</div>
            <div className="main-title" style={{ paddingTop: 40 }}>
              Компания <span>ИвановПром</span>
            </div>
            <div className="default-text" style={{ paddingTop: 40 }}>
              Lorem Ipsum - это текст-"рыба", часто используемый в печати и
              вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов
              на латинице с начала XVI века. В то время некий безымянный
              печатник создал большую коллекцию размеров и форм шрифтов,
              используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не
              только успешно пережил без заметных изменений пять веков, но и
              перешагнул в электронный дизайн.
            </div>
          </div>
          <div className={styles.AboutSection__right}>
            {data.map((el, inx) => {
              return (
                <div className={styles.block} key={el.id}>
                  <div className={styles.block__info}>
                    <div className={styles.block__number}>{el.count}</div>
                    <div className={styles.block__description}>{el.end}</div>
                    <div className={styles.block__navlink}>
                      <Link to={`${el.link}`}>Все кейсы</Link>
                    </div>
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

export { AboutSection };
