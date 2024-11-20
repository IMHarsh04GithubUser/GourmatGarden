import "./Signup.css";
import { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
const SignUpform = () => {
    let [email, setemail] = useState();
    let [password, setpassword] = useState();
    let [address,setaddress] = useState()
    let navigate = useNavigate()
    const handlesubmit = (e) => {
        e.preventDefault() 
        axios.post('http://localhost:3000/register',{email,password,address})
        .then(result=>{console.log(result)
            navigate('/')
        })
        .catch(err=>{console.error(err)
          
        })
    }

  return (   

    <>
      <div className="SignUpcontainer border border-primary">
        <h1 className="display text-center">WELCOME TO GOURMAT GARDEN</h1>
        <form action="" method="post" onSubmit={handlesubmit}>
          <div className="form-group">
            <label htmlFor="email"></label>
            <input
              type="email"
              id="email1"
              name="email"
              className="form-control"
              placeholder="Email"
              onChange={(e)=>setemail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="createpass"></label>
            <input
              type="password"
              id="signuppass1"
              name="password"
              className="form-control border"
              placeholder="Create Password"
              onChange={(e)=>{setpassword(e.target.value)}}
            />
          </div>
          <div className="form-group">
            <label htmlFor="address1"></label>
            <input
              type="text"
              id="signupadd"
              name="address1"
              className="form-control border"
              placeholder="Enter Address"
              onChange={(e)=>{setaddress(e.target.value)}}
            />
          </div>
          
          
          <input
            type="submit"
            value="Sign Up"
            className="btn btn-primary signup-btn form-control"
          />
          <p className="text-center">Or Sign Up with </p>
          <input
            type="button"
            className="btn btn-success google-btn form-control"
            value="Login with Google"
          />
        </form>
      </div>
    </>
  );
};

export default SignUpform;
