import { useQuery } from "react-query";
import axios from "axios";

const useWhitelistQuery = (data: {
  keyword: string | undefined;
  page: number;
}) => {
  return useQuery({
    queryFn: () =>
      axios({
        method: "post",
        url: "http://localhost/backend/get_whitelist",
        data: data,
      }).then((res) => res.data),
    queryKey: ["wl"],
    refetchOnWindowFocus: false,
    enabled: false, // 用refetch()执行
  });
};
export default useWhitelistQuery;
