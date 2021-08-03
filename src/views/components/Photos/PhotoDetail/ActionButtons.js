import React from 'react';
import styled from 'styled-components';

import IconButton from "../../Button/IconButton";
import {IconHeart, IconPlus} from "../../../../icons";


const ActionButtons = () => {
    return (
        <Container>
            <IconButton icon={<IconHeart/>}/>
            <IconButton icon={<IconPlus/>}/>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #aaa;
  border-radius: 3px;
  background: rgba(255, 255, 255, 0.9);
  height: 32px;
  padding: 0 11px;
  cursor: pointer;

  &:hover {
    border-color: #111;

    svg {
      fill: #111
    }
  }

  svg {
    width: 15px;
    height: 15px;
  }
`;
export default ActionButtons;