

export interface ProfileType{
    first_name:string;
    last_name:string;
    email:string;
    invitesCount:number;
}
export interface GroupData{
    group_id:number;
    name:string;
    owner:boolean;
    members: number[];
    created_at:string;
}
export interface NewGroupType{
    group_name:string;
    description:string;
}
export interface HomeType{
    groupData: GroupData[]
}
export interface LoginData{
    email:string;
    password:string;
}
export interface LoginResponse{
    accessToken:string;
}
export interface SignupData{
    email:string;
    password:string;
    first_name:string;
    last_name:string;
}
export interface PostResponse{
    message:string;
    id?:number;
}
export interface ErrorType{
    message:string;
}
export interface InviteData{
    groupId:number;
    receiver:string;
}
export interface InvitesType{
    groupId: number
    groupName: string
    senderName: string
}