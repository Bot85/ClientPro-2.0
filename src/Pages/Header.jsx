
import React from 'react'
import logo from '../assets/avi_banner..png'
import './Header.css'
import { FaBell, FaSearch, FaUser } from 'react-icons/fa'

const Header = () => {
  return (
   <div className="headme">
  <div className="headme1">

    
    <a href="/">
      <img src={logo} alt="Avinash Institute Logo" width={130} />
    </a>

    
    <div className="avititle">
      <h2>AVINASH INSTITUTE OF EDUCATION</h2>
    </div>

    
    <div className="sbox">
      <FaSearch size={18} className="sicon" />
      <input
        type="text"
        placeholder="Search"
        id="searchme"
        autoComplete="off"
      />
    </div>

  
    <div className="icon-box">
      <FaBell size={18} className="notify-icon" />
    </div>


    <div className="icon-box pro-icon">
      <a href='/Profile'><FaUser size={18} />
      </a>
    </div>

  </div>
</div>


  )
}

export default Header
