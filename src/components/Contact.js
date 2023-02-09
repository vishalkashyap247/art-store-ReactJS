import React,{useState} from "react";
import "../styles/contact.css";
// import { FontawesomeObject } from "@fortawesome/fontawesome-svg-core";
// import { FontawesomeIcon } from "@fortawesome/fontawesome-svg-core";


function Contact() {
    const[formData, setFormData] = useState({
        namee:"",
        email:"",
        message:""
    });

    function handleChange(event){
        // console.log(event.name);
        const name=event.target.name;
        const value=event.target.value;
        console.log(name, value);

        setFormData((prev)=>{
            return{
                ...prev,[name]:value
            }
        });
    }
    function handleClick(data){
        var reply="";
        if(formData.email === "" || formData.email==="" || formData.message===""){
            reply = "Kindly fill the form completely.";

        }
        else{
            reply = "Hello "+formData.namee+" message has successfully send! Thankyou for contacting me. I'll try to reply you ASAP.";
            setFormData({
                namee:"",
                email:"",
                message:""
            })
        }
        window.alert(reply);
        data.preventDefault();
    }
  return (
    <>
    <br/>
    <form className="container fluid contacto">
    <h2 className="myDesc">Feel free to contact Vishal</h2>
        <div className="outerDiv">
        <label>Your name</label><br/>
        <input type="text" name="namee" value={formData.namee} className="inputLelo" placeholder="Enter name here" onChange={handleChange} required={true} />
        </div>
        <div className="outerDiv">
            <label>Your email</label><br/>
            <input type="email" name="email" value={formData.email} className="inputLelo" placeholder="Enter email here" onChange={handleChange} />
        </div>
        <div className="outerDiv">
            <label>Your message</label><br/>
            <textarea className="inputLelo" name="message" value={formData.message} rows="3" placeholder="Enter message here" onChange={handleChange} required />
        </div>
        
        <button type="submit" className="btn btn-primary myButton" onClick={handleClick} >Submit</button>
    </form></>
  );
}

export default Contact;
