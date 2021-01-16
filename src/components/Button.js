import React from 'react';
import './Button.css'

import { Link, animateScroll as scroll } from "react-scroll";
const STYLES = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--medium', 'btn--large'];

// this handles what view should be displayed based on the props passed
export const Button = ({
    children, 
    type, 
    onClick, 
    buttonStyle, 
    buttonSize,
}) => {
    
    // designate what should the layout display
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        <Link to='/' className='btn-mobile' >
            <button 
                className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                onClick={onClick}
                type={type}
            >
                {children}
            </button>
        </Link>
    )

};