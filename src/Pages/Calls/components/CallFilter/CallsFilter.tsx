import { Form, Row } from "antd";
import { useForm } from "antd/es/form/Form";
import { Balance } from "components/Balance/Balance";
import { DateSelect } from "components/DateSelect/DateSelect";
import { InputSearch } from "components/InputSearch/InputSearch";
import { Select } from "components/Select/Select";
import { DefaultOptionType } from "rc-select/lib/Select";
import React, { useEffect, useState } from "react";
import { Fetch } from "services/service";

import st from "./CallsFilter.module.scss";

const callTypes: DefaultOptionType[] = [
  { label: "Все типы", value: "undefined" },
  { label: "Входящие", value: "1" },
  { label: "Исходящие", value: "0" },
];

interface CallsFilterProps {
  getFilterData: (e: Fetch["body"]) => void;
}
export const CallsFilter = ({ getFilterData }: CallsFilterProps) => {
  const [form] = useForm();

  const [initialDates, setInitialDates] = useState<[string, string]>(["", ""]);

  useEffect(() => {
    const [date_start, date_end] = initialDates;
    getFilterData({ date_start, date_end, ...form.getFieldsValue() });
  }, [initialDates]);

  return (
    <Form
      className={st.wrap}
      form={form}
      onFieldsChange={(changedFields, allFields) => {
        const fields = Object.fromEntries(
          allFields.map(({ name, value }) => [[(name as string)[0]], value])
        );
        const [date_start, date_end] = initialDates;

        getFilterData({
          date_start,
          date_end,
          ...fields,
        });
      }}
    >
      <Row className={st.wrap}>
        <Balance balance={234} />
        <DateSelect onSelect={setInitialDates} />
      </Row>
      <Row className={st.wrap} gutter={[0, 30]}>
        <Form.Item className={st.leftField}>
          <InputSearch
            placeholder={"Введите номер"}
            label={"Поиск по звонкам"}
          />
        </Form.Item>
        <Form.Item name={"in_out"}>
          <Select
            isWide={false}
            isValueIlluminated
            placeholder={"Все типы"}
            options={callTypes}
          />
        </Form.Item>
        <Form.Item>
          <Select
            isValueIlluminated
            isWide={false}
            placeholder={"Все сотрудники"}
          />
        </Form.Item>
        <Form.Item>
          <Select
            isValueIlluminated
            isWide={false}
            placeholder={"Все звонки"}
          />
        </Form.Item>
        <Form.Item>
          <Select
            isValueIlluminated
            isWide={false}
            placeholder={"Все источники"}
          />
        </Form.Item>
        <Form.Item>
          <Select
            isValueIlluminated
            isWide={false}
            placeholder={"Все оценки"}
          />
        </Form.Item>
        <Form.Item>
          <Select
            isValueIlluminated
            isWide={false}
            placeholder={"Все ошибки"}
          />
        </Form.Item>
      </Row>
    </Form>
  );
};
