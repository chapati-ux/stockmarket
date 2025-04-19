import React from "react";
import "./components.css";
import { Link } from "react-router-dom";
import logo from "../assets/logo/logo.svg"

const Nav = () => {
  return (
    <>
      <nav>
        <div className="nlogo">
          <Link className="nlink" to="/">
          <img src={logo} alt="" />
          <p>Research Analyst <br />
          Services</p></Link>
        </div>

        <div className="ntext">
          <Link className="link" to="/">Home</Link>
          <Link className="link" to="/aboutus">AboutUS</Link>
          <Link className="link" to="/services">Services</Link>
          <Link className="link" to="/pricing">Pricing</Link>
          <Link className="link" to="/contactus">ContactUs</Link>
        </div>

        <div className="btn">
          <button className="login">Login</button>
          <button className="signup">SignUp</button>
        </div>
      </nav>
    </>
  );
};

export default Nav;
