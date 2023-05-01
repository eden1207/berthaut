import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/Footer/Footer.css'

export default function Footer() {
    return(
        <footer className='Footer Footer_dimensions'>
            <div className='footer-menu-bgd'></div>
            <div className='footer-menu footer-menu_dimensions'>
                <Link className='menu-link-footer' onClick={(e) => {e.preventDefault()}}>
                    Numéro de siret
                </Link>
                <Link className='menu-link-footer' onClick={(e) => {e.preventDefault()}}>
                    Données personnelles
                </Link>
                <Link className='menu-link-footer' onClick={(e) => {e.preventDefault()}}>
                    ei Léo-Paul Berthaut
                </Link>
                <Link className='menu-link-footer' onClick={(e) => {e.preventDefault()}}>
                    Mentions légales
                </Link>
            </div>
        </footer>
    )
}