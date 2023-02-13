import './login.css'
import Header from '../../component/Navbar/Header';
import { Link } from 'react-router-dom';
import { useContext, useRef } from 'react';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';

export default function Login() {
    const userRef = useRef()
    const passRef = useRef()
    const { user, dispatch, isFetching } = useContext(AuthContext)

    const handleSubmit = async (e) => {
        e.preventDefault()
        dispatch({ type: "LOGIN_START" })
        try {
            const res = await axios.post("http://localhost:5000/api/login", {
                username: userRef.current.value.toLowerCase(),
                password: passRef.current.value,
            })
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data });

        } catch (err) {
            dispatch({ type: "LOGIN_FAILURE" });
        }
    }
    console.log(user);
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
                </form>
            </div>
        </>
    )
}
