import './setting.css';
import Header from '../../component/Navbar/Header'
import { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';


export default function Setting() {

    const { user, dispatch } = useContext(AuthContext);
    const [name, setName] = useState(user.username);
    const [email, setEmail] = useState(user.email);
    const [password, setPassword] = useState(user.password);
    const [file, setFile] = useState(null);
    const PF = "http://m1machine.centralindia.cloudapp.azure.com:5000/uploads/";

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({ type: "UPDATE_START" });
        const data = {
            userId: user._id,
            username: name,
            email: email,
            password: password,
        }
        if(file){
            const formdata = new FormData();
            const filename = (Date.now() + file.name);
            formdata.append('file', file);
            formdata.append('name', filename);
            try {
                const imgpath = await axios.post('http://m1machine.centralindia.cloudapp.azure.com:5000/api/upload', formdata);
                data.profile_pic = imgpath.data;
            }catch (e) {
                console.log(e);
            }
        }
        try {
            const res = await axios.put("http://m1machine.centralindia.cloudapp.azure.com:5000/api/user/" + user._id, data);
            dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
            window.location.reload();
        } catch (err) {
            dispatch({ type: "UPDATE_FAILURE" });
            console.log(err);
        }
    }

    const handleDelete = async (e) => {
        e.preventDefault();
        const user_name = prompt("Are you sure you want to delete\nEnter your Username");
        if (user_name === user.username) {
            try {
                await axios.delete("http://m1machine.centralindia.cloudapp.azure.com:5000/api/user/" + user._id);
                dispatch({ type: "LOGOUT" });
            }
            catch (err) {
                console.log(err);
            }
        } else {
            alert("If you want to delete your account\nEnter your username correctly, please!");
        }
    }

    return (
        <div>
            <Header />
            <div className='setting-cont'>
                <div className="setting">
                    <div className="setting-heading">
                        <h2>Update Your Account</h2>
                        <h4 className='setting-delete' onClick={handleDelete}>Delete Account</h4>
                    </div>
                    <div className='profile-pic-setting'>
                        <div>Profile Picture</div>
                        <div className='profile-pic'>
                            <img src={file?URL.createObjectURL(file):PF+user.profile_pic} alt="" />
                            <label htmlFor='profile-pic'><i className="fa-solid fa-user-pen"></i></label>
                            <input type='file' id='profile-pic' onChange={(e) => { setFile(e.target.files[0]) }} />
                        </div>
                    </div>
                    <form action="" onSubmit={handleSubmit}>
                        <div className='form-group'>
                            <label htmlFor='name'>Username</label>
                            <input type='text' id='name' value={name} onChange={(e) => setName(e.target.value)} />

                            <label htmlFor='email'>Email</label>
                            <input type='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} />

                            <label htmlFor='password'>Password</label>
                            <input type='password' id='password' minLength={6} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <input type='submit' id='submit-profile' value={"Update Account"} />
                    </form>
                    <div />
                </div>
            </div>
        </div>
    )
}
