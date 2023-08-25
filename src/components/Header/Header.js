import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './styles/Header.css'
import logo_berthaut from '../../assets/logo_berthaut.webp'
import { useSelector } from 'react-redux';

export default function Header() {
    useEffect(() => {
        const endURL = window.location.href.split('/');
        switch (endURL[endURL.length-1]) {
            case "":
                setActivePage("home");
                break;
            case "introduction":
                setActivePage("introduction");
                break;
            case "honorarium":
                setActivePage("honorarium");
                break;
            case "contact":
                setActivePage("contact");
                break;
            default:
        }
    }, []);
    const [activePage, setActivePage] = useState(null);
    const tabIndexPage = useSelector((state) => state.tabIndexPage);
    const ariaHiddenPage = useSelector((state) => state.ariaHiddenPage);
    return(
        <header 
            className='Header Header_dimensions header-appearence'
            aria-hidden={ariaHiddenPage}
        >
            <div className='header-bgd'></div>
            <div className='header-content'>
                <img src={logo_berthaut} className='logo-leo-paul header-logo-appearence' alt='cabinet Berthaut' />
                <nav className='navigation navigation_dimensions' aria-label="main" role="navigation">
                    <Link 
                        className={activePage === "home" ? 'menu-link active-menu-link header-link-appearence' : 'menu-link header-link-appearence'}
                        tabIndex={tabIndexPage}
                        to="/"
                    >
                        Accueil
                        <div className={activePage === "home" ? 'active-link-underline' : 'link-underline'}></div>
                    </Link>
                    <Link 
                        className={activePage === "introduction" ? 'menu-link active-menu-link header-link-appearence' : 'menu-link header-link-appearence'} 
                        tabIndex={tabIndexPage}
                        to="/introduction"
                    >
                        Cabinet
                        <div className={activePage === "introduction" ? 'active-link-underline' : 'link-underline'}></div>
                    </Link>
                    <Link 
                        className={activePage === "honorarium" ? 'menu-link active-menu-link header-link-appearence' : 'menu-link header-link-appearence'}
                        tabIndex={tabIndexPage}  
                        to="/honorarium"
                    >
                        Honoraires
                        <div className={activePage === "honorarium" ? 'active-link-underline' : 'link-underline'}></div>
                    </Link>
                    <Link 
                        className={activePage === "contact" ? 'menu-link active-menu-link header-link-appearence' : 'menu-link header-link-appearence'}
                        tabIndex={tabIndexPage} 
                        to="/contact"
                    >
                        Contact
                        <div className={activePage === "contact" ? 'active-link-underline' : 'link-underline'}></div>
                    </Link>
                </nav>
            </div>
        </header>
    )
}