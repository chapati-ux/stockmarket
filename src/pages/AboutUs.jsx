import React from 'react'
import Nav from '../components/Nav'
import "./style2.css"
import abt from '../assets/images/abouti.png';
import b1 from '../assets/images/rocket-icon.png';
import b2 from '../assets/images/lock icon.png';
import b3 from '../assets/images/bulb-icon.png';
import rectangle from '../assets/images/Rectangle1.png';
import rectangle1 from '../assets/images/Rectangle2.png';
import web from '../assets/images/webimg.jpg';


const AboutUs = () => {
  return (
    <>
    <Nav/>
    <div className="about">
    <div className="main">
    <h2 className="heading1">Empowering Your Investment Decisions with <br/> Clarity, Confidence & Compliance</h2>
    <div className="content">
      <div className="column">
    <div className="text1">At Research Analyst Services, we provide data- <br/>driven market strategies and equity insights to <br />empower investors.</div>
    <div className="text2">We simplify investing by delivering clear, actionable research <br /> on market trends, economic signals, and company <br /> fundamentals — helping clients make confident decisions <br />and build goal-focused portfolios.</div>
    </div>
  <div className="image"> < img src={abt}alt=""></img> </div>
      </div>
      <button className="btn2" >Explore Services</button>
      </div>
      <div className="sec">
        <h2>Our Misson</h2>
        <p>To provide transparent, research-first investment insights that help  <br/>individuals and professionals grow wealth with clarity and confidence.</p>
      <div className="boxs">
      <div className="box1">
      <img src={b1} alt=""/>
      </div>
      <div className="box1">
      <img src={b2} alt=""/>
      </div>
      <div className="box1">
      <img src={b3} alt=""/>
        </div>
        </div>
        <div className="boxtext">
        <div className="boxt">
          <h3>Accessibility</h3>
          <p>We aim to make trading seamless and approachable for everyone—whether you're a beginner or a seasoned investor. Our platform is designed to simplify market access and foster confident decision-making.</p>
        </div>
        <div className="boxt">
          <h3>Trust</h3>
          <p>Your trust is our top priority. From data security to transparent operations, we are committed to building a reliable environment where users feel secure and empowered to trade.</p>
        </div>
        <div className="boxt">
          <h3>Innovation</h3>
          <p>In a fast-moving financial landscape, innovation is our edge. We constantly evolve to offer cutting-edge tools, intuitive interfaces, and powerful insights—putting the future of investing at your fingertips.</p>
        </div>
        
        </div>
        </div>
        <div className="vision">
          <h1>Backed by visionaries shaping the <br />future of finance and technology</h1>
          <div className="vboxcontainer">
        <div className="vbox">
        <img src={rectangle}alt="" />

        </div>
        <div className="vbox">
       <img  className =" webimage" src={web} alt="" />
        </div>
        <div className="vbox">
          <img src={rectangle1}alt="" /></div>
        </div>
        </div>
       
        </div>  
        </>  
  )
}

export default AboutUs     