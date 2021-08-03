import React from 'react';
import styled from 'styled-components';


const IconButton = ({icon, text}) => {
    return (
        <Container>
            {icon}
            {
                text &&
                    <Text>{text}</Text>
            }
        </Container>
    )
}

const Container = styled.button`
  display: flex;
  align-items: center;
`;

const Text = styled.span`
    
`;
export default IconButton;