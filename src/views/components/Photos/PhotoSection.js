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

`;

const Title = styled.div`
    
`;
export default PhotoSection;