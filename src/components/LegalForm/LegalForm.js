import React from 'react'
import './styles/LegalForm.css'

import { useDispatch, useSelector } from "react-redux";
import { closeLegalForm } from "../Store/Store.js";


export default function LegalForm() {
    const dispatch = useDispatch();
    const isLegalFormOpen = useSelector((state) => state.isLegalFormOpen);
    return isLegalFormOpen ? (
        <div className="LegalForm-bgd LegalForm-bgd_dimensions" role="dialog">
            <div className="LegalForm-content LegalForm-content_dimensions LegalForm-content_border LegalForm-content_animation" aria-label="formulaire">
                <div className='LegalForm-text'>
                    <div className='borderTop'></div>
                    <div className='borderBottom'></div>
                    <div className='borderLeft'></div>
                    <div className='borderRight'></div>
                    <section className='section-animation'>
                        <h3>I/ Informations légales sur l'éditeur:</h3>
                        <p>
                            Ce site est édité par : Monsieur Léo-Paul BERTHAUT
                        </p>
                        <p>
                            Cabinet d'avocat : EI LÉO-PAUL BERTHAUT
                        </p>
                        <p>
                            Adresse : 8 Rue du Bourg Nouveau - 35000 RENNES, FRANCE
                        </p>
                        <p>
                            N° SIRET de l'établissement : 947 736 740 00012
                        </p>
                        <p>
                            Adresse électronique : lp.berthaut.avocat@gmail.com
                        </p>
                        <p>
                            Téléphone : 02.99.78.88.00 / 07.89.07.10.84
                        </p>
                        <p>
                            Tout le contenu du présent site, les graphismes, images, textes et logotypes ainsi que
                            leur mise en forme sont la propriété exclusive de l'éditeur, à l'exception des marques ou
                            contenus appartenant à d'autres sociétés partenaires ou auteurs.
                        </p>
                        <p>
                            Toute reproduction, distribution, modification, retransmission ou publication de ces
                            différents éléments est strictement interdite sans l'accord exprès écrit préalable de
                            l'éditeur.
                        </p>
                    </section>
                    <section className='section-animation'>
                        <h3>II/ Informations légales sur l'hébergeur:</h3>
                        <p>
                            A RENSEIGNER
                        </p>
                    </section>
                    <section className='section-animation'>
                        <h3>III/ Informations légales sur le concepteur:</h3>
                        <p>
                            Ce site a été conçu par: Alexis MAURAY
                        </p>
                        <p>
                            Coordonnées : A RENSEIGNER
                        </p>
                    </section>
                </div>
                <button 
                    className="LegalFormConfirmBtn LegalFormConfirmBtn_dimensions LegalFormConfirmBtn_border" 
                    type="button" onClick={(e) => {
                        e.preventDefault();
                        dispatch(closeLegalForm())
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