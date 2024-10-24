import React from 'react'
import styles from "./Admin.module.css"
import Logo from "../assets/Logo.jpeg"
import Profile from "../assets/Profile.png"

const Navbar = () => {
  return (
    <div className={styles.Navbar}>
        <img src={Logo} alt="logo" className={styles.logo}/>
        <img src={Profile} alt="profile" className={styles.profileimg}/>
        
    </div>
  )
}

export default Navbar