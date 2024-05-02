import { createContext, useState } from "react";
import auth from "../Firebase/firebase.config";
import { createUserWithEmailAndPassword } from "firebase/auth";



export const AuthContex = createContext()

const AuthProvider = ({children}) => {
          
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

const crateUser = (email,password)=>{
return createUserWithEmailAndPassword(auth,email,password)
}
const authInfo = ()=>{
    user,
    loading,
    crateUser
}

    return (
        <AuthContex.Provider value={authInfo}>

                    {children}

        </AuthContex.Provider>
    );
};

export default AuthProvider; 