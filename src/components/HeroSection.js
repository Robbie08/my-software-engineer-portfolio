import React from 'react';
import { Button } from './Button';
import '../App.css';
import './HeroSection.css';

function HeroSection (){
    return (
        <div className='hero-container'>
            <video src='/videos/hero-video2.mp4' autoPlay loop muted />
            <h1>Hi, need a Software Engineer?</h1>
            <p>I am a motived student that is always looking for a challenge</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline' buttonsSize='btn--large' >
                    My Projects
                </Button>
                <Button className='btns' buttonStyle='btn--primary' buttonsSize='btn--large' >
                    Contact Me
                </Button>
            </div>
        </div>

    )
}

export default HeroSection;