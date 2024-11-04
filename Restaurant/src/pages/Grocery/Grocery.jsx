import Navbar from "../../components/Navbar";
import "./Grocery.css";
import { FaLongArrowAltDown } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { QuizBtn } from "./Quizbtn";
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
        <div className="text-center">
          <p className="Gift_Text">
            PLAY A GAME <br /> <span>AND GET A CHANCE TO WIN THESE ITEMS</span><br />
            <NavLink to='/quiz'><QuizBtn/></NavLink>
            <span></span>
          </p>
        </div>
      </div>

      <div className="border_grocery_heading">
        <h1 className="text-center">BEVERAGES</h1>
      </div>
      <div className="cards-1 d-flex flex-row gap-5 mx-5 p-5 bg-success">
        {Beverages.map((item, id) => {
          return (
            <>
              <div
                className="card"
                style={{ width: 18 + "rem", height: 18 + "rem" }}
                key={id}
              >
                <img
                  src={item.src}
                  class="card-img-top "
                  style={{ overflow: "hidden" }}
                  alt="..."
                />
                <div className="card-body">
                  <p>
                    {item.name}{" "}
                    <span style={{ float: "right" }}>{item.cost}</span>
                  </p>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <div className="border_grocery_heading">
        <h1 className="text-center">SPICES</h1>
      </div>
      <div className="cards-1 d-flex flex-row gap-5 mx-5 p-5 bg-success">
        {spices.map((item, id) => {
          return (
            <>
              <div
                className="card"
                style={{ width: 18 + "rem", height: 18 + "rem" }}
                key={id}
              >
                <img
                  src={item.src}
                  class="card-img-top"
                  style={{ overflow: "hidden" }}
                  alt="..."
                />
                <div className="card-body">
                  <p>
                    {item.name}{" "}
                    <span style={{ float: "right" }}>{item.cost}</span>
                  </p>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <div className="border_grocery_heading">
        <h1 className="text-center">PULSES AND GRAINS</h1>
      </div>
      <div className="cards-1 d-flex flex-row gap-5 mx-5 p-5 bg-success">
        {Pulses_Grains.map((item, id) => {
          return (
            <>
              <div
                className="card"
                style={{ width: 18 + "rem", height: 18 + "rem" }}
                key={id}
              >
                <img
                  src={item.src}
                  class="card-img-top"
                  style={{ overflow: "hidden" }}
                  alt="..."
                />
                <div className="card-body">
                  <p>
                    {item.name}{" "}
                    <span style={{ float: "right" }}>{item.cost}</span>
                  </p>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <div className="border_grocery_heading">
        <h1 className="text-center">COOKING ESSENTIALS</h1>
      </div>
      <div className="cards-1 d-flex flex-row gap-5 mx-5 p-5 bg-success">
        {cooking_essential.map((item, id) => {
          return (
            <>
              <div
                className="card"
                style={{ width: 18 + "rem", height: 18 + "rem" }}
                key={id}
              >
                <img
                  src={item.src}
                  class="card-img-top"
                  style={{ overflow: "hidden" }}
                  alt="..."
                />
                <div className="card-body">
                  <p>
                    {item.name}{" "}
                    <span style={{ float: "right" }}>{item.cost}</span>
                  </p>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <div className="border_grocery_heading">
        <h1 className="text-center">FRESH PRODUCTS</h1>
      </div>
      <div className="cards-1 d-flex flex-row gap-5 mx-5 p-5 bg-success">
        {Fresh_Produce.map((item, id) => {
          return (
            <>
              <div
                className="card"
                style={{ width: 18 + "rem", height: 18 + "rem" }}
                key={id}
              >
                <img
                  src={item.src}
                  class="card-img-top"
                  style={{ overflow: "hidden" }}
                  alt="..."
                />
                <div className="card-body">
                  <p>
                    {item.name}{" "}
                    <span style={{ float: "right" }}>{item.cost}</span>
                  </p>
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
