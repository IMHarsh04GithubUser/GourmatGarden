import styles from './Homepage.module.css'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
    return(<>
    <div className={styles.FormBorder}></div>
        <div className={styles.FooterRestaurant}>
            <div className={styles.contactus}>
                <h1>CONTACT US</h1>
                <p className={styles.footerp1}>8th Floor,379 Delhi</p>
                <p className={styles.footerp2}>011 23434567</p>
                <p className={styles.footerp3}>gourmatgn@gmail.com</p>
            </div>
            <div className={styles.opentimes} id="navtarget">
                <h1>OPENING TIMES</h1>
                <p>09:30 AM-11:00 PM <br /><span>Every Day</span></p>
            </div>
            <div className={styles.SocialMedia}>
                <h1>YOU CAN FOLLOW US </h1>
                <a href="#" target='_blank'><FaInstagram /></a>
                <a href="#" target='_blank'><FaFacebook /></a>
                <a href="#" target='_blank'><FaSquareXTwitter /></a>
            </div>
        </div>
    
    
    </>)
    
}

export default Footer