import React, { useState } from 'react'
import '../../styles/Form/Form.css'
import close_btn from '../../assets/close.svg'
import { FaFileImport } from "react-icons/fa";

import { useDispatch, useSelector } from "react-redux";
import { closeForm, openConfirmWindow } from "../Store/Store.js";


function ErrorMessage({ value, isActive }) {
    return isActive ? (
        <React.Fragment>
            <p className='error-message'>{value}</p>
        </React.Fragment>
    ): (
        null
    )
}

export default function Form() {
    const dispatch = useDispatch();
    const isFormOpen = useSelector((state) => state.isFormOpen);
    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [isError, setIsError] = useState(false);
    const [isError2, setIsError2] = useState(false);
    const [isError3, setIsError3] = useState(false);
    return isFormOpen ? (
        <div className="form-bgd form-bgd_dimensions" role="dialog">
            <div className="form-content form-content_dimensions form-content_border form-content_animation" aria-label="formulaire">
                <button 
                    className="form-close-btn" 
                    type="button" 
                    onClick={() => {
                        dispatch(closeForm())
                    }}
                >
                    <img src={close_btn} alt="bouton fermeture" />
                </button>
                <h3>Contactez-moi <br />Léo-Paul Berthaut</h3>
                <div className="modal-body modal-body_dimensions modal-body_border">
                    <form id="JS-myForm" role="group" aria-labelledby="coordonnees">
                        <label htmlFor="JS-last">Nom</label><br />
                        <input 
                            className="text-control text-control_dimensions text-control_border" 
                            type="text"
                            id="JS-last"
                            name="last" 
                            placeholder='Nom'
                            aria-required={true} 
                            onChange={(e) => {setLastName(e.target.value)}}
                        /><br />
                        <ErrorMessage 
                            value={"Veuillez entrer 2 caractères ou plus pour le champ du nom."}
                            isActive={isError} 
                        />
                        <label htmlFor="JS-first">Prénom</label><br />
                        <input 
                            className="text-control text-control_dimensions text-control_border" 
                            type="text"
                            id="JS-first" 
                            name="first" 
                            placeholder='Prénom'
                            aria-required={true} 
                            onChange={(e) => {setFirstName(e.target.value)}}
                        /><br />
                        <ErrorMessage 
                            value={"Veuillez entrer 2 caractères ou plus pour le champ du prénom."} 
                            isActive={isError2}
                        />
                        <label htmlFor="JS-email">Email</label><br />
                        <input 
                            className="text-control text-control_dimensions text-control_border"
                            type="email"
                            id="JS-email" 
                            name="email" 
                            placeholder='Email'
                            aria-required={true} 
                            onChange={(e) => {setEmail(e.target.value)}}
                        /><br />
                        <ErrorMessage 
                            value={"Vous devez saisir une adresse valide."} 
                            isActive={isError3}
                        />
                        <label htmlFor="JS-message">Votre message ici</label><br />
                        <textarea 
                            className="text-control-message text-control-message_dimensions text-control-message_border"
                            type="text"
                            id="JS-message"
                            name="message" 
                            placeholder='Votre message ici'
                            aria-required={true} 
                        ></textarea><br />
                        <p className='file-message'>
                            Merci de transmettre vos documents pdf ici 
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
                                e.preventDefault();
                                const ckeckingMail = /^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]+$/;

                                let error = false;
                                if(lastName.length<2) {
                                    setIsError(true)
                                    error = true;
                                } else{
                                    setIsError(false)
                                }

                                if(firstName.length < 2) {
                                    setIsError2(true)
                                    error = true;
                                } else{
                                    setIsError2(false)
                                }

                                if(ckeckingMail.test(email) === false) {
                                    setIsError3(true)
                                    error = true;
                                } else{
                                    setIsError3(false)
                                }

                                if(error === false) {
                                    dispatch(closeForm())
                                    dispatch(openConfirmWindow())
                                }
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



/**
 * // Le ^ marque le début et $ la fin de l'expression. 
// Le [a-zA-Z0-9.-_] indique qu'il faut mettre un élément de type lettre d'alphabet, chiffre, ., - ou _ et le "+" indique qu'on peut en mettre plusieurs
// Le [@]{1} indique qu'il doit y avoir un @
// Le [a-zA-Z0-9.-_]+ pour suivre l'ensemble avec les caractères indiqués
// Le [.]{1} pour dire qu'il doit ensuite y avoir un point
// Enfin le [a-z]{2,3} pour que l'ensemble se termine par 2 à 3 lettres (ex: fr, net, com)
 * const ckeckingMail = /^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,3}$/;
 * 
 */