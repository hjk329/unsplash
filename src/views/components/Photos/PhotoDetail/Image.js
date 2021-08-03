import React, {useState} from 'react';
import styled from 'styled-components';
import cn from 'classnames'

import {IconZoomIn, IconZoomOut} from "../../../../icons";


const Image = ({imageUrl}) => {

    const [zoom, setZoom] = useState(false);

    return (
        <Container className={cn("PhotoImage", {zoom})}>
            <ImageBox>
                <IconCtrl onClick={() => setZoom(v => !v)}>
                    {
                        zoom ? <IconZoomOut/> : <IconZoomIn/>
                    }
                </IconCtrl>
                <img src={imageUrl} alt=""/>
            </ImageBox>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const ImageBox = styled.div`
  position: relative;


  img {
    max-height: 70vh;

    .zoom & {
      max-height: unset;
    }
  }

`;

const IconCtrl = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  padding: 16px;
  cursor: pointer;

  svg {
    width: 24px;
    height: 24px;
    fill: #fff;
  }
`;

export default Image;