import React, { useState } from 'react'
import './Nav.css'
import logo from "./../../Images/brand_logo.png"
import { NavLink } from 'react-router-dom'
import { RxHamburgerMenu } from "react-icons/rx";
const Nav = () => {
  const [showMediaIcon,setShowMediaIcon]=useState(false)
  return (
    <div className='main-nav-div'>
     <div >
          <img src={logo} alt="" />
        </div>
      <nav>
        <ul className= 'simple-ul'>
        <NavLink className="li" to="/">HOME</NavLink>
        <NavLink className="li" to="/location">LOCATION</NavLink>
        <NavLink className="li" to="/about">ABOUT</NavLink>
        <NavLink className="li" to="/contact">CONTACT</NavLink>
          
        </ul>
      </nav>
      
      <button className='button'>Login</button>
      <div className='hamburger'>
        <RxHamburgerMenu  fontSize={"28px"} onClick={()=>setShowMediaIcon(!showMediaIcon)} /> 
      </div>

{/* responsiv */}
      <div className={showMediaIcon ? 'responsive-manue' : "abc"}>
      <ul className='responsiv-ul'> 
        <NavLink className="li" to="/">HOME</NavLink>
        <NavLink className="li" to="/location">LOCATION</NavLink>
        <NavLink className="li" to="/about">ABOUT</NavLink>
        <NavLink className="li" to="/contact">CONTACT</NavLink>
          
        </ul>
        <button className='responsiv-manue-button'>Login</button>
      </div>
    </div>
  )
}

export default Nav

