import React from 'react';
import styled from 'styled-components';
import {Link, useParams} from "react-router-dom";
import cn from 'classnames'

import {IconCollections, IconPhotos, IconUsers} from "../../../../icons";


const Nav = () => {

    const {category, query} = useParams()

    return (
        <Container>
            <NavLink to={`/search/photos/${query}`}
            className={cn({isActive : category === 'photos'})}
            >
                <IconPhotos/>
                photos
            </NavLink>
            <NavLink to={`/search/collections/${query}`}
                     className={cn({isActive : category === 'collections'})}
            >
                <IconCollections/>
                collections
            </NavLink>
            <NavLink to={`/search/users/${query}`}
                     className={cn({isActive : category === 'users'})}
            >
                <IconUsers/>
                users
            </NavLink>
        </Container>
    )
}

const Container = styled.div`
  display: flex;

`;

const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  color: #767676;
  font-size: 14px;
  font-weight: 400;
  height: 56px;
  text-transform: capitalize;
  transition: 0.2s;
  border-bottom: 2px solid transparent;

  & + & {
    margin-left: 32px;
  }

  &:hover,
  &.isActive {
    color: #111;

    svg {
      fill: #111;
    }
  }

  &.isActive {
    border-bottom-color : #111;
  }

  svg {
    width: 18px;
    height: 18px;
    fill: #d1d1d1;
    margin-right: 8px;
    transition: 0.2s;
  }
`;
export default Nav;