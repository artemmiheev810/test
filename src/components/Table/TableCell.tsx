import { CheckBox } from "components/CheckBox/CheckBox";
import st from "components/Table/Table.module.scss";
import React, { CSSProperties } from "react";

export interface TableCellProps<T> {
  index: number;
  data: { row: T & { id: string }; value: string };
  isCheck: boolean;
  visibilityClassNames: [string, string];
  showCheckbox?: boolean;
  style?: CSSProperties;
  renderElement?: ({ row, value }: TableCellProps<T>["data"]) => JSX.Element;
  onCheckTest?: (str: string) => void;
  width?: string | number;
}
export const TableCell = <T,>({
  renderElement: Element,
  index,
  data,
  isCheck,
  visibilityClassNames,
  showCheckbox,
  style,
  onCheckTest,
}: TableCellProps<T>) => {
  return (
    <th style={style} className={st.th}>
      {index === 0 && showCheckbox && (
        <CheckBox
          onChange={() => onCheckTest?.(data.row.id)}
          visibilityClassNames={visibilityClassNames}
          isCheck={isCheck}
          index={data.row.id}
        />
      )}
      {Element ? (
        <div style={{ float: style?.float }} className={st.cell}>
          <Element value={data.value} row={data.row} />
        </div>
      ) : (
        <div style={{ float: style?.float }} className={st.cell}>
          {data.value}
        </div>
      )}
    </th>
  );
};
