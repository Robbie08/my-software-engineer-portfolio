import React, { useState } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import './Navbar.css';


function Navbar() {
    // we need to set a state to keep track of nav bar
    const [click, setClick] = useState(false);
    
    // create a function to handle the hamburger button click
    const handleClick = () => setClick(!click);

    // create a function to handle the navigation bar
    const closeNavBar = () => setClick(false);

    // scrollToTop
    const scrollToTop = () => {
        if(click === true)
            setClick(!click);
        scroll.scrollToTop();
    }

    return(
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link 
                        to="/" 
                        className='navbar-logo' 
                        onClick={scrollToTop}>
                    Robert O.
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>

                    {/* This will be our nav bar items */}
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link 
                                activeClass='active'
                                to='home'
                                className='nav-links'
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={800} 
                                onClick={scrollToTop}
                            >Home</Link>
                        </li>
                        <li className='nav-item'>
                            <Link 
                                activeClass='active'
                                to='my_projects'
                                className='nav-links'
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={800}
                                onClick={closeNavBar}
                            >Experience</Link>
                        </li>
                        <li className='nav-item'>
                            <Link 
                                activeClass='active'
                                to='about' 
                                className='nav-links'
                                spy={true}
                                smooth={true}
                                offset={-115}
                                duration={700} 
                                onClick={closeNavBar}
                            
                            >About Me</Link>
                        </li>

                        <li className='nav-item'>
                            <a 
                                href='https://acrobat.adobe.com/id/urn:aaid:sc:US:ef84410a-7dc6-4ab6-841e-b531ab12cf77'
                                rel="noreferrer" 
                                target="_blank"
                                className='nav-links'
                                onClick={closeNavBar}
                            >View Resume</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}
export default Navbar;