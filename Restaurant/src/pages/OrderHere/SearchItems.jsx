import React from "react";
import { FaProcedures } from "react-icons/fa";
import styles from "./Order.module.css";
import { CiSearch } from "react-icons/ci";
import MenuContainer from "./MenuItemsContainer";
import AddToCart from "./AddToCart";

import { CartProvider } from "../../StoreContext/Storecontext";

const SearchItems = () => {
  return (
   
      <div className={`${styles.FoodSelection_Proceed}`}>
        <div className={`${styles.SearchBar_Menu}`}>
            <p className={styles.yourcart}>YOUR CART</p>
        </div>
        <div className={`${styles.MenuItemsContainer}`}>
          <MenuContainer />
        </div>
        <div className={`${styles.AddToCart}`}>
          <AddToCart />
        </div>
        
      </div>
    
  );
};

export default SearchItems;
