import { LunchItems } from "./AllMenuItems";
import { CartContext } from "../../StoreContext/Storecontext";
import { useContext } from "react";
export const Lunch = () => {
  const {addToCart} = useContext(CartContext)
  return (
    <>
      {LunchItems.map((litems,index) => {
        return (
          <>
            <div className="card c-salad border-top" key={index}>
              <img className="card-img-top" src={litems.src} alt="Lunch" />
              <div className="card-body">
                <p className="card-text">
                  {litems.name} <button className="btn btn-primary" onClick={()=>addToCart(litems)}>ADD</button>{" "}
                  <span className="Itemsrate">₹ {litems.rate}</span>
                </p>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Lunch;
