import axios, {AxiosError, AxiosResponse, InternalAxiosRequestConfig} from "axios"
import globalRouter from "@/lib/globalRouter.ts";

const clientAxios = axios.create({
    baseURL:"http://localhost:4000/",
});

export const onSuccess = (res: AxiosResponse) => {
    return res
}
export const onError = (err: AxiosError) =>{
    return Promise.reject({
        message: err.message,
        code: err.code,
        response: err.response
    })
}
clientAxios.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        const accessToken = localStorage.getItem("accessToken")
        if (accessToken){
            config.headers.Authorization = `Bearer ${accessToken}`
        }
        return config
    },
    (err: AxiosError) =>{
        return Promise.reject(err)
    }
)

clientAxios.interceptors.response.use(
    (response) => response.data,
    async (error) => {
        const {response} = error
        const {status, data} = response || {}
        if (status === 401 && data?.errorCode === "Invalid_Access_Token" && globalRouter.navigate){
            // if any error navigate to /login.
            globalRouter.navigate("/login")
        }
        return Promise.reject(error);
    }
)
export default clientAxios;