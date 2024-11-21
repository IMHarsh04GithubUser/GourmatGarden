import { useState } from "react";
import styles from "./Homepage.module.css";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import {  toast } from 'react-toastify';

const FormContainer = () => {
  const [name,setname] = useState()
  const [phone,setphone] = useState()
  const [email,setemail] = useState()
  const [date,setdate] = useState()
  const [time,settime] = useState()
  const [persons,setpersons] = useState()
  const navigate = useNavigate()

  const currentDate = new Date().toISOString().split("T")[0];
  const currentTime = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  const BookTableNow = (e) => {
       
    e.preventDefault()

    if(!name||!phone||!email||!date||!time||!persons){
      toast.warn('Enter All The Credentials')
      return
      
    }
    

    axios.post('http://localhost:3000/booking',{name,phone,email,date,time,persons})
    .then((result)=>{console.log(result)
      toast.info(`Congratulations Your Seat Booked for ${date}`)
      navigate('/')
    })
    .catch(err=>console.log("ERROR",err)
    ) 
  }


  return (
    <>
      <div className={styles.FormBorder} id="formcontainerR"></div>
      <div className={styles.FormContainer} id="formcontainer1">
        <div className={styles.FormHeading}>
          <h1>
            RESERVATION <br />
            <span>BOOK TABLE</span>{" "}
          </h1>
        </div>
        <div className={styles.MainForm}>
          <form
            action=""
            method="post"
            className={`bgForm border-top ${styles.Form}`}
            onSubmit={BookTableNow}
          >
            <div className="form-group">
              <label htmlFor="Inputname">Name:</label>
              <input
                type="text"
                className="form-control"
                id="Inputname"
                aria-describedby="namewrite"
                placeholder="Enter Your Name"
                name="name"
                onChange={e=>{setname(e.target.value)}}
              />
            </div>
            <div className="form-group">
              <label htmlFor="Phoneno">Phone:</label>
              <input
                type="tel"
                className="form-control"
                id="Phoneno"
                aria-describedby="phoneno."
                placeholder="Enter Your Phone No."
                name="tel"
                onChange={e=>{setphone(e.target.value)}}
              />
            </div>
            <div className="form-group">
              <label htmlFor="EmailId">Email:</label>
              <input
                type="email"
                className="form-control"
                id="EmailId"
                aria-describedby="emaiid"
                placeholder="Enter Your Email"
                name="email"
                onChange={e=>{setemail(e.target.value)}}
              />
            </div>
            <div className="form-group">
              <label htmlFor="Date1">Date:</label>
              <input
                type="date"
                className="form-control"
                id="Date1"
                aria-describedby="Date"
                placeholder="Date"
                name="date"
                min={currentDate}
                onChange={e=>{setdate(e.target.value)}}
              />
            </div>
            <div className="form-group">
              <label htmlFor="Time1">Time:</label>
              <input
                type="time"
                className="form-control"
                id="Time1"
                aria-describedby="Time"
                placeholder="Time"
                name="time" 
                min={currentTime}
                onChange={e=>{settime(e.target.value)}}               
              />
            </div>
            <div className="form-group">
              <label htmlFor="form-select" >PERSONS:</label>
              <select
                className={`form-select ${styles.Formselect}`}
                aria-label="Default select example"
                id="form-select"
                name="persons"
                onChange={e=>{setpersons(e.target.value)}}
                
              >
                <option  defaultValue={'Persons'}>Persons</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>
            <div className="form-group">
              <input
                type="submit"
                value="BOOK"
                className="form-control btn btn-dark"
              />
            </div>
          </form>
        </div>
        <div className={styles.FormPic} />
      </div>
    </>
  );
};

export default FormContainer;
