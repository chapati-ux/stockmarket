import React from "react";
import "./components.css";
import { IoMdClose } from "react-icons/io";
const Pop = () => {
  return (
    <>
      <div className="pop">
        {setTimeout(() => {
          let pop = document.querySelector(".pop");

          pop.style.display = "block";
        }, 5000)}
        <h1 className="c">
          
          <IoMdClose
            className="close"
            onClick={() => {
              let pop = document.querySelector(".pop");
              pop.style.display = "none";
            }}
          />
        </h1>

        <div className="p1">
          <div className="pp1">
            <label htmlFor="">First Name:</label>
            <br />
            <input type="text" placeholder="Your First Name" required />
          </div>
          <div className="pp1">
            <label htmlFor="">Last Name:</label>
            <br />
            <input type="text" placeholder="Your Last Name" required />
          </div>
        </div>

        <div className="p1">
          <div className="pp1">
            <label htmlFor="">Gmail:</label>
            <br />
            <input type="email" placeholder="Your Gmail" required />
          </div>

          <div className="pp1">
            <label htmlFor="">Number:</label>
            <br />
            <input type="tel" placeholder="Your Contact number" required />
          </div>
        </div>
        <div className="p1">
          <div className="pp1">
            <label htmlFor="">State:</label>
            <br />
            <input type="text" placeholder="Your State" required />
          </div>

          <div className="pp1">
            <label for="">Your Budget:</label> <br />

            <select name="" id="" required>
              <option value="">Your Budget</option>
              <option value="">10,000 to 50,000</option>
              <option value="">51,000 to 1,00,000</option>
              <option value="">1,00,000 to 2,00,000</option>
              <option value="">5,00,000 Above</option>
            </select>
          </div>
        </div>

        <button className="pb">Submit</button>
      </div>
    </>
  );
};

export default Pop;
