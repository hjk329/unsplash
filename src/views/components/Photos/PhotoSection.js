import React from 'react';
import styled from 'styled-components';


const PhotoSection = ({title, children}) => {
    return (
        <Container className={`PhotoSection ${title}`}>
            <Title>{title}</Title>
            {children}
        </Container>
    )
}

const Container = styled.div`
  padding: 0 15px;
  margin-top: 60px;
`;

const Title = styled.div`
  color: #111;
  font-size: 18px;
  font-weight: 400;
  text-transform: capitalize;
  margin-bottom: 25px;

`;
export default PhotoSection;