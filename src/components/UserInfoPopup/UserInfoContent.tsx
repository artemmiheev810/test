import { AuthorizationIcon } from "components/AuthorizationIcon/AuthorizationIcon";
import React from "react";

import mail from "static/img/mail.svg";
import phone from "static/img/calls.svg";

import st from "./UserInfoContent.module.scss";

import ava from "static/img/avatar.png";
const otherUsers = [
  {
    id: "operators",
    name: "Операторы",
    children: [
      { id: 1, name: "Мирон Батонов" },
      { id: 2, name: "Алексей Ильин" },
      { id: 3, name: "Милана Константинопольская" },
    ],
  },
  {
    id: "logistics",
    name: "Логисты",
    children: [
      { id: 1, name: "Мирон Батонов" },
      { id: 4, name: "Илья Алексеев" },
      { id: 5, name: "Александра Сизых" },
    ],
  },
  {
    id: "accountants",
    name: "Бухгалтеры",
    children: [
      { id: 1, name: "Мирон Батонов" },
      { id: 6, name: "Владимир Петров" },
      { id: 7, name: "Полина Калинина" },
    ],
  },
  {
    id: "accountants2",
    name: "Бухгалтеры2",
    children: [
      { id: 1, name: "Мирон Батонов" },
      { id: 6, name: "Владимир Петров" },
      { id: 7, name: "Полина Калинина" },
    ],
  },
];
export const UserInfoContent = () => {
  return (
    <div>
      <div className={st.info}>
        <div className={st.info__top}>
          <div className={st.info__name}>Упоров Кирилл</div>
          <AuthorizationIcon.LogOut className={st.logout} />
        </div>
        <div className={st.info__additional}>
          <span>Директор</span>
          <span className={st.info__point} />
          <span>Санкт-Петербург</span>
        </div>
        <div className={st.contact}>
          <img src={phone} alt="phone" />
          <a href="tel:8 (800) 333-17-21">8 (800) 333-17-21</a>
        </div>
        <div className={st.contact}>
          <img src={mail} alt="mail" />
          <a href="mailto:hi@skilla.ru">hi@skilla.ru</a>
        </div>
        <div className={st.line} />
      </div>
      <div className={st.list}>
        {otherUsers.map(({ id, name, children }) => {
          return (
            <div key={id} className={st.userGroup}>
              <div className={st.userGroup__name}>{name}</div>
              <div className={st.userGroup__wrap}>
                {children.map(({ id, name }, index) => (
                  <div key={id + index} className={st.user__content}>
                    <div className={st.user__content_info}>
                      <img src={ava} alt={"user" + id} />
                      <span>{name}</span>
                    </div>
                    <AuthorizationIcon.LogIn className={st.login} />
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
