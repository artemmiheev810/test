import moment, { Moment } from "moment";

export const dateHelper = {
  toDayNameDayNumMonthName: (date: Date | Moment) => {
    // Среда, 13 окт
    return moment(date).format("dddd, DD MMM ");
  },
  toDMY: (date: Date | Moment) => {
    // 13.01.22
    return moment(date).format("DD.MM.YY");
  },
  toYMD: (date: Date | Moment) => {
    // 13.01.22
    return moment(date).format("YYYY-MM-DD");
  },
  transformNumberToSeconds: (num: number) => {
    const duration = moment.duration(num, "seconds");
    return `${duration.minutes().toString().padStart(2, "0")}:${duration
      .seconds()
      .toString()
      .padStart(2, "0")}`;
  },
};
