import { Table } from "components/Table/Table";
import { CallsFilter } from "Pages/Calls/components/CallFilter/CallsFilter";
import { columns } from "Pages/Calls/configs/columns";
import React, { useState } from "react";
import { useCalls } from "services/Calls";
import { Fetch } from "services/service";

export const Calls = () => {
  const [filter, setFilter] = useState<Fetch["body"]>();
  const { isLoading, data } = useCalls(filter);

  // при выборе возвращает массив идшников выбранных элементов
  const onCheckRows = (arr?: string[]) => console.log(arr);
  return (
    <div>
      <CallsFilter getFilterData={setFilter} />
      <Table
        data={data}
        columns={columns}
        isLoading={isLoading}
        onCheckRows={onCheckRows}
      />
    </div>
  );
};
