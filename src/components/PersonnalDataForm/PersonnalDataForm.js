import React from 'react'
import '../../styles/PersonnalDataForm/PersonnalDataForm.css'

import { useDispatch, useSelector } from "react-redux";
import { closePersonnalDataForm } from "../Store/Store.js";


export default function PersonnalDataForm() {
    const dispatch = useDispatch();
    const isPersonnalDataFormOpen = useSelector((state) => state.isPersonnalDataFormOpen);
    return isPersonnalDataFormOpen ? (
        <div className="PersonnalDataForm-bgd PersonnalDataForm-bgd_dimensions" role="dialog">
            <div className="PersonnalDataForm-content PersonnalDataForm-content_dimensions PersonnalDataForm-content_border PersonnalDataForm-content_animation" aria-label="formulaire">
                <div className='PersonnalDataForm-text'>
                    <div className='borderTop'></div>
                    <div className='borderBottom'></div>
                    <div className='borderLeft'></div>
                    <div className='borderRight'></div>
                    <section className='section-animation'>
                        <h3>I/ Vos droits relatifs à la protection de vos données:</h3>
                        <p>
                            Conformément à la loi n° 78-17 du 6 janvier 1978 relative à l'informatique, 
                            aux fichiers et aux libertés, modifiée par le Règlement européen 2016/679 du 
                            27 Avril 2016 relatif à la protection des données personnelles, vous disposez 
                            de plusieurs droits pour la gestion de vos données :
                        </p>
                        <ul>
                            <li>Droit d'accès à vos données;</li>
                            <li>Droit de rectification de vos données;</li>
                            <li>Droit à l'effacement de vos données;</li>
                            <li>Droit d'opposition et de retrait de votre consentement.</li>
                        </ul>
                    </section>
                    <section className='section-animation'>
                        <h3>II/ Introduire une réclamation auprès de la CNIL:</h3>
                        <p>
                            Vous pouvez introduire une réclamation si vous considérez que le traitement de
                            données à caractère personnel vous concernant constitue une violation à la 
                            réglementation en vigueur.
                        </p>
                        <p>
                            Pour plus d'informations : veuillez consulter le site suivant 
                            https://www.cnil.fr/fr/
                        </p>
                    </section>
                    <section className='section-animation'>
                        <h3>III/ Formulaire de contact:</h3>
                        <p>
                            Lorsque vous utilisez le formulaire de contact, il vous sera proposé de laisser 
                            votre nom, prénom, numéro de téléphone et adresse de messagerie afin de vous 
                            répondre personnellement. Dès lors que vous avez rempli volontairement ces champs 
                            de saisie et envoyé votre message, vous êtes réputé avoir donné votre accord pour 
                            que ces informations soient transmises à Maître Léo-Paul BERTHAUT.
                        </p>
                        <p>
                            Vos données ne seront jamais utilisées à des fins commerciales.
                        </p>
                        <p className='text-underline'>
                            Textes principaux :
                        </p>
                        <ul>
                            <li>
                                Règlement (UE) 2016/679 du Parlement européen et du Conseil du 27 avril
                                2016, relatif à la protection des personnes physiques à l'égard du traitement des
                                données à caractère personnel et à la libre circulation de ces données, et
                                abrogeant la directive 95/46/CE (règlement général sur la protection des
                                données);
                            </li>
                            <li>
                                Loi n° 78-17 du 6 janvier 1978 relative à l'informatique, aux fichiers et aux
                                libertés.
                            </li>
                        </ul>
                    </section>
                </div>
                <button 
                    className="PersonnalDataFormConfirmBtn PersonnalDataFormConfirmBtn_dimensions PersonnalDataFormConfirmBtn_border" 
                    type="button" onClick={(e) => {
                        e.preventDefault();
                        dispatch(closePersonnalDataForm())
                    }}
                >
                    Fermer
                </button>
            </div>
        </div>
    ) : (
        null
    )
}