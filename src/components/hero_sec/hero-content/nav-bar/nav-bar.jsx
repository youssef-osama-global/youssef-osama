import { useEffect } from "react";
import './nav-bar.css';

function NavBar() {
  
  
  return(
    <>
      <header>
        <div className="logo-wrapper"> {/*to get the links next to the logo*/}
          <div className="logo"><a href="#hero-sec" style={{textDecoration: "none", color: "hsl(267, 8%, 85%)"}}>Youssef Osama</a></div>
          <nav>
            <ul>
              <li><a href="#">about</a></li>
              <li><a href="#">skills</a></li>
              <li><a href="#">contact</a></li>
            </ul>
          </nav>
        </div>
        <div className="header-social-icons">
          <ul>
            <li><a href="">t</a></li>
            <li><a href="">r</a></li>
            <li><a href="">k</a></li>
          </ul>
        </div> {/*TODO: install : npm i @fortawesome/fontawesome-svg-core @fortawesome/react-fontawesome @fortawesome/free-brands-svg-icons
 , to import the icons for social media*/}
        <div className="side-nav"></div>

      </header>
    </>
  )
};

export default NavBar;