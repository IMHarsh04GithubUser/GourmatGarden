import React from 'react'
import styles from "./Admin.module.css"
import { NavLink } from 'react-router-dom'


const Siderbar = () => {
  return (
    <div className={styles.sidebar}>
        <div className={styles.sidebar_options}>
            <NavLink to="/add" className={styles.sidebar_option}>
                <img src="" alt="" className={styles} />
                <p>Add Items</p>
            </NavLink>
            <NavLink to="/list"  className={styles.sidebar_option}>
                <img src="" alt="" className={styles} />
                <p>List Items</p>
            </NavLink>
            <NavLink to="/order" className={styles.sidebar_option}>
                <img src="" alt="" className={styles} />
                <p>Orders</p>
            </NavLink>
        </div>

    </div>
  )
}

export default Siderbar