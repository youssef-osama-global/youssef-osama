import { useEffect } from "react";
import './nav-bar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub , faLinkedin, faWhatsapp} from '@fortawesome/free-brands-svg-icons';

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
            <li><a href=""><FontAwesomeIcon icon={faWhatsapp} /></a></li>
            <li><a href=""><FontAwesomeIcon icon={faLinkedin} /></a></li>
            <li><a href=""><FontAwesomeIcon icon={faGithub} /></a></li>
          </ul>
        </div>
        <div className="side-nav-btn"></div>
      </header>
      <div className="side-nav">

      </div>
    </>
  )
};

export default NavBar;