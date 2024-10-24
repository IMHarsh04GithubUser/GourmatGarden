import { useState } from "react";
import "./Contact.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const MessageBox1 = () => {
  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [phone, setphone] = useState();
  const [message, setmessage] = useState();
  const Navigate = useNavigate()

  const handleQuery = (e) => {
    e.preventDefault();

    if (!name || !email || !phone || !message) {
      alert("Enter Your Data");
      return;
    }

    axios
      .post("http://localhost:3000/message", { name, email, phone, message })
      .then((result) => {
        console.log(result);
        alert("Thank You For Your FeedBack");
               
      })
      .catch((err) => {
        console.log(err);
        alert("Error To Get Your Response");
      });
  };

  return (
    <>
      <div className="hrborder"></div>

      <div className="Mainbox">
        <h1 className="h1">SEND US A MESSAGE</h1>
        <form className="MessageBoxMain" onSubmit={handleQuery}>
          <div className="input-1">
            <label htmlFor="Name1">Name:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              id="Name1"
              name="name"
              onChange={(e) => {
                setname(e.target.value);
              }}
            />
          </div>
          <div className="input-2">
            <label htmlFor="Email1">Email:</label>
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              id="Email1"
              name=" email"
              onChange={(e) => {
                setemail(e.target.value);
              }}
            />
          </div>
          <div className="input-3">
            <label htmlFor="Phone1">Phone:</label>
            <input
              type="tel"
              className="form-control"
              placeholder="Phone"
              id="Phone1"
              name="phone"
              onChange={(e) => {
                setphone(e.target.value);
              }}
            />
          </div>
          <div className="input-4">
            <textarea
              name="message"
              id="message1"
              className="form-control"
              placeholder="Message"
              onChange={(e) => {
                setmessage(e.target.value);
              }}
            ></textarea>
          </div>
          <div className="input-5">
            <input
              type="submit"
              value="SUBMIT"
              className="btn btn-dark text-light form-control"
              id="input5"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default MessageBox1;
