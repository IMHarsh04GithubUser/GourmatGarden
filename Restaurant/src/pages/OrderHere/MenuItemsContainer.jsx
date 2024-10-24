import { useContext, useState } from "react";
import { CartContext } from "../../StoreContext/Storecontext";
import styles from "./Order.module.css";

const MenuContainer = () => {
  const { cart, handleRemove} = useContext(CartContext);
  

  console.log("Current cart items:", cart); 
   

  return (
    <div className={`${styles.AddItemContainer}`}>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">S.NO</th>
            <th scope="col">Item Name</th>
            <th scope="col">Item Price</th>
            <th scope="col">Item Image</th>
            <th scope="col">Remove</th>
          </tr>
        </thead>
        <tbody className={styles.ItemsTable}>
          {cart.length === 0 ? (
            <tr>
              <td colSpan="5">
                <p className={styles.EmptyCart}>Your cart is empty</p>
              </td>
            </tr>
          ) : (
            cart.map((item, index) => (
              <tr key={item.id}>
                <th>{index + 1}</th>
                <td>{item.name}</td>
                <td className={styles.PriceItem}>{item.rate}</td>
                <td>
                  <img
                    src={item.src}
                    alt={item.name}
                    className={styles.AddItemImg}
                  />
                </td>
                <td className={styles.RemoveItem}>
                  <button onClick={() => handleRemove(item.name)} className="btn btn-danger">X</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default MenuContainer;
