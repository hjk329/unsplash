import React from 'react';
import styled from 'styled-components';
import {IconArrowLeft, IconArrowRight} from "../../../icons";


const ScrollMenu = ({data=[], renderItem}) => {
    return (
        <Container>
            <Button className={'left'}>
                <IconArrowLeft/>
            </Button>
            <Track className={"Track"}>
                {
                    data.map((item, index) => renderItem(item))
                }
            </Track>
            <Button className={'right'}>
                <IconArrowRight/>
            </Button>
        </Container>
    )
}

const Container = styled.div`
  flex: 1;
  position: relative;
  overflow: hidden;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: 200px;
    pointer-events: none;

  }

  &::before {
    left: 0;
    background: linear-gradient(270deg, hsla(0, 0%, 100%, 0) 0, #fff 90%, #fff);
  }

  &::after {
    right: 0;
    background: linear-gradient(90deg, hsla(0, 0%, 100%, 0) 0, #fff 90%, #fff);
  }
`;


const Track = styled.div`
  display: flex;
  overflow-x: auto;
`;

const Button = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  z-index: 200;
  cursor: pointer;

  &.left {
    left: 0;
  }

  &.right {
    right: 0;
  }
`;
export default ScrollMenu;