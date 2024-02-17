import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="home-main-div">
        <div className="div-1">
          <h1>YOUR FEET DESERVE THE BEST</h1>
          <h6>
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </h6>
          <div className="button-div">
            <button className="btn btn-1">Shop Now</button>
            <button className="btn btn-2">Category</button>
          </div>
          <div className="last-div">
            <p>Also Available On</p>
            <div style={{display:"flex",width:"100%",height:"61%",marginTop:"12px"}}>
            <div className="flipcart"></div>
            <div className="amazon"></div>
            </div>
          </div>
        </div>
        <div className="div-2"></div>
      </div>
    </>
  );
};

export default Home;
