import Logo from "../assets/Images/Logo.jpeg";
import styles from "./Homepage.module.css";
import { NavLink } from "react-router-dom";
import { GiShoppingCart } from "react-icons/gi";
import { GiChipsBag } from "react-icons/gi";
import AccountDisplay from "./AccountDisplay";
import { useContext, useState } from "react";
import { CartContext } from "../StoreContext/Storecontext";

const Navbar = () => {
  const [getLoginData, setLoginData] = useState(false);
  const { handleLogout, isLoggedIn, user } = useContext(CartContext);

  const toggleLoginDisplay = () => {
    setLoginData(!getLoginData);
  };

  // Hide login form when logged in
  if (isLoggedIn && getLoginData) {
    setLoginData(false);
  }

  return (
    <>
      <header className={`${styles.headerGourmetGarden}`}>
        <nav className={`navbar navbar-expand-lg ${styles.navbarcustom}`}>
          <div className="container-fluid">
            <div className="logo">
              <img
                src={Logo}
                alt=""
                className={styles.Logo}
                onClick={toggleLoginDisplay}
              />
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
                    <GiShoppingCart className={styles.cartlogo} />
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link text-warning" to="/grocery">
                    <GiChipsBag className={styles.cartlogo} />
                  </NavLink>
                </li>
              </ul>
              <div className="reservationTable ms-3">
                <a href="#formcontainerR">
                  <button className={styles.glowbtn1}>BOOK YOUR TABLE</button>
                </a>
              </div>
              {isLoggedIn ? (
                <button
                  className={`btn btn-primary mx-3 ${styles.Logout}`}
                  type="button"
                  onClick={handleLogout}
                >
                  LOGOUT
                </button>
              ) : (
                <button
                  type="button"
                  className="btn btn-danger mx-3"
                  onClick={toggleLoginDisplay}
                >
                  LOGIN
                </button>
              )}
            </div>
          </div>
        </nav>
        <div className="displaytheLogin ">
          {getLoginData && !isLoggedIn && <AccountDisplay />}
        </div>
      </header>
    </>
  );
};

export default Navbar;
