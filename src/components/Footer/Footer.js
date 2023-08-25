import React from 'react'
import { Link } from 'react-router-dom'
import './styles/Footer.css'
import { useDispatch } from "react-redux";
import { openPersonnalDataForm, openLegalForm } from "../Store/Store.js";

export default function Footer() {
    const dispatch = useDispatch();
    return(
        <footer className='Footer Footer_dimensions footer-appearence'>
            <div className='footer-menu footer-menu_dimensions footer-link-appearence'>
                <Link 
                    className='menu-link-footer' 
                    onClick={() => {
                        dispatch(openPersonnalDataForm());
                    }}
                >
                    Données personnelles
                </Link>
                <Link 
                    className='menu-link-footer' 
                    onClick={() => {
                        dispatch(openLegalForm());
                    }}
                >
                    Mentions légales
                </Link>
            </div>
        </footer>
    )
}

/**
 * <div className='footer-menu-bgd'></div>
 */