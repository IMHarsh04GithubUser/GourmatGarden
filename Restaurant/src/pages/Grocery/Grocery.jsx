import Navbar from "../../components/Navbar";
import "./Grocery.css";
import Rest from "../../assets/Rest.png";
import {
  Beverages,
  Fresh_Produce,
  Pulses_Grains,
  cooking_essential,
  spices,
} from "./Items_Grocery";
const Grocery = () => {
  return (
    <>
      <div className="Grocery_Header bg-danger p-2 container-fluid">
        <Navbar />
      </div>

      <div className="border_grocery_heading">
        <h1 className="text-center">BEVERAGES</h1>
      </div>
      <div className="cards-1 d-flex flex-row gap-5 mx-5 p-5">
      {Beverages.map((item,id) => {
        return (
          <>
            <div className="card" style={{width: 18+'rem',height:18+'rem'}} key={id}>
              <img src={item.src} class="card-img-top" alt="..." />
              <div className="card-body">
                <p>{item.name}</p>
                <p>{item.cost}</p>
              </div>
            </div>
          </>
        );
      })}
      </div>
      <div className="border_grocery_heading">
        <h1 className="text-center">SPICES</h1>
      </div>
      <div className="cards-1 d-flex flex-row gap-5 mx-5 p-5">
      {spices.map((item,id) => {
        return (
          <>
            <div className="card" style={{width: 18+'rem',height:18+'rem'}} key={id}>
              <img src={item.src} class="card-img-top" alt="..." />
              <div className="card-body">
                <p>{item.name}</p>
                <p>{item.cost}</p>
              </div>
            </div>
          </>
        );
      })}
      </div>
      <div className="border_grocery_heading">
        <h1 className="text-center">PULSES AND GRAINS</h1>
      </div>
      <div className="cards-1 d-flex flex-row gap-5 mx-5 p-5">
      {Pulses_Grains.map((item,id) => {
        return (
          <>
            <div className="card" style={{width: 18+'rem',height:18+'rem'}} key={id}>
              <img src={item.src} class="card-img-top" alt="..." />
              <div className="card-body">
                <p>{item.name}</p>
                <p>{item.cost}</p>
              </div>
            </div>
          </>
        );
      })}
      </div>
      <div className="border_grocery_heading">
        <h1 className="text-center">COOKING ESSENTIALS</h1>
      </div>
      <div className="cards-1 d-flex flex-row gap-5 mx-5 p-5">
      {cooking_essential.map((item,id) => {
        return (
          <>
            <div className="card" style={{width: 18+'rem',height:18+'rem'}} key={id}>
              <img src={item.src} class="card-img-top" alt="..." />
              <div className="card-body">
                <p>{item.name}</p>
                <p>{item.cost}</p>
              </div>
            </div>
          </>
        );
      })}
      </div>
      <div className="border_grocery_heading">
        <h1 className="text-center">FRESH PRODUCTS</h1>
      </div>
      <div className="cards-1 d-flex flex-row gap-5 mx-5 p-5">
      {Fresh_Produce.map((item,id) => {
        return (
          <>
            <div className="card" style={{width: 18+'rem',height:18+'rem'}} key={id}>
              <img src={item.src} class="card-img-top" alt="..." />
              <div className="card-body">
                <p>{item.name}</p>
                <p>{item.cost}</p>
              </div>
            </div>
          </>
        );
      })}
      </div>
     
    </>
  );
};

export default Grocery;
