import React from 'react';
import styled from 'styled-components';
import {useSelector} from "react-redux";

import PhotoByIdContainer from "../../containers/PhotoByIdContainer";
import PhotoRelatedContainer from "../../containers/PhotoRelatedContainer";
import Tags from "../shared/Tags";
import PhotoSection from "../Photos/PhotoSection";
import {IconClose} from "../../../icons";
import RelatedCollectionsContainer from "../../containers/RelatedCollectionsContainer";

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
                    <PhotoSection title={'Related Collections'}>
                        <RelatedCollectionsContainer/>
                    </PhotoSection>
                </Content>
            </Track>
            <Screen onClick={onClose}>
                <Button>
                    <IconClose/>
                </Button>
            </Screen>
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
  cursor: zoom-out;
`;

const Track = styled.div`
  padding: 50px 0 120px;
  width: 86vw;
  height: 100%;
  overflow-y: auto;
  margin: 0 auto;
`;

const Content = styled.div`
  background: #fff;
  padding-bottom: 80px;
`;

const Button = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  cursor: pointer;
  opacity: 0.8;
  fill: #fff;

  svg {
    fill: #fff;
    width: 24px;
    height: 24px;
  }

  &:hover {
    opacity: 1;
  }
`;
export default PhotoPopup;