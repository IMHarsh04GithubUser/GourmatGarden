import React from "react";
import { FaProcedures } from "react-icons/fa";
import styles from "./Order.module.css";
import { CiSearch } from "react-icons/ci";
import MenuContainer from "./MenuItemsContainer";
import AddToCart from "./AddToCart";
import { useContext } from "react";
import { CartContext } from "../../StoreContext/Storecontext";

const SearchItems = () => {
  const {isLoggedIn,user} = useContext(CartContext)
  return (
    <>
    {isLoggedIn ? (<>
      <div className={`${styles.FoodSelection_Proceed}`}>
        <div className={`${styles.SearchBar_Menu}`}>
            <p className={styles.yourcart}>YOUR CART <span className={styles.UnameCart}>{user?.uname}</span></p>
        </div>
        <div className={`${styles.MenuItemsContainer}`}>
          <MenuContainer />
        </div>
        <div className={`${styles.AddToCart}`}>
          <AddToCart />
        </div>
        
      </div>
    </>):
    (<>
      <div className={styles.LoginToseeCart}>Login To See Your Cart</div>
    </>)}
    </>  
    
  );
};

export default SearchItems;
