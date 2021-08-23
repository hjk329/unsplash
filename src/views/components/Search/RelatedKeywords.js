import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import ScrollMenu from '../shared/ScrollMenu';

const RelatedKeywords = ({ data }) => (
  <Container>
    <ScrollMenu data={data}>
      {(item) => (
        <KeywordItem key={item.title} to={`/search/photos/${item.title}`}>
          {item.title}
        </KeywordItem>
      )}
    </ScrollMenu>
  </Container>
)

const Container = styled.div`
  margin-bottom: 72px;
  
`;

const KeywordItem = styled(Link)`
  width: 143px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  font-size: 14px;
  color: #767676;
  border: 1px solid #d1d1d1;
  border-radius: 3px;
  flex-shrink: 0;
  cursor: pointer;
  transition: 0.2s;
  text-transform: capitalize;
  font-weight: 600;

  & + & {
    margin-left: 8px;
  }

  &:hover {
    color: #111;
    border: 1px solid #111;
  }

`;
export default RelatedKeywords;
