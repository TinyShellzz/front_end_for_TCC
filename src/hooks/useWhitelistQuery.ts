import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

function useWhitelistQuery() {
  const { page } = useParams();

  return useQuery(`/backend/whitelist/${page}`, {
    placeholderData: { profile: {} },
  });
}

export default useWhitelistQuery;
