import { createContext, useEffect, useState } from "react"
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth"
import { app } from "./firebase.config"

export const AuthContext = createContext(null)
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const AuthProvider = ({children}) =>{
    const[user, setUser]= useState(null);
    const[loading, setLoading]= useState(true);

    const signUp = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googlsignUp = () =>{
        setLoading(true)
        return signInWithPopup(auth, provider)
    }
    const signout = () =>{
        return signOut(auth)
        setLoading(false)
    }

    useEffect(()=>{
       const unsubscribed = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
            console.log('current user is ', currentUser)
            setLoading(false)
        })
        return () =>{
            return unsubscribed();
        }
    },[])
    const authinfo = {
        user,
        loading,
        signUp,
        signIn,
        googlsignUp,
        signout
    }
    return(
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    )
};
export default AuthProvider;