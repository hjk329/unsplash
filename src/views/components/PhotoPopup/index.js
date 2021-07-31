import React from 'react';
import styled from 'styled-components';
import {useSelector} from "react-redux";

import PhotoByIdContainer from "../../containers/PhotoByIdContainer";
import PhotoRelatedContainer from "../../containers/PhotoRelatedContainer";
import Tags from "../Tags";
import PhotoSection from "../Photos/PhotoSection";

const PhotoPopup = ({onClose}) => {

    const tags = useSelector(state => state.photos.photoById.tags)

    return (
        <Container>
            <Track>
                <Content>
                    <PhotoByIdContainer/>
                    <PhotoSection title={'Related Tags'}>
                        <Tags tags={tags}/>
                    </PhotoSection>
                    <PhotoSection title={'Related Photos'}>
                        <PhotoRelatedContainer/>
                    </PhotoSection>
                </Content>
            </Track>
            <Screen onClick={onClose}/>
        </Container>
    )
}

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 3000;
`;

const Screen = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  background: rgba(0, 0, 0, 0.7);
`;

const Track = styled.div`
  padding-top: 50px;
  width: 86vw;
  height: 100%;
  overflow-y: auto;
  margin: 0 auto;
`;

const Content = styled.div`
  background: #fff;
`;
export default PhotoPopup;