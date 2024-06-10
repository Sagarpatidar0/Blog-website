import React, { useContext, useState } from 'react'
import "./navbar.css"
import blank from '../../img/blank.png'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

function Header() {
    const [showDropdown, setShowDropdown] = useState(false);
    const {user, dispatch}= useContext(AuthContext);
    const PF = "http://m1machine.centralindia.cloudapp.azure.com:5000/uploads/";

    const handleclick = (e) => {
        e.preventDefault()
        if(user){
          dispatch({type:'LOGOUT'})
        }else{
          window.location = '/login';
        }
      }

    return (
        <div id='header'>
            <div id="left">
                <i className="fa-brands fa-facebook-f"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-google-plus-g"></i>
                <i className="fa-brands fa-instagram"></i>
            </div>
            <div id="mid">
                <img src="https://preview.colorlib.com/theme/callie/img/logo.png" alt="" />
            </div>
            <div className="profile">
                <div id="right" onMouseEnter={() => setShowDropdown(true)} onMouseLeave={() => setShowDropdown(false)}>
                    <img className='profile-image' src={user?PF+user.profile_pic:blank} alt="" />
                    
                </div>
                <div className={`dropdown-content ${showDropdown ? "show" : "hide"}`}
                onMouseEnter={() => setShowDropdown(true)} onMouseLeave={() => setShowDropdown(false)}>
                        <ul className="dropdown">
                            <li id='drop-username'>
                                <Link to={"/"}>Hello {user?user.username:" "}</Link>
                            </li>
                            <li>
                                {user && <Link to={"/"}>Your Blogs</Link>}
                            </li>
                            <li>
                                {user && <Link to={"/newpost"}>Write a Blogs</Link>}
                            </li>
                            <li>
                                {!user && <Link to={"/register"}>Register</Link>}
                            </li>
                            <li>
                                {user && <Link to={"/setting"}>Profile Setting</Link>}
                            </li>
                           <li>
                            <Link onClick={handleclick}>{user?"Logout":"Login"}</Link>
                           </li>
                        </ul>
                </div>
            </div>

        </div>
    )
}

export default Header