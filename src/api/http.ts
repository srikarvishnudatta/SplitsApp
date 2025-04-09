import {GenericResponse, GroupResponseType, LoginResponse, NewUser, ProfileType, User} from "@/types/types.ts";
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
export async function fetchProfile(token:string){
    // fetch data from /profile
    const response:ProfileType = await clientAxios.get("/profile", {
        headers:{
            Authorization:`Bearer ${token}`
        }
    }).then(onSuccess).catch(onError);
    return response;
}
export async function fetchDashboardContext(){
    // fetch data from /home
}
export async function fetchGroups(){
    const groups: GroupResponseType[] = await clientAxios.get("/groups").then(onSuccess).catch(onError);
    return groups;
}
export async function fetchGroupById(groupId:string){
    return await clientAxios.get("/groups/"+groupId).then(onSuccess).catch(onError);
}
export async function createGroup(group_name:string){
    await clientAxios.post("/groups/new", {group_name}).then(onSuccess).catch(onError);
}
export async function deleteGroup(group_id:string){
    await clientAxios.delete("/groups/"+group_id).then(onSuccess).catch(onError);
}
export async function fetchTransactions(){
    
}