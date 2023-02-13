import React from 'react'
import "./front.css"
function FrontBlog() {
    return (
        <div id='grid-container'>
            <div id="main-blog" className='grid-item'>
                <div className="fade"></div>
                <img src="https://preview.colorlib.com/theme/callie/img/hot-post-1.jpg" alt="" />
                <div className="text">
                    <div className="cat">LIFESTYLE</div>
                    <div className="tag">Live your best life with us.</div>
                    <div className="auth-name">Sagar • 1 JAN 2023</div>
                </div>
            </div>
            <div id="sub-blog" className='grid-item'>
                <div id="sub1">
                    <div className="fade"></div>
                    <img src="https://preview.colorlib.com/theme/callie/img/hot-post-2.jpg" alt="" />
                    <div className="text">
                        <div className="cat">FASHION</div>
                        <div className="tag">Elevate your style, empower your life.</div>
                        <div className="auth-name">Sagar • 1 JAN 2023</div>
                    </div>
                </div>
                <div id="sub2">
                    <div className="fade"></div>
                    <img src="https://preview.colorlib.com/theme/callie/img/hot-post-3.jpg" alt="" />
                    <div className="text">
                        <div className="cat">LIFESTYLE</div>
                        <div className="tag">Live your best life with us.</div>
                        <div className="auth-name">Sagar • 1 JAN 2023</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FrontBlog