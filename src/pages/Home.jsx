import React from "react";
import Nav from "../components/Nav";
import water from "../assets/images/water.png";
import s1 from "../assets/images/s1.png";
import s2 from "../assets/images/s2.png";
import s3 from "../assets/images/s3.png";
import s4 from "../assets/images/s4.png";
import b1 from "../assets/images/r1.png";
import b2 from "../assets/images/r2.png";
import b3 from "../assets/images/r3.png";
import b4 from "../assets/images/ibox4.svg";
import "../index.css";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import mail from '../assets/images/mail-icon.svg'
const Home = () => {
  return (
    <div>
      <Nav />
      <div className="hs1">
        <div className="htext">
          <h1>
            Empowering Investors with <br />
            Insightful Equity Research
          </h1>

          <p>
            Trusted guidance, real-time strategies, and data-backed stock <br />{" "}
            market insights — built for smart traders and long-term investors.
          </p>

          <div className="btn">
            <span>Explore our :</span>
          <Link to="/services" ><button className="login">Services</button></Link>  
          <Link to="/pricing"> <button className="signup">Pricing</button></Link> 
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
          <span>
            Provides equity research reports, trading tips, investment
            strategies, and <br /> market analysis to empower investors. 14+
            Years of Experience. SEBI <br />
            Registered. 100% Transparency.
          </span>
        </div>

        <div className="s2con">
          <img className="img1" src={s1} alt="" />
          <img className="img2" src={s2} alt="" />
          <img className="img3" src={s3} alt="" />
          <img className="img4" src={s4} alt="" />
        </div>
      </div>

      <div className="hs3">
        <div className="s3text">
          <h1>
            Tailored Services. <br />
            For Every Investor.
          </h1>
          <br />
          <p>
            Explore our most impactful services designed to grow your
            investments with confidence.
          </p>
        </div>

        <div className="s3con">
          <div className="ibox">
            <div className="iboxm">
              <img src={b1} alt="" />
              <p>
                Deep-dive equity reports packed with actionable insights,
                valuations, and risk analysis—crafted to guide smarter
                investments.
              </p>
            </div>

            <div className="iboxm">
              <img src={b3} alt="" />
              <p>
                Positional Trading Strategies: <br /> Hold positions for days to
                months, targeting long-term trends with strategic analysis and
                disciplined risk management.
              </p>
            </div>
          </div>
          <div className="ibox">
            <div className="iboxm">
              <div className="ibm">
              <img className="b4" src={b4} alt="" />

              </div>
            </div>
            <div className="iboxm">
              <img src={b2} alt="" />
              <p>
                Intraday Trading Tips: <br /> Get fast, AI-driven trade signals
                with real-time alerts and high-probability setups—perfect for
                quick decisions in fast-moving markets.
              </p>
            </div>
          </div>
        </div>

        <div className="hs3text">
          <h1>And that’s just the beginning.</h1>
          <p>Tap into advanced strategies, expert insights, and full-spectrum market guidance.</p>
          <button>Explore Services</button>
        </div>
      </div>

{/* ^footer */}
<Footer img={mail} h1={"We’re here to help you invest smarter."}  p={"Whether you have a question, need  assistance, or want to explore our services in more detail — reach out and our team will get back to you shortly."}/>
</div>
  );
};

export default Home;
