import React, { useState } from "react";
import styles from "./Pages.module.css";
import axios from "axios";
import { toast } from "react-toastify";

const Add = () => {
  const [image, setImage] = useState(null);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Salad",
  });

  const onchangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onsubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", data.price);
    formData.append("category", data.category);
    formData.append("image", image); // Add image to formData

    try {
      const response = await axios.post(
        "http://localhost:3000/add",
        formData        
      );

      if (response.status === 201) {
        setData({ name: "", description: "", price: "", category: "Salad" });
        setImage(null);
        toast.success(response.data.message);
      } 
    } catch (error) {
      toast.error("An error occurred while saving the data.");
    }
  };

  return (
    <div className={styles.Add}>
      <form className={styles.flex_col} onSubmit={onsubmitHandler} encType="multipart/form-data" action="/upload">
        <div className={`${styles.addimgupload} ${styles.flex_col}`}>
          <p>Upload Image</p>
          <label htmlFor="image">
            <img
              src={image ? URL.createObjectURL(image) : ""}
              alt="addimg"
              className={styles.addimg}
              name="image"
            />
          </label>
          <input
            type="file"
            id="image"
            required
            hidden
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>
        <div className={styles.addproductname}>
          <p>Product Name</p>
          <input
            onChange={onchangeHandler}
            value={data.name}
            type="text"
            name="name"
            placeholder="Type Here"
            className={styles.productname}
          />
        </div>
        <div className={`${styles.add_product_disc} ${styles.flex_col}`}>
          <p>Product Description</p>
          <textarea
            onChange={onchangeHandler}
            value={data.description}
            name="description"
            rows="6"
            placeholder="Write Content Here"
            required
          ></textarea>
        </div>
        <div className={styles.add_cat_price}>
          <div className={`${styles.add_cat} ${styles.flex_col}`}>
            <p>Product Category</p>
            <select name="category" onChange={onchangeHandler}>
              <option value="Salad">Salad</option>
              <option value="Starter">Starter</option>
              <option value="Drinks">Drinks</option>
              <option value="Lunch">Lunch</option>
              <option value="Dessert">Dessert</option>
            </select>
          </div>
          <div className={`${styles.add_price} ${styles.flex_col}`}>
            <p>Product Price</p>
            <input
              type="number"
              name="price"
              placeholder="20"
              onChange={onchangeHandler}
              value={data.price}
            />
          </div>
        </div>
        <input type="submit" value="ADD" className={styles.add_button} />
      </form>
    </div>
  );
};

export default Add;
