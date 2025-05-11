import axios from "axios";
import { BASE_URL } from "@/lib/endpoints";
import { auth } from "@/lib/firebase";
const axiosInstance = axios.create({
    baseURL: BASE_URL
});

axiosInstance.interceptors.request.use(async (config) =>{
    const user = auth.currentUser;
    if(user){
        const token = await user.getIdToken();
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => Promise.reject(error));

axiosInstance.interceptors.response.use((response) => response, async (error) =>{
    if(error.response && error.response.status === 401){
        await auth.signOut();
        window.location.href = "/";
        return;
    }
    return Promise.reject(error);
});

export default axiosInstance;