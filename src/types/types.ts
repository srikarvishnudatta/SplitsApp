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