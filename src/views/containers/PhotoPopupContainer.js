import React from 'react';
import ReactDOM from 'react-dom';

import PhotoPopup from "../components/PhotoPopup";
import {useDispatch, useSelector} from "react-redux";
import {Action} from "../../redux/popup/redux";


const PhotoPopupContainer = () => {

    const dispatch = useDispatch()
    const onClose = () => {
        dispatch(Action.Creators.closePopup())
    }

    const isVisible = useSelector(state => state.popup.isVisible)
    if(!isVisible) return null;

    return (
        ReactDOM.createPortal(<PhotoPopup onClose={onClose}/>, document.getElementById('popup'))
    )
}

export default PhotoPopupContainer;