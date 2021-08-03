import React from 'react';
import styled from 'styled-components';

const ActionButtons = ({children}) => {
    return (
        <Container>
            {children}
        </Container>
    )
}

const Container = styled.div`
  display: flex;

  > * {
    &:first-child {
      margin-left: 0;
    }

    margin-left: 8px;
  }
`;
export default ActionButtons;