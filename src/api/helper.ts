import {LoginData, LoginResponse, SignupData} from "@/types/types.ts";

type Controller<T> = (
    data?:T
) => Promise<any>

const errorWrapper = <T>(controller: Controller<T>):Controller<T> => async (data?: T) =>{
    try {
        await controller(data);
    } catch (error) {
        console.log(error);
    }
}
const loginDup = errorWrapper(async (loginData?: LoginData)=>{
    const response = await myFetch(BASE_URL+"auth/login",loginData, "POST");
    const resData : LoginResponse =  await response.json();
    localStorage.setItem("accessToken", resData.accessToken);
});
const signupDup = errorWrapper(async (signupData?: SignupData) =>{
    const response = await myFetch(BASE_URL + "auth/signup", signupData, "POST");
    return await response.json();
});