export interface User{
    email:string;
    password:string;
}
export interface NewUser extends User{
    first_name:string;
    last_name:string;
}
export interface LoginResponse{
    accessToken:string;
}
export interface GenericResponse{
    msg:string;
}
export interface ResponseUser{
    first_name:string;
    last_name:string;
    email:string;
    invitesCount:number;
}
export interface ProfileType{
    first_name:string;
    last_name:string;
    email:string;
    invitesCount:number;
}
export interface GroupResponseType{
    group_id: number;
    name: string;
    members:string;
}
export interface GroupCardType extends GroupResponseType{
    link:string;
}
export interface GroupType{
    id:number;
    group_name:string;
    owner:number;
    group_members: number[];
    created_at:string;
}
export interface LoginData{
    email:string;
    password:string;
}
export interface SignupData{
    email:string;
    password:string;
    first_name:string;
    last_name:string;
}