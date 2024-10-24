import React, { useEffect, useState } from 'react';
import styles from "./Pages.module.css";
import axios from 'axios';
import { toast } from "react-toastify";

const List = () => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get('http://localhost:3000/list');
      if (response.data.success) {
        setList(response.data.data);
      } else {
        toast.error('Error fetching data');
      }
    } catch (error) {
      console.error("Fetch error:", error);
      toast.error('An error occurred while fetching data');
    }
  };

  const removeFood = async (foodId) => {
    try {
      const response = await axios.post('http://localhost:3000/remove', { id: foodId });
      await fetchList();
      if (response.data.success) {
        toast.success(response.data.message);
      } else {
        toast.error("Error removing item");
      }
    } catch (error) {
      console.error("Remove error:", error);
      toast.error('An error occurred while removing item');
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  const url = 'http://localhost:3000'; // Base URL for images

  return (
    <div>
      <div className={`${styles.listadd} ${styles.flex_col}`}>
        <p>All Foods List</p>
        <div className={styles.list_table}>
          <div className={`${styles.list_table_format} ${styles.title}`}>
            <b>Image</b>
            <b>Name</b>
            <b>Category</b>
            <b>Price</b>
            <b>Action</b>
          </div>
          {list.map((item, index) => (
            <div key={index} className={styles.list_table_format}>
              <img src={`http://localhost:3000/list/${item.image}`} alt={item.name} />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>{item.price}</p>
              <p onClick={() => removeFood(item._id)} className={styles.cursor}>X</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default List;
