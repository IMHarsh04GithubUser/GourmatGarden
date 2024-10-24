import React, { useState, useEffect } from "react";
import styles from "./Pages.module.css";
import axios from "axios";
import {toast} from 'react-toastify'

const Orders = () => {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    try {
      const response = await axios.get("http://localhost:3000/orders");
      if (response.data.data) {
        
        toast.success('Fetch Data Successfully')
        setOrders(response.data.data);  // Accessing the correct 'data' key
      } else {
        
        toast.error('Error fetching data');
      }
    } catch (error) {
      
      toast.error("An error occurred while fetching order data");
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className={styles.OrderPanel}>
      <p className={styles.order_Text}>Order Panel</p>
      <div className={styles.order_table}>
        <div className={`${styles.list_table_format} ${styles.title}`}>
          <b>Name</b>
          <b>Price</b>
          <b>Address</b>
        </div>
        {orders.map((order, index) => (
          <div key={index} className={styles.list_table_format}>
            <p>
              {order.cart.map((item, i) => (
                <span key={i} className={styles.item_name}>{item.name},<br /> </span>
              ))}
            </p>
            <p className={styles.totalAmt}>₹{order.totalAmount}</p>
            <p className={styles.address}>{order.address}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
