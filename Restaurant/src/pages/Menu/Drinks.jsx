import { DrinksItems } from "./AllMenuItems";
import { CartContext } from "../../StoreContext/Storecontext";
import { useContext } from "react";
const Drinks = () => {
  const {addToCart} = useContext(CartContext)

  return (
    <>
      {DrinksItems.map((sitems,index) => {
        return (
          <>
            <div className="card c-salad border-top" key={index}>
              <img className="card-img-top" src={sitems.src} alt="Drinks" />
              <div className="card-body">
                <p className="card-text">
                  {sitems.name} <button className="btn btn-primary" onClick={()=>addToCart(sitems)}>ADD</button>{" "}
                  <span className="Itemsrate">₹ {sitems.rate}</span>
                </p>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Drinks;
