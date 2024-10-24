import { DessertItems } from "./AllMenuItems";
import { CartContext } from "../../StoreContext/Storecontext";
import { useContext } from "react";
const Dessert = () => {
 const {addToCart} = useContext(CartContext)
  return (
    <>
      {DessertItems.map((ditems,index) => {
        return (
          <>
            <div className="card c-salad border-top" key={index}>
              <img className="card-img-top" src={ditems.src} alt="Dessert" />
              <div className="card-body">
                <p className="card-text">
                  {ditems.name} <button className="btn btn-primary" onClick={()=>addToCart(ditems)}>ADD</button>{" "}
                  <span className="Itemsrate">₹ {ditems.rate}</span>
                </p>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Dessert;
