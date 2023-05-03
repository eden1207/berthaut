import React, { useState } from 'react'
//import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import '../../styles/Contact/Contact.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import contact_bgd from '../../assets/Belvedere-Bouroullec-Bretagne.jpg'
import image_map from '../../assets/image_map.JPG'
import close_btn from '../../assets/close.svg'
import { GiSmartphone } from "react-icons/gi";
import { MdOutlineEmail } from "react-icons/md";
import { FaFileImport } from "react-icons/fa";

export default function Contact() {
    const [isFormOpen, setIsFormOpen] = useState(false);


    function FormInput({ labelFor, inputClass, type, id, name, placeholder, ariaRequired }) {
        const isError = false;
        return isError ? (
            <React.Fragment>
                <label htmlFor={labelFor}>{placeholder}</label><br />
                <input 
                    className={inputClass} 
                    type={type}
                    id={id} 
                    name={name} 
                    placeholder={placeholder}
                    aria-required={ariaRequired} 
                /><br />
                <p className='error-message'>Erreur d'input</p>
            </React.Fragment>
        ): (
            <React.Fragment>
                <label htmlFor={labelFor}>{placeholder}</label><br />
                <input 
                    className={inputClass} 
                    type={type}
                    id={id} 
                    name={name} 
                    placeholder={placeholder}
                    aria-required={ariaRequired} 
                /><br />
            </React.Fragment>
        )
    }

    function Form({ isFormOpen }) {
        return isFormOpen ? (
            <div className="form-bgd form-bgd_dimensions" role="dialog">
                <div className="form-content form-content_dimensions form-content_border form-content_animation" aria-label="formulaire">
                    <button 
                        className="form-close-btn" 
                        type="button" 
                        onClick={() => {
                            setIsFormOpen(false)
                        }}
                    >
                        <img src={close_btn} alt="bouton fermeture" />
                    </button>
                    <h3>Contactez-moi <br />Léo-Paul Berthaut</h3>
                    <div className="modal-body modal-body_dimensions modal-body_border">
                        <form id="JS-myForm" role="group" aria-labelledby="coordonnees">
                            <FormInput 
                                labelFor={"JS-first"}
                                inputClass={"text-control text-control_dimensions text-control_border"} 
                                type={"text"} 
                                id={"JS-first"} 
                                name={"first"} 
                                placeholder={'Prénom'} 
                                ariaRequired={true} 
                            />
                            <FormInput 
                                labelFor={"JS-last"}
                                inputClass={"text-control text-control_dimensions text-control_border"} 
                                type={"text"} 
                                id={"JS-last"} 
                                name={"last"} 
                                placeholder={'Nom'} 
                                ariaRequired={true} 
                            />
                            <FormInput 
                                labelFor={"JS-email"}
                                inputClass={"text-control text-control_dimensions text-control_border"} 
                                type={"email"} 
                                id={"JS-email"} 
                                name={"email"} 
                                placeholder={'Email'} 
                                ariaRequired={true} 
                            />
                            <FormInput 
                                labelFor={"JS-message"}
                                inputClass={"text-control-message text-control-message_dimensions text-control-message_border"} 
                                type={"text"} 
                                id={"JS-message"} 
                                name={"message"} 
                                placeholder={'Votre message ici'} 
                                ariaRequired={true} 
                            />
                            <p className='file-message'>
                                Veuillez transmettre vos documents pdf ici 
                                <button 
                                    className='file-btn' 
                                    type="button"
                                    onClick={(e) => {
                                        e.preventDefault()
                                    }}
                                >
                                    <FaFileImport />
                                </button>
                            </p>
                            <button 
                                id="JS-btn-submit" 
                                className="btn-submit btn-submit_dimensions btn-submit_border button" 
                                type="submit" onClick={(e) => {
                                    e.preventDefault()
                                }}
                            >
                                Envoyer
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        ) : (
            null
        )
    }





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
                            <GiSmartphone /> numéro tél
                        </li>
                        <li className='contact-data-element'>
                            <MdOutlineEmail /> email
                        </li>
                        <li>
                            <button 
                                className='contact-btn' 
                                type="button"
                                onClick={() => {
                                    setIsFormOpen(true)
                                }}
                            >
                                Me contacter
                            </button>
                        </li>
                    </ul>
                    <div className='map-container'>
                        <div className='map-bgd'></div>
                        <img src={image_map} className='map' alt='google map' />
                    </div>
                </div>
                <img src={contact_bgd} className='contact-bgd' alt='fond page contact' />
            </main>
            <Footer />
            <Form isFormOpen={isFormOpen}/>
        </div>
    )
}