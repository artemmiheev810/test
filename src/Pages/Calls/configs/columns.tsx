import { TableColumns } from "components/Table/Table";
import {
  CallCollaborator,
  CallPlayer,
  CallStatus,
  CallTime,
} from "components/TableCells";
import React from "react";
import { Call } from "services/Calls";

export const columns: TableColumns<Call>[] = [
  {
    key: "type",
    title: "Тип",
    render: ({ value, row }) => <CallStatus status={row.status} type={value} />,
    width: 100,
  },
  {
    key: "time",
    title: "Время",
    width: 100,
    render: ({ value }) => <CallTime value={value} />,
  },
  {
    key: "collaborator",
    title: "Сотрудник",
    render: ({ row }) => <CallCollaborator data={row} />,
  },
  {
    key: "call",
    title: "Звонок",
    render: ({ value }) => <div>{value} </div>,
    width: 300,
  },
  {
    key: "source",
    title: "Источник",
    render: ({ value }) => <div>{value} </div>,
    width: 214,
  },
  {
    key: "mark",
    title: "Оценка",
    width: 150,
  },
  {
    key: "record",
    title: "Длительность",
    position: "right",
    width: 430,
    render: ({ value, row }) => (
      <CallPlayer
        record={value}
        duration={row.duration}
        partnership_id={row.partnership_id}
      />
    ),
  },
];
