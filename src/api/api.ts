import { LoginData, LoginResponse, SignupData } from "@/types/types";

const BASE_URL = "http://localhost:4000/";

async function myFetch<T>(url:string, body?:T, method = "GET", accessToken?:string, options?:RequestInit){
    const headers = new Headers({
        Accept: "application/json",
        "Content-type":"application/json",
    });
    if (accessToken){
        headers.set("Authorization", `Bearer ${accessToken}`)
    }
    return await fetch(url, {
        method,
        body: body? JSON.stringify(body) : undefined,
        headers:headers,
        ...options,
    });
}
async function login(loginData: LoginData){
    try {
        const response = await myFetch(BASE_URL+"auth/login",loginData, "POST");
        const resData : LoginResponse =  await response.json();
        localStorage.setItem("accessToken", resData.accessToken);
    } catch (error) {
        console.log(error);
    }
}
async function signUp(signUpData: SignupData){
    try{
        const resposne = await myFetch(BASE_URL + "auth/signup", signUpData, "POST");
        return await resposne.json();
    }catch(error){
        console.log(error);
    }
}
async function fetchHome(){
    const at = localStorage.getItem("accessToken") || '';
        const response = await myFetch(BASE_URL + "home", undefined, "GET", at);
        if (response.status === 401){
            return Promise.reject({message: "Invalid Access Token"});
        }
        return await response.json();
}

export { login, signUp, fetchHome}