import Navbar from "../../components/Navbar";
import "./Contact.css";
import MessageBox1 from "./MessageBox";
import Footer from "../../components/Footer";
import WelcomeContactUs from "./ContactUsWelcome";
const ContactUs = () => {
  return (
    <>
      <div className="ContactUs container-fluid">
        <div className="Mainborder"></div>
        <div className="ContactUsContianer ">
          <Navbar />
          <WelcomeContactUs />
        </div>
        <MessageBox1 />
        <Footer />
      </div>
    </>
  );
};

export default ContactUs;
