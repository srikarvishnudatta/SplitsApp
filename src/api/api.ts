import {
    GroupData,
    InviteData,
    InvitesType,
    LoginData,
    LoginResponse,
    NewGroupType,
    PostResponse,
    SignupData
} from "@/types/types";

const BASE_URL = "http://localhost:8080/";

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
        const resData: PostResponse = await resposne.json();
        return resData;
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
async function createGroup(data: NewGroupType):Promise<PostResponse>{
    const at = localStorage.getItem("accessToken") || '';
    const response = await myFetch(BASE_URL + "groups/new",data,"POST",at );
    if (response.status === 401){
        return Promise.reject({message: "Invalid Access Token"});
    }
    return await response.json();
}
async function sendInvite(inviteData: InviteData):Promise<PostResponse>{
    const at = localStorage.getItem("accessToken") || '';
    const response = await myFetch(BASE_URL + "groups/invite", inviteData, "POST", at);
    return await response.json();
}
async function fetchGroup(groupId:string):Promise<GroupData>{
    const at = localStorage.getItem("accessToken") || '';
    const response = await myFetch(BASE_URL + "groups/"+groupId, undefined, "GET", at);
    if (response.status === 401){
        return Promise.reject({message: "Invalid Access Token"});
    }
    return await response.json();
}
async function fetchAllInvites():Promise<{invites: InvitesType[]}>{
    const at = localStorage.getItem("accessToken") || '';
    const response = await myFetch(BASE_URL + "groups/invites", undefined, "GET", at);
    if (response.status === 401){
        return Promise.reject({message: "Invalid Access Token"});
    }
    return await response.json();
}
async function acceptInvite(groupId:number){
    const at = localStorage.getItem("accessToken") || '';
    const response = await myFetch(BASE_URL + "groups/invites/accept/"+groupId,undefined, "GET", at);
    if (response.status === 401){
        return Promise.reject({message: "Invalid Access Token"});
    }
    return await response.json();
}
export { login, signUp, fetchHome, createGroup, sendInvite, fetchGroup, fetchAllInvites, acceptInvite}