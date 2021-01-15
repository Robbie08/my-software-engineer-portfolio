import React from 'react';
import {Link} from 'react-router-dom';
import './Footer.css';
function Footer(){
    return(
        <div className='footer-container'>
            <section className='footer-header'>
                <p className='footer-header-heading'></p>
                Connect with me on my social media accounts!
            </section>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <small className='website-rights'>Robert Ortiz © 2021</small>
                    <div className='social-icons'>
                        <Link className="social-icon-link linkedin"
                        to='/'
                        target='_blank'
                        aria-label='LinkedIn'
                        >
                        <a href="https://www.linkedin.com/in/roberto-ortiz-/" rel="noreferrer" target="_blank"><i className='fab fa-linkedin'></i></a>
                            
                        </Link>
                        <Link className="social-icon-link instagram"
                        to='/'
                        target='_blank'
                        aria-label='Instagram'
                        >
                        <a href="https://www.instagram.com/roberto.ortiz08/" rel="noreferrer" target="_blank"><i class="fab fa-instagram"></i></a>
                        </Link>
                        <Link className="social-icon-link Github"
                        to='/'
                        target='_blank'
                        aria-label='Github'
                        >
                        <a href="https://github.com/Robbie08" rel="noreferrer" target="_blank"><i class="fab fa-github-square"></i></a>
                        </Link>
                    </div>     
                </div>
            </section>
        </div>
    )
};


export default Footer;