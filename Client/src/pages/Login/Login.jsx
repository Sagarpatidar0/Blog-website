import './login.css'
import Header from '../../component/Navbar/Header';
import { Link } from 'react-router-dom';
import { useContext, useRef, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';
import { BiErrorCircle } from 'react-icons/bi';


export default function Login() {
    const [err, setErr] = useState("")
    const userRef = useRef()
    const passRef = useRef()
    const { user, dispatch, isFetching } = useContext(AuthContext)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setErr(null)
        dispatch({ type: "LOGIN_START" })
        try {
            const res = await axios.post("http://m1machine.centralindia.cloudapp.azure.com:5000/api/login", {
                username: userRef.current.value.toLowerCase(),
                password: passRef.current.value,
            })
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
        } catch (err) {
            dispatch({ type: "LOGIN_FAILURE" });
            setErr(err.response.data);
        }
    }
    return (
        <>
            <Header />
            <div className="login-cont">
                <h1>Login</h1>
                <form className="login-form" onSubmit={handleSubmit}>
                    <label htmlFor="username"  >Username</label>
                    <input type="text" ref={userRef} placeholder='Enter your username...' />

                    <label htmlFor="Password">Password</label>
                    <input type="password" ref={passRef} placeholder='Enter your password...' />

                    <button type="submit" disabled={isFetching}>{"Login"}</button>
                    <Link to={"/register"}>Register</Link>
                    {err ? <div className="error"><BiErrorCircle />{err}</div> : ""}
                </form>
            </div>
        </>
    )
}
