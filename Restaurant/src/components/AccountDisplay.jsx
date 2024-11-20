import styles from "./Homepage.module.css";
import { IoLogoGoogle } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa6";
import { FaApple } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../StoreContext/Storecontext";
import { ToastContainer, toast } from 'react-toastify';

const AccountDisplay = () => {
  let [email, setemail] = useState();
  let [password, setpassword] = useState();
  let [address, setaddress] = useState();
  const navigate = useNavigate();
  const {handleLogin} = useContext(CartContext)

  const signupPage = () => {
    window.open("/signup", "_blank", "noopener,noreferrer");
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Enter all the data/Home Address Not Requuired");
      return;
    }

    axios
      .post("http://localhost:3000/login", { email, password,address })
      .then((result) => {
        console.log(result);
        const token = result.data.token
        handleLogin(token)
        toast.success(`Login Successful Welcome ${result.data.user.email}`)
        console.log(result.data)
          navigate('/')
      })
      .catch((err) => {
        console.error(err);
        alert("An Error occur During Login");
      })
      

  };

  return (
    <>
      <div className={`${styles.LoginPage} container-fluid`}>
        <div className={styles.LoginContent}>
          <div className={styles.LoginWelcome}>
            <div className="text-primary text-bold">
              Welcome To GOURMAT GARDEN
            </div>
            <div className="text-danger">Sign In</div>
          </div>
          <div className={styles.SignupAccount}>
            <div onClick={signupPage}>No Account?</div>
            <div className="text-danger" onClick={signupPage}>
              Sign Up
            </div>
          </div>
        </div>
        <div className={styles.SocialMediaIconsLogin}>
          <IoLogoGoogle />
          <FaFacebook />
          <FaApple />
        </div>
        <form
          action=""
          method="post"
          className="form-group"
          onSubmit={handlesubmit}
        >
          <div className={`form-group ${styles.formLogin}`}>
            <div>
              <label htmlFor="address">Enter Your Address</label>
              <input
                type="text"
                name="address"
                id="address"
                placeholder="Enter Home Address"
                className="form-control border-primary"
                onChange={(e) => {
                  setaddress(e);
                }}
              />
            </div>
            <div>
              <label htmlFor="loginemail">Email address</label>
              <input
                type="email"
                name="email"
                id="loginemail"
                className="form-control border-primary"
                placeholder="Email address"
                onChange={(e) => setemail(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="loginPassword">Enter your Password</label>
            <input
              type="password"
              name="password"
              id="loginPassword"
              className="form-control border-primary"
              placeholder="Password"
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />
            <p className={`${styles.forgottext}`}>Forgot Password</p>
          </div>
          <button
            type="submit"
            className={`${styles.btnlogin} btn btn-success text-light`}
          >
            Sign in
          </button>
        </form>
      </div>
    </>
  );
};

export default AccountDisplay;
