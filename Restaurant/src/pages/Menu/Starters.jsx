import { StarterItems } from "./AllMenuItems";
import { CartContext } from "../../StoreContext/Storecontext";
import { useContext } from "react";
const Starter = () => {
  const {addToCart} = useContext(CartContext)
  return (
    <>
      {StarterItems.map((sitems,index) => {
        return (
          <>
            <div className="card c-salad border-top" key={index} >
              <img className="card-img-top" src={sitems.src} alt="Starters" />
              <div className="card-body">
                <p className="card-text">{sitems.name}  <button className="btn btn-primary" onClick={()=>addToCart(sitems)}>ADD</button> <span className="Itemsrate">₹ {sitems.rate}</span> </p>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Starter;
