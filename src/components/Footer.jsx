import React from "react";
import "./components.css";
import img from "../assets/images/texture.png";
import mail from '../assets/images/mail-icon.svg'
import { Link } from "react-router-dom";
import logo from "../assets/logo/logo.svg"
const Footer = (props) => {
  return (
    <div>
      <div className="footer">
        {/* <img src={img} alt="" /> */}

        <div className="img">
          <img src={props.img} alt="" />
        </div>

           <h1>{props.h1}</h1>
        {/* <h1>We’re here to help you <br />
        invest smarter.</h1> */}

<p>{props.p}</p>
        {/* <p>Whether you have a question, need  assistance, or want to explore our services in more detail — reach out and our team will get back to you shortly.</p> */}

        <button>Book a consultation</button>
      </div>

      <div className="footer1">
        <div className="f1">
        <Link className="flink" to="/">
            <img src={logo} alt="" />
            <p>Research Analyst <br />
          Services</p>
        </Link>

        <div className="f1t">
          <h1>Disclaimer :</h1>
          <p>Investment in securities markets is subject to market risks. Read all scheme-related documents carefully before investing. Research Analyst Services is SEBI registered under INH000013040. 
          The content provided is for informational purposes only and does not constitute investment advice.</p>
        </div>
        </div>


        <div className="f1">
          <h1>QUICK LINKS</h1>
          <Link to="/aboutus" className="Link"> About</Link>
          <Link to="/services" className="Link">Services</Link>
          <Link to="/pricing" className="Link">Pricing</Link>
          <Link to="/contactus" className="Link">Contact Us</Link>
          {/* <Link></Link> */}
        </div>

        <div className="f1">
          <h1>SOCIAL</h1>
          <Link className="Link">Facebook</Link>
          <Link className="Link">x.com</Link>
          <Link className="Link">Instagram</Link>
          {/* <Link></Link> */}
          {/* <Link></Link> */}
        </div>

        <div className="f1">
          <h1>CONTACT</h1>
          <Link className="Link">asramanager1@gmail.com</Link>
          <Link className="Link">+91 8655662938</Link>
          <Link className="Link">Dombivili(East), Maharashtra, India</Link>
          {/* <Link></Link> */}
          {/* <Link></Link> */}
        </div>
       
      </div>
    </div>
  );
};

export default Footer;
