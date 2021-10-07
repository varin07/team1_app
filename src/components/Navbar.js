import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import { Button } from './Button'
import './Navbar.css'

function Navbar() {
    const [click, _setClick] = useState(false)
    const [button, _setButton] = useState(true)

    const handleClick = () => _setClick(!click)
    const closeMobileMenu = () => _setClick(false)

    const showButton = () => {
        if (window.innerWidth <= 960) {
            _setButton(false)
        } else {
            _setButton(true)
        }
    }

    useEffect(() =>{
        showButton()
    }, [])


    window.addEventListener('resize', showButton)

    return (
        <>  
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick = {closeMobileMenu}>
                        GLSEN <i className="far fa-heart"></i>
                    </Link>
                    <div className="menu-icon" onClick={handleClick} >
                        <i className = {click ? 'fas fa-times': 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className = 'nav-item'>
                            <Link to='/about' className='nav-links' onClick ={closeMobileMenu}>
                                About
                            </Link>
                        </li>
                        <li className = 'nav-item'>
                            <Link to='/find-policies' className='nav-links' onClick ={closeMobileMenu}>
                                Find Policies
                            </Link>
                        </li>
                        <li className = 'nav-item'>
                            <Link to='/add-policy' className='nav-links' onClick ={closeMobileMenu}>
                                Add Policy
                            </Link>
                        </li>
                        <li className = 'nav-item'>
                            <Link to='/analyze-policies' className='nav-links-mobile' onClick ={closeMobileMenu}>
                               Analyze Policies
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline' to='analyze-policies' >Analyze Policies</Button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar
