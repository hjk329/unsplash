import React from 'react';
import styled from 'styled-components';

import {IconDots} from "../../../../icons";
import {Link} from "react-router-dom";


const Nav = () => {
    return (
        <Container>
            <NavItem>Brands</NavItem>
            <NavItem>Explore</NavItem>
            <NavItem>Blog</NavItem>
            <NavItem><IconDots/></NavItem>
        </Container>
    )
}

const Container = styled.nav`
  display: flex;
  align-items: center;
  margin: 0 30px;
`;

const NavItem = styled(Link)`
  display: flex;
  align-items: center;
  height: 62px;
  font-size: 14px;
  color: #767676;
  font-weight: 500;
  padding: 0 12px;
  transition: 0.2s;
  svg {
    fill: #767676;
  }
  
  &:hover {
    color: #111;
    svg {
      fill: #111;
    }
  }
`;
export default Nav;