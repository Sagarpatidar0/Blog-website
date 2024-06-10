import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {

  return (
    <div id='navbar'>
        <ul id='list'>
            <li><Link to={"/"}>HOME</Link></li>
            <li><Link to={"/"}>LIFESTYLE</Link></li>
            <li><Link to={"/"}>FASHION</Link></li>
            <li><Link to={"/"}>TECHNOLOGY</Link></li>
            <li><Link to={"/"}>HEALTH</Link></li>
            <li><Link to={"/"}>TRAVEL</Link></li>
        </ul>
    </div>
  )
}

export default Navbar