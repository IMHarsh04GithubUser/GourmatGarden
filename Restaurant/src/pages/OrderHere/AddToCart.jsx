import { CartContext } from "../../StoreContext/Storecontext";
import { useContext, useState } from "react";
import styles from "./Order.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddToCart = () => {
  const {
    cart,
    calculateSubtotal,
    handleLogin,
    totalAmount,
    isLoggedIn,
    user,
  } = useContext(CartContext);
  const navigate = useNavigate();
  const [email,setemail] = useState(user?.email)
  const [address,setaddress] = useState(user?.address)

  const handleCartSubmit = (e) => {
    e.preventDefault();

    if (!email || !address || cart.length === 0 || totalAmount <= 0) {
      toast.error("Please fill all required fields.");
      return;
  }
  

    axios
      .post("http://localhost:3000/cartbill", {
        cart,
        totalAmount,
        email,
        address
      })
      .then((result) => {
        if (result.status === 201) {
          const token = result.data.token;
          handleLogin(token);
          console.log(result.data);
          console.log(user);
          toast.success("Order placed successfully- Cash On Delivery");
          navigate("/");
        } else {
          toast.error("Error in placing order");
        }
      })
      .catch((err) => {
        toast.error("Error in placing the order.");
        console.log(err);
      });
  };

  return (
    <>
      {isLoggedIn ? (
        <>
          <form onSubmit={handleCartSubmit} className={styles.MyOrder}>
            <h1 className={`h4 text-center ${styles.MyOrders}`}>Orders</h1>

            <div className={`${styles.YourAddress}`}>
              <p>Delivery Address</p>
              <input
                type="text"
                name=""
                id=""
                value={user?.address || "YOUR ADDRESS"}
                className={`form-control ${styles.address_input}`}
                onChange={e=>setaddress(e.target.value)}
              /><br/>
              <input
                type="text"
                name=""
                id=""
                className={`form-control ${styles.address_input}`}
                value={user?.email || "YOUR EMAIL"}
                onChange={e=>setemail(e.target.value)}
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
                Sub Total:{" "}
                <span className="font-weight-bold">
                  ₹{calculateSubtotal.toFixed(2)}
                </span>
              </p>
              <p>
                Delivery Fee: <span>{calculateSubtotal > 0 ? "2" : "0"}</span>
              </p>
            </div>

            <div className={`${styles.TotalAmountButton}`}>
              <p>
                Total Amount: ₹{" "}
                <input
                  className={`border-0 ${styles.totalAmount}`}
                  value={totalAmount ? totalAmount.toFixed(2) : ""}
                  readOnly
                />
              </p>

              <input
                type="submit"
                value="PROCEED"
                className={`btn btn-primary ${styles.proceedBtn}`}
              />
            </div>
          </form>
        </>
      ) : (
        <>
          <p className={`${styles.LoginPlease}`}>LOGIN TO SEE CART</p>
        </>
      )}
    </>
  );
};

export default AddToCart;
