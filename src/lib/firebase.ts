import { LoginData, SignupData } from "@/types/types";
import { initializeApp} from "firebase/app";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, updateProfile} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBzEFBI695PXMUMDgLV2fw2O6z4nz3VH6M",
    authDomain: "splitsapp-f6d05.firebaseapp.com",
    projectId: "splitsapp-f6d05",
    storageBucket: "splitsapp-f6d05.firebasestorage.app",
    messagingSenderId: "204034234722",
    appId: "1:204034234722:web:f431d26f7dd4075ea4b43b",
    measurementId: "G-HHQ24H6VGB"
}
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
        return user;
    } catch (error) {
        throw error
    }
}

export {app, auth, signIn, signUp}