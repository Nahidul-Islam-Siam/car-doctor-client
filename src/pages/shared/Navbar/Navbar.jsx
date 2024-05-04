import { Link, NavLink } from "react-router-dom";
import logo from '../../../assets/logo.svg'
import { useContext } from "react";
import { AuthContex } from "../../../Provider/AuthProviders";

const Navbar = () => {
  const {user,logout} = useContext(AuthContex)

  const links = <>
   <li><NavLink to='/'>Home</NavLink></li>
              
    <li><NavLink>About</NavLink></li>
  {
    user?.email ?   <li><NavLink to='/booking'>My Bookings</NavLink></li> : ''
  }
  </>
    return (
        <div className="navbar bg-base-100 h-24 mb-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
             {links}
            </ul>
          </div>
         <Link><a className="btn btn-ghost text-xl">
            <img src={logo} alt="" />
            
            </a></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          {links}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn btn-outline btn-warning">Appoinment</a>
          
{
  user? <div className="dropdown dropdown-end">
  <div tabIndex={0} role="button" className="btn btn-ghost btn-circle border-pink-600 border-2 avatar">
    <div className=" rounded-full">
      <img alt="Tailwind CSS Navbar component" src={user?.photoURL ||  "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"}  />
    </div>
  </div>
  <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
    <li>
      <a className="justify-between btn btn-sm btn-ghost">
        {user?.displayName || 'user name not found'}
        
      </a>
    </li>
    
    <li onClick={logout}><a>Logout</a></li>
  </ul>
</div>
:
<NavLink
  to="/login"
  style={({ isActive, isPending, isTransitioning }) => {
    return {
      fontWeight: isActive ? "bold" : "",
      color: isPending ? "red" : "White",
      viewTransitionName: isTransitioning ? "slide" : "",
    };
  }}
>

<span className="text-purple-600">L</span>
 <span className="text-blue-600">o</span>
 <span className="text-green-600">g</span>
 <span className="text-yellow-600">i</span>
 <span className="text-red-600">n</span>
    
</NavLink>

}

  
        </div>
      </div>
    );
};

export default Navbar;