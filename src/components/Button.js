import React from 'react'
import './Button.css'
import {Link} from 'react-router-dom'

const STYLES = ['btn--primary', 'btn--outline']

const SIZES = ['button--medium', 'btn--large']

export const Button = ({children, type, onClick, buttonStyle, buttonSize, to}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

    const link = to ? to : '/'

    return (
        <Link to={link} classname='btn-mobile'>
            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
                {children}
            </button>
        </Link>
    )
};
