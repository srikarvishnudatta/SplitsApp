import { CreateUserType, InvitationStatusType, InviteData, NewGroupType } from "@/types/types";
import axiosInstance from "./axios";
import { CREATE_USER, GROUP, INVITES } from "@/lib/endpoints";

async function createIfNotExists(newUser: CreateUserType){
    return await axiosInstance.post(CREATE_USER, newUser);
}
async function createGroup(newGroupData: NewGroupType){
    return await axiosInstance.post(GROUP, newGroupData);
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
async function updateInvite(data:InvitationStatusType){
    return await axiosInstance.put(`${INVITES}${data.id}`, data);
}
export {createIfNotExists, createGroup, getAllGroups, getGroupById, sendInvite, updateInvite};