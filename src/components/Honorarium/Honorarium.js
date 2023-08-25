import React, { useState, useEffect } from 'react'
import { useSelector } from "react-redux";
import './styles/Honorarium.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
//import honorarium_page_bgd from '../../assets/pexels-andrew-neel-2312369.jpg'
import justice_symbole from '../../assets/ecMEMbeei.png'
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import PersonnalDataForm from '../PersonnalDataForm/PersonnalDataForm'
import LegalForm from '../LegalForm/LegalForm'
//import { Link } from 'react-router-dom'


export default function Honorarium() {
    const [isConventionBtnActive, setIsConventionBtnActive] = useState(false);
    const [isHelpBtnActive, setIsHelpBtnActive] = useState(false);
    const [isProtectionBtnActive, setIsProtectionBtnActive] = useState(false);
    const [isConventionOpen, setIsConventionOpen] = useState(false);
    const [isHelpOpen, setIsHelpOpen] = useState(false);
    const [isProtectionOpen, setIsProtectionOpen] = useState(false);

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

    let classHonorariumConventionAnimation = '';
    let classHelpAnimation = '';
    let classProtectionAnimation = '';
    if(isConventionBtnActive) {
        classHonorariumConventionAnimation = isConventionOpen ? 'honorarium-information-open' : 'honorarium-information-close';
    } else{
        classHonorariumConventionAnimation = 'inactive-Btn';
    }
    if(isHelpBtnActive) {
        classHelpAnimation = isHelpOpen ? 'honorarium-information-open' : 'honorarium-information-close';
    } else{
        classHelpAnimation = 'inactive-Btn';
    }
    if(isProtectionBtnActive) {
        classProtectionAnimation = isProtectionOpen ? 'honorarium-information-open' : 'honorarium-information-close';
    } else{
        classProtectionAnimation = 'inactive-Btn';
    }
    return(
        <div className='Honorarium Honorarium_dimensions'>
            <Header />
            <main className='main-honorarium'>
                <h2 className='honorarium-page-title honorarium-title-appearence'>
                    La rémunération de votre avocat peut se faire par trois moyens, <br/>qui doivent tous être
                    envisagés dépendamment de votre situation.
                </h2>
                <div className='honorarium-container honorarium-red-square-appearence'>
                    <img src={justice_symbole} className='justice-symbole' alt='justice' />
                    <div className='honorarium-page-btn-list honorarium-gray-square-appearence'>
                        <div className={'honorarium-item ' + classHonorariumConventionAnimation} >
                            <button 
                                type='button'
                                className='honorarium-item-btn'
                                onClick={() => {
                                    setIsConventionBtnActive(true);
                                    setIsConventionOpen(!isConventionOpen);
                                }}
                            >
                                <h3 className='honorarium-title-cards-appearence'>La Convention d'honoraires signée entre vous et votre avocat</h3>
                                {
                                    isConventionOpen ? (
                                        <SlArrowUp className={isConventionBtnActive ? 'arrowOpenWindow' : ''} />
                                    ) : (
                                        <SlArrowDown className={isConventionBtnActive ? 'arrowCloseWindow' : 'honorarium-title-cards-appearence'} />
                                    )
                                }
                            </button>
                            {
                                isConventionOpen ? (
                                    <article className='honorarium-item-article'>
                                        <p>
                                            Il s'agit d'un contrat entre les deux parties qui fixe le montant de la rémunération de
                                            l'avocat selon les critères suivants:
                                        </p>
                                        <ul>
                                            <li>le temps consacré à l'affaire,</li>
                                            <li>le travail de recherche,</li>
                                            <li>la nature et la difficulté de l'affaire,</li>
                                            <li>l'importance des intérêts en cause,</li>
                                            <li>l'incidence des frais et charges du cabinet auquel il appartient,</li>
                                            <li>sa notoriété, ses titres, son ancienneté, son expérience et la spécialisation dont il est titulaire,</li>
                                            <li>les avantages et le résultat obtenus au profit du client par son travail, ainsi que le service rendu à celui-ci,</li>
                                            <li>la situation de fortune du client. (Article 11.2 du Règlement Intérieur National de la profession d'avocat (RIN))</li>
                                        </ul>
                                        <p>
                                            Le contenu de cette convention est discuté lors du premier entretien 
                                            et fixe également les obligations des parties ainsi que la ou les 
                                            missions confiées à l'avocat.
                                        </p>
                                        <p>
                                            Ce contrat constitue tout autant un engagement qu'une protection pour 
                                            l'avocat comme pour le client.
                                        </p>
                                        <p>
                                            En cas de non-respect de cet accord, l'avocat et le client disposent 
                                            chacun de voies de recours pour en obtenir la stricte application.
                                        </p>
                                    </article>
                                ) : (
                                    null
                                )
                            }
                        </div>
                        <div
                            className={'honorarium-item ' + classHelpAnimation}
                        >
                            <button 
                                type='button'
                                className='honorarium-item-btn'
                                onClick={() => {
                                    setIsHelpBtnActive(true);
                                    setIsHelpOpen(!isHelpOpen);
                                }}
                            >
                                <h3 className='honorarium-title-cards-appearence'>L'aide juridictionnelle</h3>
                                {
                                    isHelpOpen ? (
                                        <SlArrowUp className={isHelpBtnActive ? 'arrowOpenWindow' : ''} />
                                    ) : (
                                        <SlArrowDown className={isHelpBtnActive ? 'arrowCloseWindow' : 'honorarium-title-cards-appearence'} />
                                    )
                                }
                            </button>
                            {
                                isHelpOpen ? (
                                    <article className='honorarium-item-article'>
                                        <p>
                                            L'aide juridictionnelle se traduit par une prise en charge par l'Etat 
                                            des frais de justice, qui comprend notamment la rémunération de l'avocat 
                                            intervenant, au profit des personnes ne disposant pas des ressources 
                                            suffisantes pour accéder seule au juge.
                                        </p>
                                        <p>
                                            Cette prise en charge peut être totale ou partielle selon vos ressources 
                                            (revenus mensuels, patrimoine mobilier et immobilier).
                                        </p>
                                        <p>
                                            Une simulation est disponible sur <a target='_blank' rel="noreferrer" href="https://www.service-public.fr/"className='public-service-link'> ce lien</a>.
                                        </p>
                                        <p>
                                            Outre la modestie des ressources du demandeur, il ne faut pas que celui-ci 
                                            dispose d'une assurance protection juridique susceptible d'assumer les frais 
                                            de justice, ni que son action en justice soit manifestement irrecevable ou 
                                            dénuée de fondement.
                                        </p>
                                        <p>
                                            Le cabinet accepte d'intervenir au titre de l'aide juridictionnelle.
                                        </p>
                                    </article>
                                ) : (
                                    null
                                )
                            }
                        </div>
                        <div
                            className={'honorarium-item ' + classProtectionAnimation}
                        >
                            <button 
                                type='button'
                                className='honorarium-item-btn'
                                onClick={() => {
                                    setIsProtectionBtnActive(true);
                                    setIsProtectionOpen(!isProtectionOpen);
                                }}
                            >
                                <h3 className='honorarium-title-cards-appearence'>Assurance Protection Juridique</h3>
                                {
                                    isProtectionOpen ? (
                                        <SlArrowUp className={isProtectionBtnActive ? 'arrowOpenWindow' : ''} />
                                    ) : (
                                        <SlArrowDown className={isProtectionBtnActive ? 'arrowCloseWindow' : 'honorarium-title-cards-appearence'} />
                                    )
                                }
                            </button>
                            {
                                isProtectionOpen ? (
                                    <article className='honorarium-item-article'>
                                        <p>
                                            Dans de nombreux cas, un assuré ne sait pas que son contrat d'assurance prévoit 
                                            une prise en charge des honoraires de l'avocat et autres frais de justice.
                                        </p>
                                        <p>
                                            ATTENTION : si vous bénéficiez d'une APJ, vous n'êtes pas éligible au mécanisme 
                                            de l'aide juridictionnelle.
                                        </p>
                                        <p>
                                            N'hésitez pas à contacter votre assureur et à consulter votre contrat pour vous 
                                            informer !
                                        </p>
                                    </article>
                                ) : (
                                    null
                                )
                            }
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
            <PersonnalDataForm />
            <LegalForm />
        </div>
    )
}

/**
 *                     <ul className='honorarium-list'>
                        <li>Convention d'honoraire</li>
                        <li>Aide juridictionnelle</li>
                        <li>Protection juridique</li>
                    </ul>
 */