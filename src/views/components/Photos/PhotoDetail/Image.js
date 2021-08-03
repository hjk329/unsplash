import React from 'react';
import styled from 'styled-components';


const Image = ({imageUrl}) => {
    return (
        <Container>
            <ImageBox>
                <IconCtrl></IconCtrl>
                <img src={imageUrl} alt=""/>
            </ImageBox>
        </Container>
    )
}

const Container = styled.div`
  text-align: center;


`;

const ImageBox = styled.div`
  img {
    height: 70%;
  }
  
`;

const IconCtrl = styled.div`
    
`;

export default Image;