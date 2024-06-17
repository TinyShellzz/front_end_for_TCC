import { useQuery } from "react-query";
import axios from "axios";

const useRegisterCodeQuery = (data: { email: string; phone: string }) => {
  return useQuery({
    queryFn: () =>
      axios({
        method: "post",
        url: "http://localhost/backend/get_register_code",
        data: data,
      }).then((res) => res.data),
    queryKey: ["code"],
    refetchOnWindowFocus: false,
    enabled: false,
  });
};
export default useRegisterCodeQuery;
