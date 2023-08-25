import React from 'react'
import './styles/ConfirmWindow.css'
import close_btn from '../../assets/close.svg'

import { useDispatch, useSelector } from "react-redux";
import { closeConfirmWindow } from "../Store/Store.js";

export default function ConfirmWindow() {
    const dispatch = useDispatch();
    const isConfirmWindowOpen = useSelector((state) => state.isConfirmWindowOpen);
    return isConfirmWindowOpen ? (
        <div className="confirmWindow-bgd confirmWindow-bgd_dimensions" role="dialog">
            <div className="confirmWindow-content confirmWindow-content_dimensions confirmWindow-content_border confirmWindow-content_animation" aria-label="formulaire">
                <button 
                    className="confirmWindow-close-btn" 
                    type="button" 
                    onClick={() => {
                        dispatch(closeConfirmWindow())
                    }}
                >
                    <img src={close_btn} alt="bouton fermeture" />
                </button>
                <h3>Merci pour votre message !</h3>
                <button 
                    className="ConfirmBtn ConfirmBtn_dimensions ConfirmBtn_border" 
                    type="button" onClick={(e) => {
                        e.preventDefault();
                        dispatch(closeConfirmWindow())
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