import styles from "./Homepage.module.css";
import { IoLogoGoogle } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa6";
import { FaApple } from "react-icons/fa";
import { useContext } from "react";
import { UserContext } from "../StoreContext/UserContext";

const AccountDisplay = () => {
  const { setemail, setpassword, signupPage, handlesubmit } =
    useContext(UserContext);

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
