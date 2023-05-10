import { CheckBox } from "components/CheckBox/CheckBox";
import { Empty } from "components/Empty/Empty";
import { Loader } from "components/Loader/Loader";
import { TableCell, TableCellProps } from "components/Table/TableCell";
import React, { CSSProperties, useEffect, useState } from "react";
import { concatClass } from "utils/concatClass";
import st from "./Table.module.scss";

export interface TableData<T> {
  quantity?: number;
  key: string;
  title?: string;
  rows: T[];
}

export interface TableColumns<T> {
  title: string;
  key: string;
  width?: string | number;
  render?: ({ row, value }: TableCellProps<T>["data"]) => JSX.Element;
  position?: CSSProperties["float"];
}

interface TableProps<T> {
  columns: TableColumns<T>[];
  data?: TableData<T>[];
  showCheckbox?: boolean;
  onCheckRows?: (arr?: string[]) => void;
  isLoading?: boolean;
}

export const Table = <T extends { id: string }>({
  columns,
  data,
  showCheckbox = true,
  onCheckRows,
  isLoading = false,
}: TableProps<T>) => {
  const [allChecked, setAllChecked] = useState<boolean>(false);
  const [checkedArray, setCheckedArray] = useState<string[] | undefined>([]);

  useEffect(() => {
    onCheckRows?.(checkedArray);
  }, [checkedArray]);

  const keys = columns.map(({ key }) => key);
  const Elements: {
    key: string;
    render?: ({ data }: any) => JSX.Element;
    width?: number | string;
    position?: CSSProperties["float"];
  }[] = [];

  const onCheckTest = (currentId: string) => {
    if (checkedArray?.includes(currentId)) {
      setCheckedArray(checkedArray?.filter((id) => currentId !== id));
    } else {
      setCheckedArray([...(checkedArray ?? []), currentId]);
    }
  };
  const onChange = (checked: boolean) => {
    setAllChecked(checked);
    setCheckedArray(
      !allChecked ? data?.map((d) => d.rows.map((elem) => elem.id)).flat() : []
    );
  };

  const calculatedWidth = `${100 / columns.length}%`;

  return (
    <div className={st.wrap}>
      <div className={st.firstTableWrap}>
        <table className={st.table}>
          <thead>
            <tr className={st.trHead}>
              {columns.map(({ width, position, key, title, render }, index) => {
                Elements.push({ key, render, width, position });
                return (
                  <td
                    style={{
                      width: width ?? calculatedWidth,
                    }}
                    className={st.headCells}
                    key={key}
                  >
                    {index === 0 && showCheckbox && (
                      <CheckBox
                        index={title}
                        isCheck={allChecked}
                        onChange={onChange}
                        visibilityClassNames={
                          allChecked
                            ? [st.checkedHead, st.checkHead]
                            : [st.checkHead, ""]
                        }
                      />
                    )}
                    <div style={{ float: position }}>{title}</div>
                  </td>
                );
              })}
            </tr>
          </thead>
        </table>
      </div>
      <div
        className={concatClass(
          st.secondTableWrap,
          isLoading ? st.secondTableWrap__noScroll : ""
        )}
      >
        {isLoading && <Loader />}
        {data?.length === 0 ? (
          <Empty />
        ) : (
          <table className={st.table}>
            {data?.map(({ rows, key, title, quantity }) => {
              return (
                <tbody key={key}>
                  {title && (
                    <tr>
                      <td className={st.titleCell}>
                        <div className={st.title}>
                          {title} <span>{quantity}</span>
                        </div>
                      </td>
                    </tr>
                  )}
                  {rows.map((row, index) => {
                    const elemsInRow = Object.keys(row);
                    const orderedElems = keys.reduce<
                      ([string, string] | [undefined])[]
                    >((array, key) => {
                      return elemsInRow.includes(key)
                        ? [...array, [key, (row as any)[key]]]
                        : [...array, [undefined]];
                    }, []);
                    return (
                      <tr className={st.tr} key={index}>
                        {orderedElems.map(([key, value = ""], ind) => {
                          const options = Elements?.find(
                            (elem) => elem.key === key
                          );
                          return orderedElems?.[ind][0] !== key ? null : (
                            <TableCell
                              renderElement={options?.render}
                              style={{
                                width: options?.width ?? calculatedWidth,
                                float: options?.position,
                              }}
                              key={ind}
                              showCheckbox={showCheckbox}
                              visibilityClassNames={[st.check, st.checked]}
                              isCheck={allChecked}
                              onCheckTest={onCheckTest}
                              index={ind}
                              data={{ value, row }}
                            />
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              );
            })}
          </table>
        )}
      </div>
    </div>
  );
};
