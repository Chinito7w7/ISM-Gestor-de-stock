import { IsmApi } from "@/api/IsmApi";
import type { Movement } from "../interfaces/movements.interface";

const getMovementsAction = async ():Promise<Movement[]> => {
    const { data } = await IsmApi.get<Movement[]>("/movements")
    return data
}

export default getMovementsAction