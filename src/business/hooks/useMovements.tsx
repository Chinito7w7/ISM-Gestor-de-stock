import getMovementsAction from "../actions/get-movements.action";
import { useQuery } from "@tanstack/react-query";
export const useMovements = () => {
  return useQuery({
    queryKey:["movements","products"],
    queryFn:() => getMovementsAction(),
    staleTime:1000 * 60 * 5
  })
}
