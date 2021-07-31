import React from 'react';
import styled from 'styled-components';
import {useSelector} from "react-redux";


const PhotoByIdContainer = () => {

    const photoById = useSelector(state => state.photos.photoById)

    return (
        <Container>
            <img src={photoById.urls?.regular} alt=""/>
        </Container>
    )
}

const Container = styled.div`

`;
export default PhotoByIdContainer;