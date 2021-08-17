import React from 'react';
import ReactDOM from 'react-dom';

import PhotoPopup from "../components/PhotoPopup";
import {useDispatch, useSelector} from "react-redux";
import {Action} from "../../redux/popup/redux";
import {useLocation} from "react-router-dom";


const PhotoPopupContainer = () => {

    const location = useLocation();

    const dispatch = useDispatch()
    const onClose = () => {
        window.history.pushState({}, null, location.pathname)
        dispatch(Action.Creators.closePopup())
    }

    const isVisible = useSelector(state => state.popup.isVisible)
    if(!isVisible) return null;

    return (
        ReactDOM.createPortal(<PhotoPopup onClose={onClose}/>, document.getElementById('popup'))
    )
}

export default PhotoPopupContainer;