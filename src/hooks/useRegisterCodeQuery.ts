import { useQuery } from "react-query";
import axios from "axios";

const useRegisterCodeQuery = (data: { email: string; phone: string }) => {
  return useQuery({
    queryFn: () =>
      axios({
        method: "post",
        url: "http://127.0.0.1:8000/backend/get_register_code",
        data: data,
      }).then((res) => {
        let ret = res.data;

        console.log("ret: " + ret);

        return ret;
      }),
    queryKey: ["code"],
    refetchOnWindowFocus: false,
    enabled: false,
  });
};
export default useRegisterCodeQuery;
