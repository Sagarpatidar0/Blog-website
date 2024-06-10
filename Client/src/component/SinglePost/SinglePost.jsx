import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import './singlepost.css'

export default function SinglePost() {
    const [post , setPost] = useState([]);
    const location = useLocation();
    const path = (location.pathname.split('/')[2])
    const PF = "http://m1machine.centralindia.cloudapp.azure.com:5000/uploads/";

    useEffect(()=>{
        const getdata = async ()=>{
            const fatchdata = await axios.get(`http://m1machine.centralindia.cloudapp.azure.com:5000/api/${path}`);
            setPost(fatchdata.data);
        }
        getdata();
    },[path])


        return (
        <div className='single-post'>
            <div className='single-img-cont'>
            <img src={PF+post.img} alt="" className="single-img" />
            <div className="single-text">
                <div className="cat">{post.cat}</div>
                <div className="tag">{post.title}</div>
                <div className="auth-name">{post.username}• {new Date(post.createdAt).toDateString()}</div>
            </div>
            </div>
            <div className="single-post-text">
                <div className="title-icon">
                    <h3 className='single-post-title' >{post.title}</h3>
                    <div className="single-icon">
                        <i className="fa-solid fa-pen-to-square"></i>
                        <i className="fa-solid fa-trash"></i>
                    </div>
                </div>
                <p className="post-text">{post.disc}</p>
            </div>
        </div>
    )
}
