import { IsmApi } from "@/api/IsmApi"
import type { AuthResponse } from "../interfaces/auth.response"

export const registerAction = async (name:string, email:string, password:string,businessName:string):Promise<AuthResponse> => {
    try{
        const {data} = await IsmApi.post<AuthResponse>('/auth/register',{
            name,
            email,
            password,
            businessName
        })

        // console.log({data})
        
        return data
    }catch(error){
        console.log(error);
        throw(error)
    }

}