import React from 'react';
import ReactDOM from 'react-dom';

import PhotoPopup from "../components/PhotoPopup";
import {useSelector} from "react-redux";


const PhotoPopupContainer = () => {

    const isVisible = useSelector(state => state.popup.isVisible)
    if(!isVisible) return null;


    return (
        ReactDOM.createPortal(<PhotoPopup/>, document.getElementById('popup'))
    )
}

export default PhotoPopupContainer;