import axios from "axios";

const IsmApi = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})

export {IsmApi}