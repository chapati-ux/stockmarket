import React from 'react'
import Nav from '../components/Nav'
import "./style2.css"

const UserConsent = () => {
  return (
    <>
    <Nav/>
   <div className="user1">
    <div className="UserContant">
    <h1>User Consent</h1>
    <p>By proceeding, you consent to: <br />
The collection and use of your personal and financial information as outlined in our [Privacy Policy]. <br />
Receiving communications (emails, WhatsApp messages, or calls) from our team regarding market updates, trading strategies, or research content. <br />
The use of cookies and tracking technologies for personalized insights and enhanced user experience.</p>
</div>
  
{/* form container  */}

<div className="form-container2">
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

        <div className="form-row2">
          <div className="form-group2">
            <label>Email id <span>*</span></label>
            <input type="email" placeholder="name@example.com" />
          </div>
          <div className="form-group2">
            <label>Phone no. <span>*</span></label>
            <input type="tel" placeholder="+91 **********" />
          </div>
        </div>

        <div className="form-group2 full">
          <label>City</label>
          <select>
            <option>Mumbai</option>
            <option>Thane</option>
            <option>New-Mumbai</option>
          </select>
        </div>

        <div className="form-group2 full">
          <label>How can we help?</label>
          <textarea placeholder="Your message..."></textarea>
        </div>

        <p className="policy-text2">
          By submitting this, I confirm that I have read and understood the <a href="#">Privacy Policy</a>.
        </p>

        <div className="submit-btn-wrapper2">
          <button type="submit" className="submit-btn2">Submit</button>
        </div>
      </form>
    </div>
      
   </div>
    </>
  )
}

export default  UserConsent