import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import cn from 'classnames'

import {IconArrowLeft, IconArrowRight} from "../../../icons";


const ScrollMenu = ({data = [], renderItem}) => {

    const trackRef = useRef(null)

    const [scrollLeft, setScrollLeft] = useState(0);
    const [maxScroll, setMaxScroll] = useState(1)

    const onScroll = (e) => {
        setScrollLeft(e.target.scrollLeft)
    }
    useEffect(() => {
        if (trackRef.current) {
            setScrollLeft(trackRef.current.scrollLeft)
            setMaxScroll(trackRef.current.scrollWidth - trackRef.current.clientWidth)

        }
    }, [data])

    const start = scrollLeft > 0
    const end = scrollLeft >= maxScroll

    const onClickLeft = (e) => {
        trackRef.current.scrollLeft = Math.max(0, trackRef.current.scrollLeft - 300)
    }

    const onClickRight = (e) => {
        trackRef.current.scrollLeft = Math.min(maxScroll, trackRef.current.scrollLeft + 300)

    }

    return (
        <Container className={cn({start, end})}>
            {
                start &&
                <Button className={'left'} onClick={onClickLeft}>
                    <IconArrowLeft/>
                </Button>
            }
            <Track className={"Track"} onScroll={onScroll} ref={trackRef}>
                {
                    data.map((item, index) => renderItem(item))
                }
            </Track>
            {
                !end &&
                <Button className={'right'} onClick={onClickRight}>
                    <IconArrowRight/>
                </Button>
            }

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
    opacity: 0;
    transition: 0.2s;
  }

  &.start::before {
    opacity: 1;
  }

  &::after {
    right: 0;
    background: linear-gradient(90deg, hsla(0, 0%, 100%, 0) 0, #fff 90%, #fff);
    transition: 0.2s;
  }

  &.end::after {
    opacity: 0;
  }
`;


const Track = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
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