import { useQuery } from "react-query";
import axios from "axios";
import { config } from "../config/config";

const useDocumentQuery = (data: { name: string | undefined }) => {
  return useQuery({
    queryFn: () =>
      axios({
        method: "post",
        url: "http://localhost/backend/get_document",
        data: data,
      }).then((res) => {
        if (data.name) config.content_name = data.name;
        return res.data;
      }),
    queryKey: ["doc"],
    refetchOnWindowFocus: false,
    enabled: false, // 用refetch()执行
  });
};
export default useDocumentQuery;
