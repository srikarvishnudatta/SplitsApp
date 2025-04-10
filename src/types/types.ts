

export interface ProfileType{
    first_name:string;
    last_name:string;
    email:string;
    invitesCount:number;
}

export interface GroupData{
    group_id:number;
    name:string;
    owner:number;
    members: number[];
    created_at:string;
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
}
export interface ErrorType{
    message:string;
}