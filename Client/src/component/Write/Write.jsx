import './write.css'
import bg from '../../img/bg1.jpg'
import { useState } from 'react'
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';
import Text from './text';


export default function Write() {
    const { user } = useContext(AuthContext);
    const [title, setTitle] = useState("");
    const [disc, setDisc] = useState("");
    const [file, setfile] = useState(null);
    const [cat, setCat] = useState([]);
    let res;

   

    const handleSubmit = async (e) => {
        e.preventDefault();


        const data = {
            title: title,
            disc: disc,
            cat: cat,
            username: user.username,
            img: ""
        }
        if (file) {
            const formdata = new FormData();
            const filename = (Date.now() + file.name);
            formdata.append('file', file);
            formdata.append('name', filename);
            try {
                const imgpath = await axios.post('http://m1machine.centralindia.cloudapp.azure.com:5000/api/upload', formdata);
                data.img = imgpath.data;
            } catch (e) {
                console.log(e);
            }
        }
        try {
            res = await axios.post('http://m1machine.centralindia.cloudapp.azure.com:5000/api/post', data);
            window.location.replace(`/post/${res.data._id}`);
        } catch (err) {
            console.log(err);
        }

    }
    return (
        <div className='write-cont'>
            <img src={file ? URL.createObjectURL(file) : bg} alt="" />
            <form action="" className='writeform' onSubmit={handleSubmit}>
                <div className='title-cont'>
                    <label htmlFor="profile-img" className='profile-img-label'>
                        <i className="fa-solid fa-plus"></i>
                    </label>

                    <input type="file" name="profile" id="profile-img"
                        accept="image/png, image/jpeg, image/jpg"
                        onChange={(e) => { setfile(e.target.files[0]) }} />

                    <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} className='title' placeholder="Title" autoFocus={true} />
                    
                    <select id="Categories" defaultValue="Categories" onChange={(e) => setCat(e.target.value)}>
                        <option value="Categories" disabled>Categories</option>
                        <option value="Lifestyle" >Lifestyle</option>
                        <option value="Health">Health</option>
                        <option value="Travel">Travel</option>
                        <option value="Fashion">Fashion</option>
                        <option value="Technology">Technology</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <textarea name="disc" value={disc} onChange={(e) => setDisc(e.target.value)} className='disc' placeholder="Blog Contant ...."></textarea>
                <input type="submit" value="Publish" className='writesubmit' />
            </form>
            <Text/>
        </div>
    )
}
