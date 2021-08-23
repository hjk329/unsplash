import React, { useState } from 'react';
import styled from 'styled-components';

const FilterItem = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <Container>
      {children}
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  font-size: 14px;
  color: #767676;
  margin-left: 24px;
  cursor: pointer;
  transition:  0.2s;
`;

const Name = styled.div`
  display: flex;
  align-items: center;
  height: 32px;
  &:hover {
    color: #111;
  }
`;

const CaretDown = styled.div`
  width: 10px;
  height: 10px;
  border: 4px solid transparent;
  border-top-color: #d1d1d1;
  transform: translateY(2px);
  margin-left: 8px;

`;

export default FilterItem;
