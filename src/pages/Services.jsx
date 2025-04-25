import React from "react";
import Nav from "../components/Nav";
import ss1 from "../assets/images/ss1.png";
import ss2 from "../assets/images/ss2.png";
import ss3 from "../assets/images/ss3.png";
import ss4 from "../assets/images/ss4.png";
import ss5 from "../assets/images/ss5.png";
import ss6 from "../assets/images/ss6.png";
import ss7 from "../assets/images/ss7.png";
import ss8 from "../assets/images/ss8.png";
import Footer from '../components/Footer';
const Services = () => {
  return (
    <>
      <Nav />
      <div className="service">
        <div className="stext">
          <h1> Explore Our Market Intelligence Suite</h1>
          <p>
            Empowering investors with cutting-edge insights, tactical
            strategies, and real-time trading support — all backed by 14+ years
            of market expertise.
          </p>
        </div>

        <div className="ssb">
          <div className="ss1">
            <img src={ss1} alt="" />
            <div className="s1b">
              <h1> Equity Research Reports</h1>
              <p>
                In-depth company analyses, market trends, and sector research to
                guide smart investments.
              </p>
            </div>
          </div>

          <div className="ss2">
            <div className="s2b">
              <h1> Intraday Trading Tips</h1>
              <p>
                As a pro stock trader and research analyst, I deliver real-time,
                high-impact trading tips to help you win the intraday game. From
                pre-market setups to mid-session insights, every call is backed
                by data, charts, and experience. <br />
                🔹 Live chart analysis
                <br />
                🔹 Quick-entry & exit signals <br />
                🔹 Real-time market reactions <br />
                🔹 Zero fluff, just precision
              </p>
            </div>

            <img src={ss2} alt="" />
          </div>


          <div className="ss1">
            <img src={ss3} alt="" />
            <div className="s1b">
              <h1>  Positional Trading Strategies</h1>
              <p>
              These medium-term strategies are designed to capture sustained market moves by leveraging momentum, technical patterns, and precise entry points. Each trade is carefully selected based on trend confirmation, risk-reward balance, and clear price structure.
              With a focus on patience and discipline, positional trading allows you to hold through meaningful moves without the noise of intraday fluctuations. It’s about trading less, but smarter — letting the trend work in your favor.
              </p>
            </div>
          </div>

          <div className="ss2">
            <div className="s2b">
              <h1> Stock Options Advisory</h1>
              <p>
              Navigate the options market with confidence. Our advisory delivers customized call and put strategies designed to boost returns while maintaining calculated risk exposure. With expiry-based insights, real-time analysis, and clear execution plans, you’ll make every contract count.
              </p>
            </div>

            <img src={ss4} alt="" />
          </div>


          <div className="ss1">
            <img src={ss5} alt="" />
            <div className="s1b">
              <h1> Portfolio Management Guidance</h1>
              <p>
              Receive expert-driven portfolio strategies tailored to your financial goals. From asset allocation to risk management, we help you structure a well-balanced, growth-oriented portfolio using data-backed insights and futuristic tools—all while keeping your investments secure and goal-aligned.
              </p>
            </div>
          </div>

          <div className="ss2">
            <div className="s2b">
              <h1>  Long-term Investment
              Reports</h1>
              <p>
              A futuristic take on patient investing—this visual shows a digital plant growing steadily from glowing bar and line graphs, with coins blooming as leaves. In the background, a soft-lit calendar reflects the value of time and consistency. A perfect symbol of how thoughtful strategies yield sustainable financial growth.
              </p>
            </div>

            <img src={ss6} alt="" />
          </div>


          <div className="ss1">
            <img src={ss7} alt="" />
            <div className="s1b">
              <h1>  Nifty & Bank Nifty Analysis</h1>
              <p>
              This service dives deep into the movements of two of India’s most prominent indices—Nifty and Bank Nifty. Using trend analysis, technical indicators, and market sentiment tools, it provides investors with clear direction and timely insights. Whether you're a day trader or a long-term investor, this guidance ensures you're always aligned with the pulse of the market.
              </p>
            </div>
          </div>

          <div className="ss2">
            <div className="s2b">
              <h1> Market Outlook & Updates</h1>
              <p>
              Stay ahead with a global perspective—this service offers daily market insights, real-time stock updates, and curated news alerts. With a focus on worldwide trends and local impact, it empowers you to make informed decisions across dynamic market conditions.
              </p>
            </div>

            <img src={ss8} alt="" />
          </div>
        </div>
      </div>

      <Footer/>
    </>
  );
};

export default Services;
