import { auth } from "@/lib/firebase";
import { onAuthStateChanged, User } from "firebase/auth";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";

interface AuthType{
    user: any;
}
const AuthContext = createContext<AuthType>({user: null});

export const useAuth = () => useContext(AuthContext);

export function AuthProvider(
    {children} : {children: ReactNode}
){
    const [user, setUser] = useState<User|null>(null);
    const navigate = useNavigate();
    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, (curr) => {
            if(!curr){
                navigate("/");
            }
            setUser(curr)
        });
        return unsubscribe;
    }, []);
    return <AuthContext.Provider value={{user}}>
        {children}
    </AuthContext.Provider>
}