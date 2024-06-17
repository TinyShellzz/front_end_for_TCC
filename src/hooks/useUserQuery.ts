import { useQuery } from "react-query";
import axios from "axios";

const useUserQuery = () => {
  return useQuery({
    queryFn: () =>
      axios({
        method: "get",
        url: "http://localhost/backend/get_user",
      }).then((res) => res.data),
    queryKey: ["user"],
    refetchOnWindowFocus: false,
    enabled: false, // 用refetch()执行
  });
};
export default useUserQuery;
