import React, { useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import PhotoByIdContainer from './PhotoByIdContainer';
import PhotoSection from '../components/Photos/PhotoSection';
import Tags from '../components/shared/Tags';
import PhotoRelatedContainer from './PhotoRelatedContainer';
import RelatedCollectionsContainer from './RelatedCollectionsContainer';
import { ContentContainer } from '../components/shared/Layout/Layout.Styled';
import { Action } from '../../redux/photos/redux';

const PhotoContainer = () => {
  const { id } = useParams()
  const tags = useSelector((state) => state.photos.photoById.tags)

  const dispatch = useDispatch();

  const getPhotoById = useCallback(() => {
    dispatch(Action.Creators.getPhotoPage(id))
  }, [])
  useEffect(() => {
    getPhotoById()
  }, [getPhotoById])

  return (
    <Container>
      <ContentContainer>
        <PhotoByIdContainer />
        <PhotoSection title="Related Tags">
          <Tags tags={tags} />
        </PhotoSection>
        <PhotoSection title="Related Photos">
          <PhotoRelatedContainer />
        </PhotoSection>
        <PhotoSection title="Related Collections">
          <RelatedCollectionsContainer />
        </PhotoSection>
      </ContentContainer>

    </Container>
  )
}

const Container = styled.div`

`;
export default PhotoContainer;
