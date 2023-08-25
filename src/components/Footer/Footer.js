import React from 'react'
import { Link } from 'react-router-dom'
import './styles/Footer.css'
import { useDispatch, useSelector } from "react-redux";
import { openPersonnalDataForm, openLegalForm } from "../Store/Store.js";

export default function Footer() {
    const dispatch = useDispatch();
    const tabIndexPage = useSelector((state) => state.tabIndexPage);
    const ariaHiddenPage = useSelector((state) => state.ariaHiddenPage);
    return(
        <footer 
            className='Footer Footer_dimensions footer-appearence'
            aria-hidden={ariaHiddenPage}
        >
            <div className='footer-menu footer-menu_dimensions footer-link-appearence'>
                <Link 
                    className='menu-link-footer' 
                    tabIndex={tabIndexPage}
                    onClick={() => {
                        dispatch(openPersonnalDataForm());
                    }}
                >
                    Données personnelles
                </Link>
                <Link 
                    className='menu-link-footer' 
                    tabIndex={tabIndexPage}
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