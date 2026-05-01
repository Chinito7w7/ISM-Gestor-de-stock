import { IsmApi } from "@/api/IsmApi";
import type { DashboardResponse } from "../interfaces/dashboard.data.interface";

const getDataDashboard = async ():Promise<DashboardResponse> => {
    const {data} = await IsmApi.get<DashboardResponse>("/dashboard")
    return data
}

export default getDataDashboard