import { CreateUserType, 
    InvitationResponse, 
    InvitationStatusType, 
    InviteData, 
    NewGroupResponse, 
    NewGroupType } from "@/types/types";
import axiosInstance from "./axios";
import { CREATE_USER, GROUP, INVITES } from "@/lib/endpoints";

async function createIfNotExists(newUser: CreateUserType){
    return await axiosInstance.post(CREATE_USER, newUser);
}
async function createGroup(newGroupData: NewGroupType): Promise<NewGroupResponse>{
    return (await axiosInstance.post(GROUP, newGroupData)).data;
}
async function getAllGroups(){
    return await axiosInstance.get(GROUP);
}
async function getGroupById(id:number){
    return await axiosInstance.get(`${GROUP}${id}`)
}
async function sendInvite(data: InviteData){
    return await axiosInstance.post(`${INVITES}new`, data);
}
async function getAllInvites(): Promise<{
    sentInvitations: InvitationResponse[],
    receivedInvitations: InvitationResponse[]
  }>{
    return await axiosInstance.get(`${INVITES}`);
}
async function updateInvite(data:InvitationStatusType){
    return await axiosInstance.put(`${INVITES}${data.id}`, data);
}
async function getInvitesCount(){
    return await axiosInstance.get(`${INVITES}count`);
}
export {createIfNotExists, createGroup, getAllGroups, getGroupById, getAllInvites,
     sendInvite, updateInvite, getInvitesCount};