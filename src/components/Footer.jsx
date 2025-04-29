import React from "react";
import "./components.css";
import img from "../assets/images/texture.png";
import mail from '../assets/images/mail-icon.svg'
import { Link } from "react-router-dom";
import logo from "../assets/logo/logo3.png"
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

        <button><Link to="/contactus">Contact Us</Link> </button>
      </div>

      <div className="footer1">
        <div className="f1">
        <Link className="flink" to="/">
            <img  className="flogo" src={logo} alt="" />
            <p>Research Analyst <br />
          Services</p>
        </Link>

        <div className="f1">
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
          {/* <Link className="Link" href="mailto:asramanager1@gmail.com">asramanager1@gmail.com</Link> */}
          <a className="Link" href="mailto:asramanager1@gmail.com">asramanager1@gmail.com</a>
          {/* <Link className="Link">+91 8655662938</Link> */}
          <a className="Link" href="tel:+918655662938">+91 8655662938</a>
          {/* <Link className="Link">Dombivili(East), Maharashtra, India</Link> */}
          <a className="Link" >Dombivili(East), Maharashtra, India</a>
          {/* <Link></Link> */}
          {/* <Link></Link> */}
        </div>
        
      </div>
      {/* <div className="f2">
      <p>© 2025 Research Analyst Services. All rights reserved.</p>
      </div> */}
     
    </div>
  );
};

export default Footer;
