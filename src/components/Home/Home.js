import React, {useEffect} from 'react'
import './styles/Home.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import PersonnalDataForm from '../PersonnalDataForm/PersonnalDataForm'
import LegalForm from '../LegalForm/LegalForm'
/*import home_page_bgd from '../../assets/jardin-du-parlement1.jpg'*/
import home_page_bgd from '../../assets/jardin-du-parlement4.webp'
import { RxDividerHorizontal } from "react-icons/rx";
import { useSelector } from 'react-redux'


export default function Home() {
    const isPersonnalDataFormOpen = useSelector((state) => state.isPersonnalDataFormOpen);
    const isLegalFormOpen = useSelector((state) => state.isLegalFormOpen);
    const ariaHiddenPage = useSelector((state) => state.ariaHiddenPage);
    useEffect(() => {
        if (isPersonnalDataFormOpen || isLegalFormOpen) {
          document.body.style.overflow = 'hidden';
          window.scrollTo(0, 0);
        } else{
            document.body.style.overflow = ''
        }
    }, [isPersonnalDataFormOpen, isLegalFormOpen])
    return(
        <div className='Home Home_dimensions'>
            <Header />
            <main className='main-home' aria-hidden={ariaHiddenPage}>
                <div className='home-page-bgd-border'>
                    <img src={home_page_bgd} className='home-page-bgd home-photo-appearence' alt='fond page accueil' />
                </div>
                <div className='welcome-text-bgd black-square-appearence'></div>
                <div className='main-content'>
                    <div className='welcome-title-container red-square-appearence'>
                        <h1 className='title-appearence'>Maître Léo-Paul Berthaut</h1>
                        <h2 className='title-appearence'>Avocat au barreau de RENNES</h2>
                    </div>
                    <div className='welcome-text-container gray-square-appearence'>
                        <p className='title-appearence'>Droit des étrangers</p>
                        <p className='title-appearence'><RxDividerHorizontal className='divider' /></p>
                        <p className='title-appearence'>Droit public</p>
                        <p className='title-appearence'><RxDividerHorizontal className='divider' /></p>
                        <p className='title-appearence'>Droit pénal</p>
                    </div>
                </div>
            </main>
            <Footer />
            <PersonnalDataForm />
            <LegalForm />
        </div>
    )
}