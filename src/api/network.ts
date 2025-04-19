import { InviteData, NewGroupType, PostResponse } from "@/types/types";

const BASE_URL = "http://localhost:8080/";

async function getFetch<T>(url:string, accessToken?:string, options?:RequestInit): Promise<T>{
    const response = await fetch(BASE_URL + url,{
        headers: {
            "Content-type":"application/json",
            "Authorization": `Bearer ${accessToken}`
        },
        method:"GET",
        ...options
    });
    if(!response.ok){
        throw new Error("Cannot fetch the data : " + response.status)
    }
    return await response.json()
}
async function postFetch<T,R>(url:string, body:T,accessToken?:string, options?:RequestInit):Promise<R>{
    const response = await fetch(BASE_URL + url,{
        headers: {
            "Content-type":"application/json",
            "Authorization": `Bearer ${accessToken}`
        },
        method:"POST",
        body: JSON.stringify(body),
        ...options
    });
    if(!response.ok){
        throw new Error("Cannot post content: " + response.status)
    }
    return await response.json();
}
async function createGroup(data: NewGroupType, accessToken:string){
    return await postFetch<NewGroupType, PostResponse>("api/groups/new", data, accessToken);
}
async function sendInvite(inviteData:InviteData, accessToken:string){
    return await postFetch("api/groups/invite", inviteData, accessToken);
}
async function fetchGroups(accessToken:string){
    return await getFetch("api/groups", accessToken);
}
export {createGroup, sendInvite, fetchGroups}