import {GenericResponse, LoginResponse, NewUser, User} from "@/types/types.ts";
import clientAxios, {onError, onSuccess} from "@/api/axios.ts";

export async function login(user: User){
    const resData: LoginResponse = await clientAxios.post("/auth/login", user).then(onSuccess).catch(onError);
    localStorage.setItem("accessToken", resData.accessToken)
    return resData
}
export async function createUser(new_user: NewUser){
    const resData: GenericResponse = await clientAxios.post("/auth/create", new_user).then(onSuccess).catch(onError);
    return resData;
}
export async function requestPasswordResetLink(email:string){
    await clientAxios.get("/auth/password/reset?email="+email).then(onSuccess).catch(onError);
}
export async function resetPassword(email:string, newPassword:string, expiresAt:string){
    await clientAxios.post(`/auth/password/new/submit/email=${email}/expiresAt=${expiresAt}`, newPassword).then(onSuccess).catch(onError);
}
export async function verifyUser(path:string){
    const resData : GenericResponse = await clientAxios.get(path).then(onSuccess).catch(onError);
    return resData;
}
export async function resendVerification(email:string){
    await clientAxios.get(`/auth/resendVerify?email=${email}`).then(onSuccess).catch(onError);
}
export async function fetchGroups(){
    const resData : GenericResponse = await clientAxios.get("/group/").then(onSuccess).catch(onError);
    return resData
}
export async function fetchInvites(){
    const response = await clientAxios.get("/group/invites").then(onSuccess).catch(onError);
    return response;
}