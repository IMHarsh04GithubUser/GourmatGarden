import styles from "./Homepage.module.css";
import WelcomeFoodItem from "../assets/Images/WelcomeFoodItem.jpg"
const WelcomeHere = () => {
  return (
    <>
      <div className={`${styles.WelcomeHR}`}></div>
      <div className={`d-flex ${styles.WelcomeHere}`}>
      <div className={` ${styles.WelcomeHereContent1}`}>
            <hr className="WelcomHR"/>
            <h1 className="h1-gg">"GOURMAT GARDEN"</h1>
            <p>"Welcome to Gourmet Garden, where culinary excellence meets a cozy, inviting atmosphere. Join us for an unforgettable dining experience filled with delectable dishes and exceptional service."</p>
      </div>
      <div className={` ${styles.WelcomeHereContent2}`}>
        <img src={WelcomeFoodItem} alt="Welcome" className={styles.WelcomeFoodItems} />
      </div>
      </div>
    </>
  );  
};

export default WelcomeHere;
