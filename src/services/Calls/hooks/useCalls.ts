import { useQuery } from "@tanstack/react-query";
import { callsTransform } from "services/Calls/utils/callsTransform";
import { Fetch, service } from "services/service";

export const useCalls = (filter: Fetch["body"] | null = null) => {
  const { data, isLoading } = useQuery({
    queryKey: ["calls", filter],
    queryFn: () => service("getList").post({ body: filter }),
    select: callsTransform,
  });

  return { data, isLoading };
};
