import styles from "./Homepage.module.css";
import FoodPlate1 from "../assets/Images/FoodPlate1.jpg";
import Menu1 from "../assets/Images/Menu1.jpg";
import Menu2 from "../assets/Images/Menu2.jpeg";
import AccountDisplay from "./AccountDisplay";
import { useEffect, useState } from "react";

const Welcome = () => {
  const images = [FoodPlate1, Menu1, Menu2];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      
      <div className={styles.WelcomeContainer}>
        <div className={styles.WelcomeText}>
          <div className={styles.welcometext1}>
            <p>
              ENJOY YOUR <br /> DELICIOUS MEAL
            </p>
          </div>
          <div className={styles.welcometext2}>
            <p>Welcome to Our Cuisine in a warm and welcoming atmosphere</p>
          </div>
          <a href="#formcontainerR">
          <button className={`btn btn-warning text-light ${styles.button1}`}>
            BOOK YOUR TABLE
          </button>
          </a>
        </div>
        <div className={styles.slider}>
          <div
            className={styles.slides}
            style={{ transform: `translateX(-${currentIndex * 110}%)` }}
          >
            {images.map((image, index) => (
              <div className={styles.slide} key={index}>
                <img src={image} alt={`Slide ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
