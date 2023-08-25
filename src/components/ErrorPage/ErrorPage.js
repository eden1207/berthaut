import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux";
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import PersonnalDataForm from '../PersonnalDataForm/PersonnalDataForm'
import LegalForm from '../LegalForm/LegalForm'
import logo_berthaut from '../../assets/logo_berthaut.png'
import './styles/ErrorPage.css'
import { HiOutlineArrowUturnLeft } from "react-icons/hi2";

export default function ErrorPage() {
    const isPersonnalDataFormOpen = useSelector((state) => state.isPersonnalDataFormOpen);
    const isLegalFormOpen = useSelector((state) => state.isLegalFormOpen);
    useEffect(() => {
        if (isPersonnalDataFormOpen || isLegalFormOpen) {
          document.body.style.overflow = 'hidden';
          window.scrollTo(0, 0);
        } else{
            document.body.style.overflow = ''
        }
    }, [isPersonnalDataFormOpen, isLegalFormOpen])
    return(
        <div className='ErrorPage ErrorPage_dimensions'>
            <Header className='errorpage-header' />
            <img className='logo-cabinet-berthaut-errorpage' src={logo_berthaut} alt="Cabinet Berthaut" />
            <main className='main-errorpage'>
                <h1 className='error-number'>404</h1>
                <h2 className='ErrorMessage404'>Oups ! La page que vous demandez n'existe pas.</h2>
                <p>
                    <Link className='ErrorMessageLink' to='/'>
                        Retourner à la page d'accueil <HiOutlineArrowUturnLeft />
                    </Link>
                </p>
            </main>
            <Footer className='errorpage-footer' />
            <PersonnalDataForm />
            <LegalForm />
        </div>
    )
}