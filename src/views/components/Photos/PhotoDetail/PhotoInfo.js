import React from 'react';
import styled from 'styled-components';


const PhotoInfo = ({views, downloads}) => {
    return (
        <Container>
            <InfoItem>
                <Title>Views</Title>
                <Content>{views.toLocaleString('ko-KR') || '--'}</Content>
            </InfoItem>

            <InfoItem>
                <Title>Downloads</Title>
                <Content>{downloads.toLocaleString('ko-KR') || '--'}</Content>
            </InfoItem>

            <InfoItem>
                <Title>Featured in</Title>
                <Content>Editorial</Content>
            </InfoItem>
        </Container>
    )
}

const Container = styled.div`
  display: flex;

`;

const InfoItem = styled.div`
  width: 160px;
  margin-right: 24px;
`;

const Title = styled.div`
  font-size: 14px;
  color: #767676;
  font-weight: 400;
  margin-bottom: 8px;
  
`;

const Content = styled.div`
  font-size: 15px;
  color: #111;
  font-weight: 600;
`;
export default PhotoInfo;