import { ResponseUser } from "@/types/types";
import { createContext, useContext, useState } from "react";

export interface UserContextType{
    user: ResponseUser;
    setUser: React.Dispatch<React.SetStateAction<ResponseUser>>;
}

const UserContext = createContext<UserContextType>({
    user: {
        first_name:"",
        last_name:"",
        email:"",
        invitesCount: 0
    },
    setUser: () => {}
});

export default function UserContextProvider({children} : {children: React.ReactNode}){
    const [user, setUser] = useState<ResponseUser>({
        first_name:"",
        last_name:"",
        email:"",
        invitesCount: 0
    })
    return <UserContext.Provider value={{user, setUser}}>
        {children}
    </UserContext.Provider>
}

function useUser(){
    return useContext(UserContext)
}



export {UserContext, useUser}