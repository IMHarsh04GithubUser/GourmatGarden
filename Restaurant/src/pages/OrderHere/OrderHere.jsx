import styles from "./Order.module.css";
import Navbar from "../../components/Navbar";
import SearchItems from "./SearchItems";
import { NavLink } from "react-router-dom";
import Footer from "../../components/Footer"
import Logo from "../../assets/Images/Logo.jpeg"

const OrderOnline = () => {
  return (
    <>
      <div className={`${styles.OrderPage} container-fluid `}>
        <div className={styles.TitlePage}>
          <img src={Logo} alt="Logo" className={` rounded ${styles.LogoRest}`}/>
          <p className={styles.p1}>"Order Your Favourite Meal Online"</p>
          <p className={styles.p2}>
            "Delicious Food Delivered right to your Doorstep.."
          </p>
          <NavLink
            to="/"
            className={`text-primary bg bg-light rounded p-2 border border-top-0 border-bottom-0 m-4 ${styles.text1}`}
          >
            HOME
          </NavLink>
          <NavLink
            to="/menu"
            className={`text-primary bg bg-light rounded p-2 border border-top-0 border-bottom-0 ${styles.text1}`}
          >
            MENU
          </NavLink>
        </div>
          <SearchItems />
          <Footer />

      </div>
    </>
  );
};

export default OrderOnline;
