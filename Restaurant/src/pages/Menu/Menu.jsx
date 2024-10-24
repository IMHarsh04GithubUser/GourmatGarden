import Navbar from "../../components/Navbar";
import "./Menu.css";
import SaladCard1 from "./Salad";
import Starter from "./Starters";
import Drinks from "./Drinks";
import{ Lunch} from "./Lunch";
import Dessert from "./Dessert";
import Footer from "../../components/Footer";
import { IoArrowUpSharp } from "react-icons/io5";
import { useState } from "react";

export const MenuTag = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleToggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <div className="MenuLinkContainer container-fluid" id="home1">
        <div className="borderTop"></div>
        <div className="BackgroundWelcome">
          <Navbar />
          <div className="buttonOpen">
            <button
              type="button"
              className="btn-glow"
              id="btn-display"
              onClick={handleToggleMenu}
            >
              {!openMenu?"OPEN MENU":"CLOSE MENU"}
            </button>
          </div>

          <div className="HereDisplay">{openMenu}</div>
          {openMenu && (
            <div className="card-sm card-menu border">
              <ul className="list-group list-group-flush">
                <li className="list-group-item active">
                  <a href="#salad1" className="navbar-brand">
                    SALAD
                  </a>
                </li>
                <li className="list-group-item">
                  <a href="#starter1" className="navbar-brand">
                    STARTER
                  </a>
                </li>
                <li className="list-group-item">
                  <a href="#drinks1" className="navbar-brand">
                    DRINKS
                  </a>
                </li>
                <li className="list-group-item">
                  <a href="#lunch1" className="navbar-brand">
                    LUNCH
                  </a>
                </li>
                <li className="list-group-item">
                  <a href="#dessert1" className="navbar-brand">
                    DESSERT
                  </a>
                </li>
              </ul>
            </div>
          )}
          
          <div className="WelcomeToMenu">
            <p>GOURMET GARDEN'S </p>
            <p>MENU</p>
            <p>
              {" "}
              <a href="#home1">
                <IoArrowUpSharp />
              </a>
            </p>
          </div>
        </div>
        <div className="borderTop"></div>
        <div className="LunchContainer">SALAD</div>
        <div className="SaladItems1" id="salad1">
          <SaladCard1 />
        </div>
        
      </div>
      <div className="LunchContainer">STARTER</div>
      <div className="StarterItems" id="starter1">
        <Starter />
      </div>
      <div className="LunchContainer">DRINKS</div>
      <div className="DrinksItems" id="drinks1">
        <Drinks />
      </div>
      <div className="LunchContainer">LUNCH</div>
      <div className="LunchItems" id="lunch1">
        <Lunch />
      </div>
      <div className="LunchContainer">DESSERT</div>
      <div className="DessertItems" id="dessert1">
        <Dessert />
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </>
  );
};
