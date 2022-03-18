import React from "react";
import styles from "./ContactUs.module.scss";
import { Form } from "./Form";
import Bg from "../../../assets/icons/bg-contacts.jpg";
import { Mail, Phone } from "../../../assets/icons/svg/icons";

const ContactUs = () => {
  return (
    <div className={styles.contactus}>
      <div className="container center">
        <div className={styles.contactus__container}>
          <div className={styles.callback}>
            <div className={styles.callback__title}>Связь с нами</div>
            <div className={styles.callback__text}>
              У вас остались вопросы? Напишите нам - мы ответим в ближайшее
              время!
            </div>
            <div className={styles.callback__item}>
              <div className={styles.callback__phone}>
                <Phone width={17.43} height={30} />{" "}
                <span className={styles.callback__center}>
                  +7 (111) 222-33-44
                </span>
              </div>
              <div className={styles.callback__mail}>
                <Mail width={39.42} height={30} />
                <span className={styles.callback__center}>order@bu-one.ru</span>
              </div>
            </div>
          </div>
          <div className={styles.Form}>
            <Form />
          </div>
        </div>
      </div>
      <img src={Bg} />
      <div className={styles.black} />
    </div>
  );
};

export { ContactUs };
