import { useState, useEffect } from "react";
import './hero-content.css'
import Satisfying_btn from "../satisfying-btn/Satisfying_btn";

function HeroContent() {
  return (
    <>
      <div className='welcome-sentence'>
        bla bla bla bla bla bla bla
      </div>
      <div className="hero-btns">
        <div className="view-projects-wrap">
          <button className="view-projects">
            Software dev :) <span></span>
          </button>
        </div>
        <Satisfying_btn />
        
      </div>
    </>
  );
};

export default HeroContent;