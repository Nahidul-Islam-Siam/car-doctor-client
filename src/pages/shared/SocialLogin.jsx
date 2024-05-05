

// import UseAuth from "../Hook/UseAuth";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import { useContext } from "react";
// import { AuthContext } from "../Providers/AuthProviders";
// import { useLocation, useNavigate } from "react-router-dom";
import { AuthContex } from "../../Provider/AuthProviders";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin= () => {

  const {googleLogin,githubLogin} = useContext(AuthContex)



const navigate = useNavigate()
const location = useLocation()
const from = location?.state || '/'




 const handleSocialLogin = socialProvider =>{
  socialProvider()
  .then(result=>{
    if (result.user) {
      navigate(from)
    }
  })
 }

 
    return (
        <div>
             <p className="mb-6 text-base text-secondary-color dark:text-dark-7 divider">
                Connect With
              </p>
              <ul className="-mx-2 mb-12 flex flex-col gap-4  justify-between">


               

                <button
                onClick={() => handleSocialLogin(googleLogin)}
                 className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
               
  
 < FcGoogle/>
  Sign it With Google
</button>
                {/* google */}
                <button 
                onClick={()=> handleSocialLogin(githubLogin)}
                 className="btn ">
                <FaGithub/>
  Sign it With Github
</button>
                {/* <GoogleButton
  onClick={() => googleLogin()}
/> */}
              </ul>
        </div>
    );
};

export default SocialLogin;