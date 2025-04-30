import { createUser } from "@/api/api_v2";
import { LoginData, SignupData } from "@/types/types";
import { initializeApp} from "firebase/app";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut, updateProfile} from "firebase/auth";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
  };  
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

async function signIn(data: LoginData){
    try {
        const response = await signInWithEmailAndPassword(auth, data.email, data.password);
        return response.user;
    } catch (error) {
        throw error;
    }
}
async function signUp(data: SignupData){
    try {
        const response = await createUserWithEmailAndPassword(auth, data.email, data.password);
        const user = response.user;
        await updateProfile(user, {
            displayName: `${data.first_name} ${data.last_name}`
        });
        await createUser({id: user.uid, email: user.email!, firstName: data.first_name, lastName: data.last_name});
        return user;
    } catch (error) {
        throw error
    }
}
async function logout(){
    await signOut(auth);
}

export {app, auth, signIn, signUp, logout}