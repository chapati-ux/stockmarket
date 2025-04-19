import React from 'react'
import Nav from '../components/Nav'
import water from '../assets/images/water.png'
import s1 from '../assets/images/s1.png'
import s2 from '../assets/images/s2.png'
import s3 from '../assets/images/s3.png'
import s4 from '../assets/images/s4.png'

import '../index.css'
const Home = () => {
  return (
    <div>
      <Nav/>
      <div className="hs1">
       <div className="htext">
        <h1>Empowering Investors with  <br />Insightful Equity Research</h1>

        <p>Trusted guidance, real-time  strategies, and data-backed stock <br /> market insights — built for smart traders and long-term investors.</p>

        <div className="btn">
           <span>Explore our :</span>
          <button className="login">Services</button>
          <button className="signup">Pricing</button>
        </div>
       </div>

       <div className="hb">
        <img src={water} alt="" />
       </div>
      </div>

      <div className="hs2">
        <div className="s2text">
          <p>why</p>
          <h1>Choose Research Analyst Services?</h1>
          <span>Provides equity research reports, trading tips, investment strategies, and <br /> market analysis to empower investors. 14+ Years of Experience. SEBI <br />Registered. 100% Transparency.</span>
        </div>

        <div className="s2con">
          <img className='img1' src={s1} alt="" />
          <img className='img2' src={s2} alt="" />
          <img className='img3' src={s3} alt="" />
          <img className='img4' src={s4} alt="" />
        </div>
      </div>
      </div>
  )
}

export default Home