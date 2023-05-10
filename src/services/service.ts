export interface Fetch {
  route?: string;
  body?: { [k: string]: string | number | boolean | null } | null;
}

interface Fetching extends Fetch {
  method: "POST" | "GET";
}
const queryBuilder = (body: Fetch["body"]) => {
  if (body) {
    const isValue = Object.entries(body).filter(
      ([_, value]) => Boolean(value) && value !== "undefined"
    );
    const values = isValue.map(([k, v]) => `${k}=${String(v)}&`);
    const valuesString = values.join("").slice(0, -1);
    return valuesString;
  }
  return "";
};

const setQueryString = (
  baseUrl: string = "",
  route: string = "",
  queryStr: string
) => {
  baseUrl = baseUrl ? `/${baseUrl}` : "";
  route = route ? `/${route}/` : "";
  return `${process.env.REACT_APP_REMOTE}${baseUrl}${route}?${queryStr}`;
};

export const service = (baseUrl?: string) => {
  const fetching = ({ body, route, method }: Fetching) =>
    fetch(setQueryString(baseUrl, route, queryBuilder(body)), {
      method,
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
      },
    }).then((res) => {
      const type = res.headers.get("Content-Type");
      if (type === "application/json") {
        return res.json();
      } else if (
        type === "audio/mpeg, audio/x-mpeg, audio/x-mpeg-3, audio/mpeg3"
      ) {
        /**
         * не получилось взять имя:( Content-Disposition: filename="record.mp3"
         */
        return res.blob();
      }
    });

  return {
    get: async (params?: Fetch) => await fetching({ ...params, method: "GET" }),
    post: async (params?: Fetch) =>
      await fetching({ ...params, method: "POST" }),
  };
};
