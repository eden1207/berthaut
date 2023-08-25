import React, {useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { openForm } from "../Store/Store.js";
import './styles/Contact.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import ContactMap from '../Map/Map'
import Form from '../Form/Form'
import ConfirmWindow from '../ConfirmWindow/ConfirmWindow'
import { GiSmartphone } from "react-icons/gi";
import { MdOutlineEmail } from "react-icons/md";
import PersonnalDataForm from '../PersonnalDataForm/PersonnalDataForm'
import LegalForm from '../LegalForm/LegalForm'


export default function Contact() {
    const dispatch = useDispatch();

    const isPersonnalDataFormOpen = useSelector((state) => state.isPersonnalDataFormOpen);
    const isLegalFormOpen = useSelector((state) => state.isLegalFormOpen);
    const isFormOpen = useSelector((state) => state.isFormOpen);
    const tabIndexPage = useSelector((state) => state.tabIndexPage);
    const ariaHiddenPage = useSelector((state) => state.ariaHiddenPage);
    useEffect(() => {
        if (isPersonnalDataFormOpen || isLegalFormOpen || isFormOpen) {
          document.body.style.overflow = 'hidden';
          window.scrollTo(0, 0);
        } else{
            document.body.style.overflow = ''
        }
    }, [isPersonnalDataFormOpen, isLegalFormOpen, isFormOpen])
    return(
        <div className='Contact Contact_dimensions'>
            <Header />
            <main aria-hidden={ariaHiddenPage}>
                <div className='contact-page-container'>
                    <ul className='contact-data contact-red-square-appearence'>
                        <li className='contact-data-element contact-text-appearence'>
                            Maître Léo-Paul Berthaut
                        </li>
                        <li className='contact-data-element contact-text-appearence'>
                            8 Rue du Bourg Nouveau <br/> 1er Etage <br />35000 Rennes
                        </li>
                        <li className='contact-data-element contact-text-appearence'>
                            <GiSmartphone /> 02.99.78.88.00 / 07.89.07.10.84
                        </li>
                        <li className='contact-data-element contact-text-appearence'>
                            <MdOutlineEmail /> lp.berthaut.avocat@gmail.com
                        </li>
                        <li className='contact-data-element-tab contact-text-appearence'>
                            <p>
                                Horaire d'ouverture du secrétariat (aucun accueil sans rendez-vous hors de ces
                                horaires) :
                            </p>
                            <table
                                role='grid' 
                                aria-describedby='open-hour_info'
                                cellSpacing="0" 
                                cellPadding="0"
                                className='table-border'
                            >
                                <thead className='tab-head'>
                                    <tr role='row'>
                                        <th
                                            scope="col"
                                        ></th>
                                        <th
                                            scope="col"
                                        >
                                            Matin
                                        </th>
                                        <th 
                                            scope="col"
                                        >
                                            Après-midi
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr role='row'>
                                        <td>Lundi</td>
                                        <td>10h00 - 12h00</td>
                                        <td>14h15 - 16h30</td>
                                    </tr>
                                    <tr role='row'>
                                        <td>Mardi</td>
                                        <td>10h00 - 12h00</td>
                                        <td>14h15 - 16h30</td>
                                    </tr>
                                    <tr role='row'>
                                        <td>Mercredi</td>
                                        <td>10h00 - 12h00</td>
                                        <td>FERMÉ</td>
                                    </tr>
                                    <tr role='row'>
                                        <td>Jeudi</td>
                                        <td>10h00 - 12h00</td>
                                        <td>14h15 - 16h30</td>
                                    </tr>
                                    <tr role='row'>
                                        <td>Vendredi</td>
                                        <td>10h00 - 12h00</td>
                                        <td>14h15 - 16h30</td>
                                    </tr>
                                    <tr role='row'>
                                        <td>Samedi</td>
                                        <td>FERMÉ</td>
                                        <td>FERMÉ</td>
                                    </tr>
                                    <tr role='row'>
                                        <td>Dimanche</td>
                                        <td>FERMÉ</td>
                                        <td>FERMÉ</td>
                                    </tr>
                                </tbody>
                            </table>
                        </li>
                        <li>
                            <button 
                                className='contact-btn contact-text-appearence'
                                tabIndex={tabIndexPage} 
                                type="button"
                                onClick={() => {
                                    dispatch(openForm())
                                }}
                            >
                                Me contacter
                            </button>
                        </li>
                    </ul>
                    <ContactMap className='contact-text-appearence' />
                </div>
                <div className='contact-bgd contact-gray-square-appearence'></div>
            </main>
            <Footer />
            <Form />
            <ConfirmWindow />
            <PersonnalDataForm />
            <LegalForm />
        </div>
    )
}