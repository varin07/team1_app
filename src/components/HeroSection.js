import React from 'react'
import '../App.css';
import {Button} from './Button'
import './HeroSection.css';


function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="/videos/video-1.mp4" autoPlay loop muted/>
            <h1>GLSEN</h1>
            <p>Help make schools a better and safer place for LGBTQ+ Students</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large' to='/find-policies'>
                    Find Policies
                </Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large' to='/add-policy'>
                    Add Policy <i className='far fa-plus-square' />
                </Button>
            </div>
        </div>
    )
}

export default HeroSection
