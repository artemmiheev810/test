import { InputSearch } from "components/InputSearch/InputSearch";
import { ProgressScale } from "components/ProgressScale/ProgressScale";
import { Select } from "components/Select/Select";
import { UserInfoPopup } from "components/UserInfoPopup/UserInfoPopup";
import React from "react";
import { dateHelper } from "utils/dateHelper";

import style from "./Header.module.scss";

const options = [
  { value: 1, label: "Все организации" },
  { value: 2, label: "ООО Грузчиков Сервис Запад" },
  { value: 3, label: "ИП Митрофанов М.М." },
  { value: 4, label: "ИП Иванов М.М." },
  { value: 5, label: "ИП Сидорова Александра Михайловна" },
];
export const Header = () => {
  return (
    <div className={style.content}>
      <div className={style.date}>
        {dateHelper.toDayNameDayNumMonthName(new Date())}
      </div>
      <div className={style.scales}>
        <div className={style.scales__item}>
          <ProgressScale
            percent={Math.ceil(100 - (20 / 30) * 100)}
            label={"Новые звонки"}
            value={"20 из 30 шт"}
          />
        </div>
        <div className={style.scales__item}>
          <ProgressScale
            percent={40}
            label={"Качество разговоров"}
            value={"40%"}
          />
        </div>
        <div className={style.scales__item}>
          <ProgressScale
            percent={67}
            label={"Конверсия в заказ"}
            value={"67%"}
          />
        </div>
      </div>
      <div className={style.search}>
        <InputSearch />
      </div>
      <div className={style.organisation}>
        <Select options={options} value={5} />
      </div>
      <div className={style.user}>
        <UserInfoPopup />
      </div>
    </div>
  );
};
