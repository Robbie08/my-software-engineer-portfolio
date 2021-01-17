import React, { useState, useEffect } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import './Navbar.css';


function Navbar() {
    // we need to set a state to keep track of nav bar
    const [click, setClick] = useState(false);
    // const [button, setButton] = useState(true);
    
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

    // scrollTo
    // const scrollToProjects = () => {
    //     if(click === true)
    //         setClick(!click);
    //     scroll.scrollTo(890);
    // }
    // create function that displays button 
    // const showButton = () => {
    //     if(window.innerWidth <= 960){
    //         setButton(false);
    //     }
    //     else {
    //         setButton(true);
    //     }
    // };

    // include this use of hook to prevent the button from 
    // appearing when application renders in mobile mode 
    // useEffect(() => {
    //     showButton();
    // }, [] );

    // window.addEventListener('resize', showButton);
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
                                to='/'
                                className='nav-links' 
                                onClick={scrollToTop}
                            >Home</Link>
                        </li>
                        <li className='nav-item'>
                            <Link 
                                to='/'
                                className='nav-links'
                                onClick={scrollToTop}
                            >My Projects</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/resume' className='nav-links' onClick={closeNavBar}>About Me</Link>
                        </li>
                    </ul>
                    { /*button && <Button buttonStyle='btn--outline'>Projects</Button>*/ }
                </div>
            </nav>
        </>
    );
}
export default Navbar;