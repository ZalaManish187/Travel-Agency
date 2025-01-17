import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosCloseCircle } from "react-icons/io";

import { StoreContext } from '../../context/StoreContext'

function Navbar({ setShowLogin }) {

  const [menu, setMenu] = useState("home");

  const { getTotalCartAmount } = useContext(StoreContext);

  const [active, setActive] = useState('navBar');

  const showNav = () => {
    setActive('navBar activeNavbar')
  }
  const removeNavbar = () => {
    setActive('navBar')
  }



  return (
    <div className='navbar'>
      <Link to='/'> <img src={assets.logo} alt="/" className='logo' /></Link>
      <div className={active}>
        <ul className='navbar-menu mt-3'>
          <Link onClick={() => {setMenu("home");removeNavbar();}} className={menu === "home" ? "active" : ""}>home</Link>
          <Link to='/explore' onClick={() => {setMenu("ExploreMenu");removeNavbar();}} className={menu === "menu" ? "active" : ""}> Explore-Menu </Link>
          <Link onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>mobile-app</Link>
          <Link to='/footer' onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>contact-us</Link>
          <div onClick={removeNavbar} className='closeNavbar'>
            <IoIosCloseCircle className='navIcon' />
          </div>
        </ul>

      </div>
      <div className='navbar-right'>
        <img src={assets.search_icon} alt="" className="icon" />
        <div className="navbar-search-icon">
          <Link to='/cart'> <img src={assets.basket_icon} alt=" " className="icon" /></Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        <button onClick={() => setShowLogin(true)}>sign in</button>
        <div onClick={showNav}>
          <RxHamburgerMenu className='navBtn' />
        </div>
      </div>
    </div>
  )
}


export default Navbar