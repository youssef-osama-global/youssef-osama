import { useState, useEffect } from "react";
import './nav-bar.css';

function NavBar() {

  


  return(
    <>
      <header>
        <div className="logo-wrapper">
          <div className="logo">Youssef Osama</div>
          <nav>
            <ul>
              <li><a href="">home</a></li>
              <li><a href="">about</a></li>
              <li><a href="">skills</a></li>
              <li><a href="">contact</a></li>
            </ul>
            <div className="selector"></div>
          </nav>
        </div>
        <div className="side-nav"></div>

      </header>
    </>
  )
};

export default NavBar;