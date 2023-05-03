import React from 'react'
import '../../styles/Home/Home.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import home_page_bgd from '../../assets/jardin-du-parlement.jpg'

export default function Home() {
    return(
        <div className='Home Home_dimensions'>
            <Header />
            <main className='main-home'>
                <div className='main-content'>
                    <div className='welcome-title-container'>
                        <div className='welcome-title-bgd'></div>
                        <h1 className='welcome-title'>Bienvenue sur le site de <br />Léo-Paul Berthaut</h1>
                    </div>
                    <div className='welcome-text-container'>
                        <div className='welcome-text-bgd'></div>
                        <p className='welcome-text'>Ceci est un texte avec pour objectif de faire la présentation de Léo-Paul, de son cabinet, ses expertises, etc </p>
                    </div>
                </div>
                <img src={home_page_bgd} className='home-page-bgd' alt='fond page accueil' />
            </main>
            <Footer />
        </div>
    )
}