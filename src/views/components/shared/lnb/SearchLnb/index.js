import React from 'react';
import styled from 'styled-components';

import Filter from './Filter';
import Nav from './Nav';

const SearchLnb = () => (
  <Container>
    <Nav />
    <Filter />
  </Container>
)

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  box-shadow: inset 0 -1px 0 #d1d1d1;

`;
export default SearchLnb;
