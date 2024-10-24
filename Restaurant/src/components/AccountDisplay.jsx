import styles from "./Homepage.module.css";
import { IoLogoGoogle } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa6";
import { FaApple } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AccountDisplay = () => {
  let [email, setemail] = useState();
  let [password, setpassword] = useState();
  let [img, setimg] = useState();
  const navigate = useNavigate();

  const signupPage = () => {
    window.open("/signup", "_blank", "noopener,noreferrer");
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Enter all the data");
      return;
    }

    axios
      .post("http://localhost:3000/login", { img, email, password })
      .then((result) => {
        console.log(result);
          navigate('/about')
      })
      .catch((err) => {
        console.error(err);
        alert("Error");
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
              <label htmlFor="avatarUpload">Upload Your Avatar</label>
              <input
                type="file"
                name="avatarUpload"
                id="avatarUpload"
                className="form-control border-primary"
                onChange={(e) => {
                  setimg(e);
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
