import React from "react";
import "./components.css";
import { Link } from "react-router-dom";
import logo from "../assets/logo/logo3.png"
import { MdMenu } from "react-icons/md";
import { useState } from "react";
const Nav = () => {
  const [state,setState]=useState(false)
  let menu=()=>{
    // let state = 0;
    let menu = document.querySelector(".menu")
    if(state===false){
      menu.style.display="block";
      setState(!false)
    }
    else{
      menu.style.display="none";
      setState(false)
    }
    //^ console.log("clicked")
  }
  return (
    <>
     <p className="nt">Trust-Based: SEBI-Registered Since 2010 — Empowering Investors for 14+ Years</p>
    <div className="navcon">
     
      <nav>
        <div className="nlogo">
          <Link className="nlink" to="/">
          <img src={logo} alt="" />
          <p>Research <br /> Analyst <br />
          Services</p></Link>
        </div>

        <div className="ntext">
          <Link className="link" to="/">Home</Link>
          <Link className="link" to="/aboutus">AboutUS</Link>
          <Link className="link" to="/services">Services</Link>
          <Link className="link" to="/pricing">Pricing</Link>
          <Link className="link" to="/contactus">ContactUs</Link>
          <Link className="link" to="/userconcent">User Concern</Link>
        </div>

        <div className="btn">
        <Link to='/login'><button className="login">Login</button></Link>  
          {/* <button className="signup">SignUp</button> */}
        </div>

        <div className="ibox">
        <MdMenu className="imenu" onClick={menu} />
        </div>
      </nav>

      <div className="menu">
      <div className="ntext1">
          <Link className="link" to="/">Home</Link>
          <Link className="link" to="/aboutus">AboutUS</Link>
          <Link className="link" to="/services">Services</Link>
          <Link className="link" to="/pricing">Pricing</Link>
          <Link className="link" to="/contactus">ContactUs</Link>
          <Link className="link" to="/concern">User Concern</Link>
          <div className="btn">
        <Link to='/login'><button className="login">Login</button></Link>  
          {/* <button className="signup">SignUp</button> */}
        </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Nav;
