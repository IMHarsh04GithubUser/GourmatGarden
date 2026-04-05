import PropTypes from "prop-types";
import { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { CartContext } from "./Storecontext";
import { toast } from "react-toastify";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const AccountDisplay = () => {
    {
      /*SIGN UP PAGE*/
    }
    let [email, setemail] = useState();
    let [password, setpassword] = useState();
    const navigate = useNavigate();
    const { handleLogin, handleData } = useContext(CartContext);
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
        .post("http://localhost:3000/login", { email, password })
        .then((result) => {
          console.log(result);
          const token = result.data.token;
          handleLogin(token);
          handleData(result.data.user);
          toast.success(`Welcome ${result.data.user.uname}`);
          console.log(result.data);
          navigate("/");
        })
        .catch((err) => {
          console.error(err);
          alert("An Error occur During Login");
        });
    };

    return (
      <UserContext.Provider
        value={{
          AccountDisplay,
          setemail,
          setpassword,
          signupPage,
          handlesubmit,
          handleLogin,
        }}
      >
        {children}
      </UserContext.Provider>
    );
  };

  return <AccountDisplay />;
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
