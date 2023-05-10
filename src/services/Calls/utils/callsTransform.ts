import { TableData } from "components/Table/Table";
import moment from "moment";
import { Call } from "services/Calls/types/Calls";

export const callsTransform = (data: {
  results: any[];
  total_rows: number;
}): TableData<Call>[] => {
  const justDates = Array.from(
    new Set(data.results.map(({ date_notime }) => date_notime))
  );

  return justDates.map((date) => {
    const key = date;
    const title =
      date === moment(new Date().toString()).format("YYYY-MM-DD")
        ? undefined
        : date;

    const rows = data.results.reduce((acc, call) => {
      const obj: Call = {
        call: call.from_number,
        record: !!call.record ? call.record : undefined,
        duration:
          call.time /** почему-то эта длительность отличается от фактической/record везде один */,
        mark: "no data" /** не нашел что выводить (в описание к апи тоже искал, что может подойти под "оценку") */,
        source: call.source,
        status: call.status,
        type: call.in_out.toString(),
        time: call.date.split(" ")[1].slice(0, -3),
        collaborator: call.person_avatar,
        id: call.id,
        person_id: call.person_id,
        person_name: call.person_name,
        person_surname: call.person_surname,
        partnership_id: call.partnership_id,
      };
      return date === call.date_notime ? [...acc, obj] : acc;
    }, []);

    return {
      key,
      rows,
      title:
        title === moment().subtract(1, "days").format("YYYY-MM-DD")
          ? "Вчера"
          : title,
      quantity: rows.length,
    };
  });
};
