import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import mail from '../assets/images/mail-icon.svg'
const Login = () => {
  return (
    <>
    <Nav/>
    <div className="login">
        <div className="lform">
          <h1>Login</h1>
          <div className="lf">
          <label htmlFor="">Email</label> <br />
          <input type="email" placeholder='Enter Your Email' />
          </div>

<div className="lf">
          <label htmlFor="">Password</label> <br />
          <input type="password" placeholder='Enter Your Password' />
          </div>

          <button>Submit</button>
        </div>
    </div>
    <Footer img={mail} h1={"We’re here to help you invest smarter."}  p={"Whether you have a question, need  assistance, or want to explore our services in more detail — reach out and our team will get back to you shortly."}/>    </>
  )
}

export default Login