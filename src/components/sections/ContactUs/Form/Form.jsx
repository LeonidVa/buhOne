import React, { useState, useEffect } from "react";
import { Button } from "../../../button/Button";
import styles from "./Form.module.scss";
const Form = () => {
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [text, setText] = useState("");
  const [nameDirty, setNameDirty] = useState(false);
  const [lastnameDirty, setLastNameDirty] = useState(false);
  const [textDirty, setTextDirty] = useState(false);
  /* errors */
  const [nameError, setNameError] = useState("Имя не должен быть пустым");
  const [lastnameError, setLastNameError] = useState(
    "Фамилия не должен быть пустым"
  );
  const [textError, setTextError] = useState("Текст не должен быть пустым");

  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (nameError || lastnameError || textError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  });

  const nameHandler = (e) => {
    setName(e.target.value);
    if (!e.target.value) {
      setNameError("Имя не должен быть пустым");
    } else {
      setNameError("");
    }
  };
  const lastHandler = (e) => {
    setLastName(e.target.value);
    if (!e.target.value) {
      setLastNameError("Фамилия не должен быть пустым");
    } else {
      setLastNameError("");
    }
  };
  const textHandler = (e) => {
    setText(e.target.value);
    if (!e.target.value) {
      setTextError("Текст не должен быть пустым");
    } else {
      setTextError("");
    }
  };

  const blurHandler = (e) => {
    // console.log("blurHandler", e.target);
    switch (e.target.name) {
      case "firstName":
        console.log("name");
        setNameDirty(true);
        break;
      case "lastName":
        setLastNameDirty(true);
        break;
      case "textarea":
        setTextDirty(true);
        break;
    }
  };

  return (
    <div className={styles.Form}>
      <div className={styles.Form__container}>
        <form
          className={styles.Form__block}
          onSubmit={(e) => {
            console.log("submitted", e);
            e.preventDefault();
          }}
        >
          <div className={styles.Form__fio}>
            <label>
              Имя:
              <br />
              <input
                onChange={(e) => {
                  nameHandler(e);
                }}
                value={name}
                onBlur={(e) => blurHandler(e)}
                type="text"
                name="firstName"
                placeholder="Имя"
                className={styles.Form__input}
              />
              {nameDirty && nameError && (
                <div style={{ color: "red" }}>{nameError}</div>
              )}
            </label>
            <label>
              Фамилия:
              <br />
              <input
                onChange={(e) => {
                  lastHandler(e);
                }}
                value={lastname}
                type="text"
                name="lastName"
                placeholder="Фамилия"
                className={styles.Form__input}
                onBlur={(e) => blurHandler(e)}
              />
              {lastnameDirty && lastnameError && (
                <div style={{ color: "red" }}>{lastnameError}</div>
              )}
            </label>
          </div>

          <br />
          <label className={styles.Form__textarea}>
            Сообщение:
            <br />
            <input
              onChange={(e) => {
                textHandler(e);
              }}
              value={text}
              type="text"
              name="textarea"
              placeholder="Сообщение"
              className={styles.Form__input}
              onBlur={(e) => blurHandler(e)}
            />
            {textDirty && textError && (
              <div style={{ color: "red" }}>{textError}</div>
            )}
          </label>
          <div className={styles.Form__button}>
            <Button value={!formValid} text="Отправить сообщение" />
          </div>
        </form>
      </div>
    </div>
  );
};

export { Form };
