import { useQuery } from "@tanstack/react-query";
import getDataDashboard from "../actions/get-data-dashboard.action";

export const useDashboard = () => {
  return useQuery({
    queryKey: ["movements"],
    queryFn: () => getDataDashboard(),
    staleTime: 1000 * 60 * 5,
  });
};