import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase.init';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
export const BackgroundContext=createContext()

const auth=getAuth(app);
const BackGroundProvider = ({children}) => {
    const [backgroundImage,setBackgroundImage]=useState('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/e2/f8/43/longest-sea-beach-in.jpg?w=700&h=-1&s=1');
    const [name,setName]=useState("Cox's Bazar");
    const [loading,setLoading]=useState(false);
    const [user,setUser]=useState(null)
    const signIn=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const updateUserProfile=(profile)=>{
        return updateProfile(auth.currentUser,profile)
    }
    const logOut=()=>{
        setLoading(true)
        return signOut(auth)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser)
                console.log('User signed in:', currentUser);
            } else {
                
                console.log('User not signed in');
            }
        });
    
        return () => unsubscribe();
    }, []);

    const bgInfo={backgroundImage,setBackgroundImage,name,setName,createUser,signIn,updateUserProfile,loading,user,logOut}
    
    return (
        
        <div>
            <BackgroundContext.Provider value={bgInfo}>{children}</BackgroundContext.Provider>
            
        </div>
    );
};

export default BackGroundProvider;