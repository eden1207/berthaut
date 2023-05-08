import React from 'react'
import { useDispatch } from "react-redux";
import { openForm } from "../Store/Store.js";
import '../../styles/Contact/Contact.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Map from '../Map/Map'
import Form from '../Form/Form'
import ConfirmWindow from '../ConfirmWindow/ConfirmWindow'
import contact_bgd from '../../assets/Belvedere-Bouroullec-Bretagne.jpg'
import { GiSmartphone } from "react-icons/gi";
import { MdOutlineEmail } from "react-icons/md";


export default function Contact() {
    const dispatch = useDispatch();
    return(
        <div className='Contact Contact_dimensions'>
            <Header />
            <main className='main-home'>
                <div className='contact-page-container'>
                    <ul className='contact-data'>
                        <li className='contact-data-element'>
                            Me Léo-Paul Berthaut
                        </li>
                        <li className='contact-data-element'>
                            8 Rue du Bourg Nouveau <br/> 1er Etage <br />35000 Rennes
                        </li>
                        <li className='contact-data-element'>
                            <GiSmartphone /> 07 89 07 10 84
                        </li>
                        <li className='contact-data-element'>
                            <MdOutlineEmail /> lp.berthaut.avocat@gmail.com
                        </li>
                        <li>
                            <button 
                                className='contact-btn' 
                                type="button"
                                onClick={() => {
                                    dispatch(openForm())
                                }}
                            >
                                Me contacter
                            </button>
                        </li>
                    </ul>
                    <Map />
                </div>
                <img src={contact_bgd} className='contact-bgd' alt='fond page contact' />
            </main>
            <Footer />
            <Form />
            <ConfirmWindow />
        </div>
    )
}