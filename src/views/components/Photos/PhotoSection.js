import React from 'react';
import styled from 'styled-components';


const PhotoSection = ({title, children}) => {
    return (
        <Container>
            <Title>{title}</Title>
            {children}
        </Container>
    )
}

const Container = styled.div`
  padding: 20px;
`;

const Title = styled.div`
  color: #111;
  font-size: 18px;
  font-weight: 400;

`;
export default PhotoSection;