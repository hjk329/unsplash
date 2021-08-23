import React from 'react';
import styled from 'styled-components'

import SearchContainer from '../containers/SearchContainer';

const Search = (props) => (
  <Container>
    <SearchContainer {...props} />
  </Container>
)

const Container = styled.div`

`;
export default Search;
