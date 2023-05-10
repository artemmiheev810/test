import { useQuery } from "@tanstack/react-query";
import { service } from "services/service";

export const useGetRecord = (
  record: string,
  partnership_id: number,
  startLoading: boolean,
  isLoaded: boolean
) => {
  const { data, isLoading } = useQuery({
    queryKey: ["records"],
    queryFn: () =>
      service("getRecord").post({ body: { record, partnership_id } }),
    enabled: startLoading && !!record && !isLoaded,
    select: URL.createObjectURL,
    retry: false,
  });

  return { data, isLoading };
};
