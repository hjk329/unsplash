import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import ScrollMenu from '../../ScrollMenu';

const TopicsLnb = ({ topics = [] }) => (
  <Container>
    <NavItem>Editorial</NavItem>

    <ScrollMenu data={topics}>
      {(item) => (
        <NavItem to={`/topics/${item.slug}`}>
          {' '}
          {item.title}
          {' '}
        </NavItem>
      )}
    </ScrollMenu>

    <NavItem>View all</NavItem>
  </Container>

)

const Container = styled.div`
  display: flex;
`;

const NavItem = styled(Link)`
  font-size: 14px;
  color: #767676;
  font-weight: 600;
  white-space: nowrap;
  padding: 0 12px;
  height: 56px;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    color: #111;
  }
`;

export default TopicsLnb;
