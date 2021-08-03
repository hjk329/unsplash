import React from 'react';
import styled from 'styled-components';


const PhotoInfo = () => {
    return (
        <Container>
            <InfoItem>
                <Title>Views</Title>
                <Content></Content>
            </InfoItem>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
`;

const InfoItem = styled.div`
  width: 160px;
`;

const Title = styled.div`
  font-size: 14px;
  color: #767676;
`;

const Content = styled.div`
  font-size: 15px;
  color: #111;
`;
export default PhotoInfo;