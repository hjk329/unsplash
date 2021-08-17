import React from 'react';
import styled from 'styled-components';


const DropBox = ({menu = [], onClose}) => {

    return (
        <Container>
            {
                menu.map((item) => item)
            }
        </Container>
    )
}

const Container = styled.div`
  position: absolute;
  right: 0;
  top: 100%;
  z-index: 100;
  padding: 8px 0;
  box-shadow: 0 8px 16px rgba(0, 0, 0, .16);
  border: 1px solid #d1d1d1;
  min-width: 180px;
  background: #fff;
  border-radius: 3px;
  margin-top: 4px;

`;
export default DropBox;