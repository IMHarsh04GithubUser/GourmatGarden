import Logo from "../assets/Images/Logo.jpeg";
import styles from "./Homepage.module.css";
import { NavLink } from "react-router-dom";
import { GiShoppingCart } from "react-icons/gi";
import AccountDisplay from "./AccountDisplay";
import { useState } from "react";

const Navbar = () => {
  const [getLoginData, setLoginData] = useState(false);
  const [register, setregister] = useState();

  const ClicktoLogin = () => {
    setLoginData(!getLoginData);
  };

  return (
    <>
      <header className={`${styles.headerGourmetGarden}`}>
        <nav className={`navbar navbar-expand-lg ${styles.navbarcustom}`}>
          <div className="container-fluid">
            <div className="logo">
              <img src={Logo} alt="" className={styles.Logo} />
            </div>
            <button
              className="navbar-toggler bg-danger"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className={`navbar-nav ms-auto ${styles.navbaritems}`}>
                <li className="nav-item">
                  <NavLink to="/" className="nav-link text-warning">
                    HOME
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link text-warning" to="/about">
                    ABOUT US
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link text-warning" to="/contact">
                    CONTACT US
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link text-warning" to="/menu">
                    MENU
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link text-warning" to="/order">
                    <GiShoppingCart className={styles.cartlogo}/>
                  </NavLink>
                </li>
              </ul>
              <div className="reservationTable ms-3">
                <a href="#formcontainerR">
                  <button className={styles.glowbtn1}>BOOK YOUR TABLE</button>
                </a>
              </div>
              <div className={styles.SignIn} onClick={ClicktoLogin}></div>
              
            </div>
          </div>
        </nav>
        <div className="displaytheLogin">
          {getLoginData && <AccountDisplay />}
        </div>
      </header>
    </>
  );
};

export default Navbar;
