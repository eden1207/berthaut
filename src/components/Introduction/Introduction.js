import React from 'react'
import '../../styles/Introduction/Introduction.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

export default function Introduction() {
    return(
        <div className='Introduction Introduction_dimensions'>
            <Header />
            <main className='main-introduction'>
                <div className='leo-paul-photo'></div>
                <div className='introduction-container'>
                    <div className='presentation-color-bgd'></div>
                    <p className='presentation-text'>
                        Texte de présentation
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    )
}