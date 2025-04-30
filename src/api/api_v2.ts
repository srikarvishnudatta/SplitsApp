import { BASE_URL } from "@/lib/constants";
import { CreateUserType, InvitationStatusType, InviteData, NewGroupResponse, NewGroupType } from "@/types/types";

// create user
async function createUser(newUser: CreateUserType){
    const response = await fetch(BASE_URL + "user/create-if-not-exists/", {
        headers:{
            "Content-type":"application/json"
        },
        method:"POST",
        body: JSON.stringify(newUser)
    });
    return response;
}
// create a new group
async function createGroup(accessToken:string, group: NewGroupType): Promise<NewGroupResponse>{
    const response = await fetch(BASE_URL + "groups/",{
        headers:{
            "Content-type":"application/json",
            Authorization:`Bearer ${accessToken}`
        },
        method:"POST",
        body: JSON.stringify(group)
    });
    if(!response.ok){
        throw new Error("Cannot fetch the data : " + response.status)
    }
    return await response.json();
}
async function allGroups(accessToken:string){
    const response = await fetch(BASE_URL + "groups/",{
        headers:{
            "Content-type":"application/json",
            Authorization:`Bearer ${accessToken}`
        },
        method:"GET"
    });
    if(!response.ok) throw new Error("Something went wrong");
    return await response.json();
}
async function groupById(accessToken:string, id:number){
    const response = await fetch(BASE_URL + "groups/"+id,{
        headers:{
            "Content-type":"application/json",
            Authorization:`Bearer ${accessToken}`
        },
        method:"GET"
    });
    if(!response.ok) throw new Error("Something went wrong");
    return await response.json();

}
async function sendInvite(accessToken:string, data:InviteData){
    const response = await fetch(BASE_URL + "invitations/",{
        headers:{
            "Content-type":"application/json",
            Authorization:`Bearer ${accessToken}`
        },
        method:"POST",
        body: JSON.stringify(data)
    });
    if(!response.ok) throw new Error("Something went wrong");
}
async function allInvites(accessToken:string){
    const response = await fetch(BASE_URL + "invitations/",{
        headers:{
            "Content-type":"application/json",
            Authorization:`Bearer ${accessToken}`
        },
        method:"GET"
    });
    if(!response.ok) throw new Error("Something went wrong");
    return await response.json();
}
async function invitationCount(accessToken:string): Promise<{count: number}>{
    const response = await fetch(BASE_URL + "invitations/count",{
        headers:{
            "Content-type":"application/json",
            Authorization:`Bearer ${accessToken}`
        },
        method:"GET"
    });
    if(!response.ok) throw new Error("Something went wrong");
    return await response.json();
}
async function updateInvite(accessToken:string, data:InvitationStatusType){
    const response = await fetch(BASE_URL + "invitations/"+data.id,{
        headers:{
            "Content-type":"application/json",
            Authorization:`Bearer ${accessToken}`
        },
        method:"PUT",
        body: JSON.stringify({status: data.status})
    });
    if(!response.ok) throw new Error("invalid status")
}
export {createUser, createGroup, allGroups, groupById, sendInvite, invitationCount, allInvites, updateInvite};