export interface GroupData{
    id:number;
    groupName:string;
    groupDescription:string;
    members:MemberType[];
    admin:boolean;
}
export interface MemberType{
    firstName:string;
    lastName:string;
    email:string;
}
export interface NewGroupType{
    groupName:string;
    groupDescription:string;
}
export interface NewGroupResponse{
    groupId:number;
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
export interface ErrorType{
    message:string;
}
export interface InviteData{
    groupId:number;
    receiver:string;
}
export interface InvitationResponse{
    id:number;
    groupName: string;
    email: string;
    status: string;
}
export interface InvitationStatusType{
    id:number;
    status:string;
}
export interface CreateUserType{
    uid:string;
    email:string;
    firstName:string;
    lastName:string;
}
export interface ExpenseType{
    expenseName:string;
    expenseDesc:string;
    amount:Number;
    groupId:number;
    paidBy:string;
    splitAmong:string[];
}