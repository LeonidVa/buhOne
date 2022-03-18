import React from "react";
import styles from "./FeedBackStyle.module.scss";

const FeedBack = () => {
  return (
    <div className={styles.feedback}>
      <div className="container center">
        <div className={styles.feedback__container}>
          <div className={styles.feedback__description}>
            Lorem Ipsum - это текст-"рыба", часто используемый в печати и
            вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на
            латинице с начала XVI века. В то время некий безымянный печатник
            создал большую коллекцию размеров и форм шрифтов, используя Lorem
            Ipsum для распечатки образцов. Lorem Ipsum - это текст-"рыба", часто
            используемый в печати и вэб-дизайне.
          </div>
          <div className={styles.human}>
            <div className={styles.human__photo}>
              <img
                className={styles.human__img}
                src="https://selfhelplegalonline.com/wp-content/uploads/2017/03/Depositphotos_13723586_original.jpg"
              />
            </div>
            <div className={styles.human__info}>
              <div className={styles.human__fio}>Екатерина Иванова</div>
              <div className={styles.human__position}>
                Директор ООО “Раз-два”
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { FeedBack };
