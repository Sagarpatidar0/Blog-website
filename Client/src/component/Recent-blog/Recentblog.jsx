import React from 'react'
import {Link} from 'react-router-dom'
import "./recent.css"

function Recentblog(props) {
    return (
        <div id='recent-blog'>
            <div className="recent-img">
                <img src={props.img} alt="" />
            </div>
            <div className="text recent-text">
                        <div className="cat">{props.data.cat.map((catg)=>(catg+" "))}</div>
                        <Link to={`/post/${props.data._id}`}>
                        <div className="tag">{props.data.title}</div></Link>
                        <div className="auth-name">{props.data.username}• {new Date(props.data.createdAt).toDateString()}</div>
                    </div>
            </div>
    )
}

export default Recentblog