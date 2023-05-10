import { Dropdown, MenuProps } from "antd";
import { DateRangePicker } from "components/DateRangePicker/DateRangePicker";
import moment from "moment";
import React, { useState } from "react";
import { Arrow } from "components/Icons/Arrow";
import { IconCalendar } from "components/Icons/IconCalendar";
import { concatClass } from "utils/concatClass";
import { dateHelper } from "utils/dateHelper";
import st from "./DateSelect.module.scss";

const ActiveRow = ({ title, isAcive }: { title: string; isAcive: boolean }) => (
  <div className={isAcive ? st.active : ""}> {title}</div>
);
enum Type {
  Day = "day",
  Week = "week",
  Month = "month",
  Year = "year",
}
export const DateSelect = ({
  onSelect,
}: {
  onSelect: (e: [string, string]) => void;
}) => {
  const [dateType, setDateType] = useState<string | undefined>(Type.Day);
  const [date, setDate] = useState<string | undefined>();
  const selectValue = (val: [string, string]) => {
    onSelect(val);
  };
  const selectValueByType = (key: Type) => {
    const currentDate = moment();
    const toYMD = dateHelper.toYMD;
    switch (key) {
      case Type.Day:
        const threeDayBack = currentDate.subtract(3, "day");
        selectValue([toYMD(threeDayBack), toYMD(moment())]);
        break;
      case Type.Week:
        const oneWeekBack = currentDate.subtract(1, "week");
        selectValue([toYMD(oneWeekBack), toYMD(moment())]);
        break;
      case Type.Month:
        const oneMonthBack = currentDate.subtract(1, "month");
        selectValue([toYMD(oneMonthBack), toYMD(moment())]);
        break;
      case Type.Year:
        const oneYearBack = currentDate.subtract(1, "year");
        selectValue([toYMD(oneYearBack), toYMD(moment())]);
        break;
    }
  };

  const items = [
    {
      key: Type.Day,
      label: <ActiveRow title={"3 дня"} isAcive={dateType === Type.Day} />,
    },
    {
      key: Type.Week,
      label: <ActiveRow title={"Неделя"} isAcive={dateType === Type.Week} />,
    },
    {
      key: Type.Month,
      label: <ActiveRow title={"Месяц"} isAcive={dateType === Type.Month} />,
    },
    {
      key: Type.Year,
      label: <ActiveRow title={"Год"} isAcive={dateType === Type.Year} />,
    },
    {
      key: "custom",
      type: "group",
      label: (
        <div className={st.group}>
          <div>Указать дату</div>
          <DateRangePicker
            bordered={false}
            placeholder={["__.__.__", "__.__.__"]}
            format={"DD.MM.YY"}
            onChange={(values) => {
              if (values?.[0] && values?.[1]) {
                const firstToUI = dateHelper.toDMY(
                  new Date(values[0].toString())
                );
                const secondToUI = dateHelper.toDMY(
                  new Date(values[1].toString())
                );
                const firstToBACK = dateHelper.toYMD(
                  new Date(values[0].toString())
                );
                const secondToBACK = dateHelper.toYMD(
                  new Date(values[1].toString())
                );
                const str = `с ${firstToUI} по ${secondToUI}`;
                setDateType(undefined);
                setDate(str);
                selectValue([firstToBACK, secondToBACK]);
              }
            }}
          />
        </div>
      ),
    },
  ];

  const onClick: MenuProps["onClick"] = ({ key }) => {
    setDateType(key);
    selectValueByType(key as Type);
  };
  const onChange = () => {
    const sliceArr = [...items];
    sliceArr.pop();
    const ind = sliceArr.findIndex((value) => value?.key === dateType);

    const decrease = () => {
      if (ind === -1 || ind === 0) {
        setDateType(sliceArr[sliceArr.length - 1]?.key);
        return;
      }
      setDateType(sliceArr[ind - 1]?.key);
    };
    const increase = () => {
      if (ind + 1 === sliceArr.length) {
        setDateType(sliceArr[0]?.key);
        return;
      }
      setDateType(sliceArr[ind + 1]?.key);
    };
    return {
      decrease,
      increase,
    };
  };
  const decrease = onChange().decrease;
  const increase = onChange().increase;

  return (
    <div className={st.wrap}>
      <Arrow className={concatClass(st.arr, st.arr_left)} onClick={decrease} />
      <Dropdown
        overlayClassName={st.overlayClassName}
        placement={"bottomRight"}
        trigger={["click"]}
        menu={{ items, onClick }}
      >
        <a onClick={(e) => e.preventDefault()} className={st.calendar}>
          <IconCalendar />
          <span>
            {items.find(({ key }) => key === dateType)?.label ?? date}
          </span>
        </a>
      </Dropdown>
      <Arrow className={concatClass(st.arr, st.arr_right)} onClick={increase} />
    </div>
  );
};
