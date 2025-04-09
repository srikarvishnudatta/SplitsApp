import { LoginData, SignupData } from "@/types/types";

const BASE_URL = "http://localhost:4000/";

async function myFetch<T>(url:string, body:T, method = "GET", options?:RequestInit){
    return await fetch(url, {
        method,
        body: JSON.stringify(body),
        ...options
    });
}

async function login(loginData: LoginData){
    const response = await myFetch(BASE_URL+"login",loginData, "POST");
    try {
        return await response.json();
    } catch (error) {
        console.log(error);
    }
}
async function signUp(signUpData: SignupData){
    const resposne = await myFetch(BASE_URL + "signup", signUpData, "POST");
    try{
        return await resposne.json();
    }catch(error){
        console.log(error);
    }
}
type Controller<T> = (
    data:T
) => Promise<any>

const errorWrapper = <T>(controller: Controller<T>):Controller<T> => async (data: T) =>{
    try {
        await controller(data);
    } catch (error) {
        console.log(error);
    }
}
const loginDup = errorWrapper(async (loginData: LoginData)=>{
    const response = await myFetch(BASE_URL+"login",loginData, "POST");
    try {
        return await response.json();
    } catch (error) {
        console.log(error);
    }
})