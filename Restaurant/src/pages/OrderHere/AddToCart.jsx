import { CartContext } from "../../StoreContext/Storecontext";
import { useContext, useState } from "react";
import styles from "./Order.module.css";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddToCart = () => {
  const { cart, calculateSubtotal,handleLogin, totalAmount,isLoggedIn,user } = useContext(CartContext);
  const navigate = useNavigate();
  const [address, setAddress] = useState('');
  const [email,setemail] = useState('')

  const handleCartSubmit = (e) => {
    e.preventDefault();

    if (!address) {
      toast.error('Please enter your delivery address.');
      return;
    }

    axios.post('http://localhost:3000/cartbill', { cart, address, totalAmount,email })
      .then(result => {
        if (result.status === 201) {
          const token = result.data.token
          handleLogin(token)
          console.log(result.data)
          toast.success('Order placed successfully- Cash On Delivery');
          navigate('/');
          
        } else {
          toast.error('Error in placing order');
        }
      })
      .catch(() => {
        toast.error('Error in placing the order.');
      });
  };

  return (
    <>
    {isLoggedIn?(<>
      <form onSubmit={handleCartSubmit} className={styles.MyOrder}>
      <h1 className={`h4 text-center ${styles.MyOrders}`}>Orders</h1>

      <div className={`${styles.YourAddress}`}>
        <p>Delivery Address</p>
        <input
          type="text"
          placeholder="Enter your address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
          className={styles.address_input}
        />
        <input
          type="text"
          placeholder="Enter your Email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
          required
          className={styles.address_input}
        />
      </div>

      <div className={styles.CartItems}>
        <div className="ItemsIncart">
          {cart.map((item, index) => (
            <div key={index} className={styles.CartItem}>
              <input
                className={`border-0 ${styles.itempricerate}`}
                value={item.name}
                readOnly
              />
            </div>
          ))}
        </div>
        <p className="font-weight-bold">
          Sub Total: <span className="font-weight-bold">₹{calculateSubtotal.toFixed(2)}</span>
        </p>
        <p>Delivery Fee: <span>{calculateSubtotal > 0 ? "2" : "0"}</span></p>
      </div>

      <div className={`${styles.TotalAmountButton}`}>
        <p>Total Amount: ₹  <input className={`border-0 ${styles.totalAmount}`}value={totalAmount ? totalAmount.toFixed(2) : ""}readOnly/></p>
       
        <input
          type="submit"
          value="PROCEED"
          className={`btn btn-primary ${styles.proceedBtn}`}
        />
      </div>
    </form>
    
    </>):(<>
      <form onSubmit={handleCartSubmit} className={styles.MyOrder}>
      <h1 className={`h4 text-center ${styles.MyOrders}`}>My Orders</h1>

      <div className={`${styles.YourAddress}`}>
        <p>Delivery Address</p>
        <input
          type="text"
          placeholder="Enter your address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
          className={styles.address_input}
        />
        <input
          type="text"
          placeholder="Enter your Email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
          required
          className={styles.address_input}
        />
      </div>

      <div className={styles.CartItems}>
        <div className="ItemsIncart">
          {cart.map((item, index) => (
            <div key={index} className={styles.CartItem}>
              <input
                className={`border-0 ${styles.itempricerate}`}
                value={item.name}
                readOnly
              />
            </div>
          ))}
        </div>
        <p className="font-weight-bold">
          Sub Total: <span className="font-weight-bold">₹{calculateSubtotal.toFixed(2)}</span>
        </p>
        <p>Delivery Fee: <span>{calculateSubtotal > 0 ? "2" : "0"}</span></p>
      </div>

      <div className={`${styles.TotalAmountButton}`}>
        <p>Total Amount: ₹  <input className={`border-0 ${styles.totalAmount}`}value={totalAmount ? totalAmount.toFixed(2) : ""}readOnly/></p>
       
        <input
          type="submit"
          value="PROCEED"
          className={`btn btn-primary ${styles.proceedBtn}`}
        />
      </div>
    </form>
    </>)}
    </>
     
    
  );
};

export default AddToCart;
