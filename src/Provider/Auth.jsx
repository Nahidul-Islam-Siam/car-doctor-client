import { createContext, useContext } from "react";
import { AuthContex } from "./AuthProvider";


const Auth = () => {
    const all = useContext(AuthContex)
    return all
};

export default Auth;