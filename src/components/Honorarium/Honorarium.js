import React from 'react'
import '../../styles/Honorarium/Honorarium.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import honorarium_page_bgd from '../../assets/pexels-andrew-neel-2312369.jpg'
import justice_symbole from '../../assets/ecMEMbeei.png'
import { Link } from 'react-router-dom'

export default function Honorarium() {
    return(
        <div className='Honorarium Honorarium_dimensions'>
            <Header />
            <main className='main-honorarium'>
                <div className='honorarium-container'>
                    <div className='honorarium-color-bgd'></div>
                    <img src={justice_symbole} className='justice-symbole' alt='justice' />
                    <ul className='honorarium-list'>
                        <li>Convention d'honoraire</li>
                        <li>Aide juridictionnelle</li>
                        <li>Protection juridique</li>
                        <li>                    
                            <Link 
                                className='honorarium-list-link' 
                                onClick={(e) => {
                                    e.preventDefault();
                                }}>
                                    Cerfa (avec lien vers la page officielle)
                            </Link>
                        </li>
                    </ul>
                </div>
                <img src={honorarium_page_bgd} className='honorarium-page-bgd' alt='fond page honoraires' />
            </main>
            <Footer />
        </div>
    )
}