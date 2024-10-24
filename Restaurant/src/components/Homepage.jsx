import React, { useState } from "react";
import styles from "./Homepage.module.css";
import Navbar from "./Navbar";
import DiscoverMenu from "./DiscoverMenu";
import FormContainer from "./FormContainer";
import Welcome from "./WelcomePage";
import WelcomeHere from "./WelcomePage2";
import Footer from "./Footer";

const HomepageRestaurant = () => {
 

  return (
    <div className={`container-fluid ${styles.GourmetGardenRestaurant}  `}>
      <div className={styles.hr1} />
      <div className={styles.Homepagebgimg}>
        <Navbar/>
        <Welcome  />
      </div>
      <WelcomeHere />
      <DiscoverMenu />
      <FormContainer />
      <Footer />
    </div>
  );
};

export default HomepageRestaurant;
