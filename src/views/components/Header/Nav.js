import React from 'react';
import styled from 'styled-components';

import {IconDots} from "../../../icons";


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

const NavItem = styled.div`
  display: flex;
  align-items: center;
  height: 62px;
  font-size: 14px;
  color: #767676;
  font-weight: 500;
  padding: 0 12px;
`;
export default Nav;