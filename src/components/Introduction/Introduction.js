import React, {useEffect} from 'react'
import { useSelector } from "react-redux";
import '../../styles/Introduction/Introduction.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import PersonnalDataForm from '../PersonnalDataForm/PersonnalDataForm'
import LegalForm from '../LegalForm/LegalForm'

export default function Introduction() {
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
        <div className='Introduction Introduction_dimensions'>
            <Header />
            <main className='main-introduction'>
                <div className='black-area intro-black-square-appearence'></div>
                <div className='introduction-container intro-red-square-appearence'>
                    <p className='intro-title-appearence'>
                        Inscrit au Barreau de RENNES depuis le 2 janvier 2023, Maître Léo-Paul BERTHAUT a
                        choisi de s'investir essentiellement dans une branche du droit tout aussi juridique que
                        profondément humaine : le droit des étrangers.
                    </p>
                    <p className='intro-title-appearence'>
                        Après un premier stage en 2022 auprès de Maître Florian DOUARD, il a rejoint le cabinet
                        de Maître Gaëlle LE STRAT à partir du 2 janvier 2023 en qualité d'avocat collaborateur à
                        temps partiel.
                    </p>
                    <p className='intro-title-appearence'>
                        Exerçant en parallèle ses activités d'avocat collaborateur et d'avocat indépendant, ses
                        domaines d'activités sont principalement le droit des étrangers (Visa, séjour,
                        éloignement, asile, nationalité), le droit public (droit administratif général, fonction
                        publique) et le droit pénal (Garde à vue, CRPC, etc.).
                    </p>
                </div>
            </main>
            <Footer />
            <PersonnalDataForm />
            <LegalForm />
        </div>
    )
}