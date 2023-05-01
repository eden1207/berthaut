import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/Header/Header.css'
import logo_berthaut from '../../assets/logo_berthaut.png'

export default function Header() {
    return(
        <header className='Header Header_dimensions'>
            <div className='header-bgd'></div>
            <div className='header-content'>
                <img src={logo_berthaut} className='logo-leo-paul' alt='cabinet Berthaut' />
                <nav className='navigation navigation_dimensions' aria-label="main" role="navigation">
                    <Link className='menu-link' to="/">
                        Accueil
                    </Link>
                    <Link className='menu-link' to="/introduction">
                        Cabinet
                    </Link>
                    <Link className='menu-link' to="/honorarium">
                        Honoraires
                    </Link>
                    <Link className='menu-link' to="/contact">
                        Contact
                    </Link>
                </nav>
            </div>
        </header>
    )
}