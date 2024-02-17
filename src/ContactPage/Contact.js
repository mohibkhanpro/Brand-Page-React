import React from "react";
import "./Contact.css";
import Button from "./ContactComponent/Button";
import { MdOutlineMessage } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
import img from "./../Images/contact-img.svg" 
const Contact = () => {
  function onsubmit(event){
    event.preventDefault()
    // eslint-disable-next-line no-unused-expressions
    let name=(event.target[0].value)
    let email= (event.target[1].value)
    let text=(event.target[2].value)
    console.log({name,email,text})
  }
 
  return (
    <>
      <div className="Contact-text-div">
        <h1 className="Contact-text">CONTACT US</h1>
        <p className="pra-text">
          LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU!
          WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN
          REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE,
          EMAIL, OR SOCIAL MEDIA.{" "}
        </p>
      </div>

      <div className="Contact-text-div-2">
        <div className="form-div">
          <div className="btn-div">
            <Button 
              text="VIA SUPPORT CHAT"
              icon={<MdOutlineMessage fontSize={"24px"} />}
            />
            <Button
         
              text="VIA CALL"
              icon={<IoIosCall fontSize={"24px"} />}
            />
          </div>
          <Button
          isoutlin={true}
              text="VIA EMAIL FORM"
              icon={<IoIosMail fontSize={"28px"} />}
            />

            {/* form */}

            <form action="" onSubmit={onsubmit}>
              <div className="form-control">
                <label htmlFor="" id="1">Name</label>
                <input type="text" name="" id="1" />
              </div>
              <div className="form-control">
                <label htmlFor="" id="2">E-Mail</label>
                <input type="email" name="" id="2" />
              </div>
              <div className="form-control">
                <label htmlFor="" id="3">Text</label>
                <textarea name="" id="3" cols="30" rows="10"></textarea>
              </div>
              <div style={{display:"flex",justifyContent:"end"}}>
              <Button
            
              text="SUBMIT"
              
            />
            </div>
            </form>
        </div>
        <div className="img-div">
        <img src={img} height={"500px"} alt="" />
        </div>
      </div>
    </>
  );
};

export default Contact;
