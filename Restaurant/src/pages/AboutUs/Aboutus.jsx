import Navbar from "../../components/Navbar";
import "./About.css";
import MixVeg from "./MixVeg.jpeg";
import Footer from "../../components/Footer";

const AboutUs = () => {
  return (
    <>
      <div className="AboutUsMain container-fluid">
        <div className="AboutUsPage">
          <div className="borderTop"></div>
          <Navbar />
          <div className="AboutFirstPage">
            <p>About Us</p>
          </div>
        </div>
        <div className="borderTop"></div>
        <div className="AboutUsContent">
          <div className="About1">
            <h1>ABOUT OUR STORY</h1>
            <p>
              At Gourmet Garden, we blend culinary artistry with the freshest
              ingredients to create a dining experience that delights the
              senses. Our chefs craft each dish with passion, drawing
              inspiration from global flavors to offer a unique and memorable
              meal. Join us for an unforgettable journey in taste, where every
              bite tells a story.
            </p>
            <input
              type="button"
              value="ABOUT US"
              className="btn btn-danger text-light"
            />
          </div>
          <div className="About2">
            <img src={MixVeg} alt="" id="dimg1" />
          </div>
        </div>
        <div className="borderTop"></div>
        <Footer />
      </div>
    </>
  );
};

export default AboutUs;
