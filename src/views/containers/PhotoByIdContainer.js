import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import PhotoDetail from '../components/Photos/PhotoDetail';

const PhotoByIdContainer = () => {
  const photoById = useSelector((state) => state.photos.photoById)

  if (!photoById.user) return null;

  return (
    <Container>
      <PhotoDetail photoById={photoById} />
    </Container>
  )
}

const Container = styled.div`

`;

export default PhotoByIdContainer;
