/* eslint-disable react/prop-types */
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";


export const  AuthContex = createContext(null)


// social auth provider
const  googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider()


 
const AuthProviders = ({children}) => {
const [user, setUser] = useState(null)

const [loading, setLoading] = useState(true)
console.log(user);
const createUser = (email,password)=>{
    return createUserWithEmailAndPassword(auth, email, password)
}


const loginUser = (email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
}

// google login
const googleLogin  =()=>{
    setLoading(true)
 return  signInWithPopup(auth,  googleProvider)
}

// github login
const githubLogin = () =>{
    setLoading(true)
return signInWithPopup(auth,  githubProvider)
}



// logout
const logout = () =>{
    
    setUser(null)
    signOut(auth)
}

// observer
useEffect(()=>{
 const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
            setLoading(false)
        setUser(user)
        } 
      });
      return () => unsubscribe()
},[])



    const authInfo ={
        createUser,
        loginUser,
        googleLogin,
        githubLogin,
        logout,
        user,
        loading
    }
    return (
        <div>
            <AuthContex.Provider value={authInfo}> 
                 {children}
                 </AuthContex.Provider>
          
        </div>
    );
};

export default AuthProviders;