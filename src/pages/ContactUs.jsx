import React from 'react'
import Nav from '../components/Nav'
import icon1 from '../assets/images/port.png';
import icon2 from '../assets/images/bulb2.png';
import icon3 from '../assets/images/bell.png';


const ContactUs = () => {
  return (
    <div className="contact">
      <Nav/>
      <div className="letConnet">
        <div className="head1">
        <h2>Let’s Connect</h2>
        <p>Have a question, need expert guidance, or want to explore our services in more depth?</p>
        </div>
      <div className="let1">
        <div className="con">
        <div className="one"><img src={icon1} alt="" /> </div>
         <div className="two"><p>Optimize your portfolio using expert-crafted <br /> strategies backed by historical data,  <br />predictive analytics, and proven financial <br /> models.</p></div> 
        </div>
        <div className="con">

          <div className="one"><img src={icon2} alt="" /> </div>
          <div className="two"><p>Trade with confidence. Get daily or weekly <br />trading ideas based on technical indicators <br />and market sentiment — delivered in a way <br /> that’s easy to act on.</p></div>
        </div> 
        <div className="con">
        <div className="one"><img src={icon3} alt="" /> </div>
        <div className="two"><p>Never miss an opportunity. Stay updated <br /> with timely alerts for stock movements,<br /> trend reversals, and critical news that <br />impacts your investments.</p></div>
        </div>
      </div>
  
{/* form container  */}

    <div className="form-container">
      <form className="form">
        <div className="form-row">
          <div className="form-group">
            <label>First name <span>*</span></label>
            <input type="text" placeholder="Name" />
          </div>
          <div className="form-group">
            <label>Last name <span>*</span></label>
            <input type="text" placeholder="Surname" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Email id <span>*</span></label>
            <input type="email" placeholder="name@example.com" />
          </div>
          <div className="form-group">
            <label>Phone no. <span>*</span></label>
            <input type="tel" placeholder="+91 **********" />
          </div>
        </div>

        <div className="form-group full">
          <label>City</label>
          <select>
            <option>Mumbai</option>
            <option>Thane</option>
            <option>New-Mumbai</option>
          </select>
        </div>

        <div className="form-group full">
          <label>How can we help?</label>
          <textarea placeholder="Your message..."></textarea>
        </div>

        <p className="policy-text">
          By submitting this, I confirm that I have read and understood the <a href="#">Privacy Policy</a>.
        </p>

        <div className="submit-btn-wrapper">
          <button type="submit" className="submit-btn">Submit</button>
        </div>
      </form>
    </div>
      </div>
      </div>
  )
}

export default ContactUs