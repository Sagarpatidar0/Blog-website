import React from 'react'
import Recentblog from './Recentblog'
import "./recent.css"
import { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios'

function Recent() {
    const [posts , setPost] = useState([]);
    const PF = "http://m1machine.centralindia.cloudapp.azure.com:5000/uploads/";

    useEffect(()=>{
        const getdata = async()=>{
            const fatchdata = await axios.get("http://m1machine.centralindia.cloudapp.azure.com:5000/api")
            const arrayLength = fatchdata.data.length;
            setPost((fatchdata.data.slice(arrayLength-6,arrayLength)).reverse());
        }
        getdata();
    },[])

    const makeImgUrl = (cat)=>{
        if (cat === "Travel"){
            return "https://preview.colorlib.com/theme/callie/img/post-1.jpg"
        }else if(cat === "Lifestyle"){
            return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPQkoPYixNAParl9Ezu1PPuBodTVnAnVbcZw&usqp=CAU"
        }else{
            return "http://preview.colorlib.com/theme/callie/img/post-1.jpg"
        }
    }

    return (
        <div id='recent'>
            <h2 id='recent-head'>RECENT POST </h2>
            <div className="line"></div>
            <div className="recent-cont">
                {posts.map((post)=>(
                    <Recentblog key={post._id} data={post} img={post.img?PF+post.img:makeImgUrl(post.cat[0])} />
                ))}
                
            </div>
        </div>
    )
}

export default Recent