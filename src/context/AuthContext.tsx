import { auth } from "@/lib/firebase";
import { onAuthStateChanged, User } from "firebase/auth";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";

interface AuthType{
    user: any;
    accessToken: string | undefined;
}
const AuthContext = createContext<AuthType>({user: null, accessToken: ''});

export const useAuth = () => useContext(AuthContext);

export function AuthProvider(
    {children} : {children: ReactNode}
){
    const [user, setUser] = useState<User|null>(null);
    const [accessToken, setAccessToken] = useState('');
    const navigate = useNavigate();
    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, (curr) => {
            if(!curr){
                navigate("/");
            }
            setUser(curr);
            curr?.getIdToken().then(token => setAccessToken(token)).catch(e => console.log(e));
        });
        return unsubscribe;
    }, []);
    console.log(accessToken);
    return <AuthContext.Provider value={{user, accessToken}}>
        {children}
    </AuthContext.Provider>
}