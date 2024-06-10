import './login.css'
import Header from '../../component/Navbar/Header';
import { Link } from 'react-router-dom'
import { useContext, useRef, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';
import { BiErrorCircle } from 'react-icons/bi';


export default function Register() {
  const [err, setErr] = useState("")
  const userRef = useRef()
  const passRef = useRef()
  const emailRef = useRef()
  const { user, dispatch, isFetching } = useContext(AuthContext)

  const handleSubmit =  async(e)=> {
    e.preventDefault()
    if(userRef.current.value === "" || passRef.current.value === "" || emailRef.current.value === ""){
      alert("Please fill all fields")
    }else{
        const data = {
          username: userRef.current.value.toLowerCase(),
          email: emailRef.current.value,
          password: passRef.current.value,
          profile_pic:"1674817820292wallpaperflare.com_wallpaper (2).jpg"
        }
        try {
          const response =  await axios.post("http://m1machine.centralindia.cloudapp.azure.com:5000/api/register",data)
          console.log(response.data)
          dispatch({ type: "LOGIN_SUCCESS", payload: response.data });
        } catch (error) {
          if (error.response.data?.keyPattern?.email){
            setErr("Email already in use");
          }else if(error.response.data?.keyPattern?.username){
            setErr("Username already in use");
          }else{
            setErr(error.response?.data?.errors?.password?.message)
          }
          console.log(error);
        }
    }}

  return (
    <>
      <Header />
      <div className="login-cont">
        <h1>Register</h1>
        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="Username">Username</label>
          <input type="text" placeholder='Enter your username...' ref={userRef} />

          <label htmlFor="email">Email</label>
          <input type="text" placeholder='Enter your email...' ref={emailRef} />

          <label htmlFor="Password">Password</label>
          <input type="password" placeholder='Enter your password...' ref={passRef} />
          <button type="submit">Register</button>
          <Link to={"/login"}>Login</Link>
          {err ? <div className="error"><BiErrorCircle />{err}</div> : ""}
        </form>
      </div>
    </>
  )
}
