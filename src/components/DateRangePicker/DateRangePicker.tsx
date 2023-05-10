import { DatePicker, TimeRangePickerProps } from "antd";
import IMask from "imask";
import moment from "moment/moment";
import React, { FC } from "react";
import st from "./Picker.module.scss";

const { RangePicker } = DatePicker;

interface DateRangePickerProps extends TimeRangePickerProps {}

const MASKED = IMask.createMask({
  blocks: {
    DD: { from: 1, mask: IMask.MaskedRange, to: 31 },
    MM: { from: 1, mask: IMask.MaskedRange, to: 12 },
    YY: { from: 1900, mask: IMask.MaskedRange, to: Number.MAX_VALUE },
  },
  format: (date: Date) => moment(date).format("DD.MM.YY"),
  mask: Date,
  parse: (date: string) => moment(date, "DD.MM.YY"),
  pattern: "DD.MM.YY",
});

export const DateRangePicker: FC<DateRangePickerProps> = ({ ...props }) => {
  return (
    <RangePicker
      {...props}
      separator={<>-</>}
      className={st.wrap}
      onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) => {
        const input = event.target as HTMLInputElement;
        input.value = MASKED.resolve(input.value);
      }}
    />
  );
};
