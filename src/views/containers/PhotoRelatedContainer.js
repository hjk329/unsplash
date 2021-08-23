import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import PhotoList from '../components/shared/List/PhotoList';

const PhotoRelatedContainer = () => {
  const relatedPhotos = useSelector((state) => state.photos.related)

  return (
    <Container>
      <PhotoList data={relatedPhotos.results} />
    </Container>
  )
}

const Container = styled.div`

`;
export default PhotoRelatedContainer;
