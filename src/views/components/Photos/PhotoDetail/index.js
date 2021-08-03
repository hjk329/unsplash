import React from 'react';
import styled from 'styled-components';

import UserProfile from "./UserProfile";
import ActionButtons from "./ActionButtons";
import Image from "./Image";
import PhotoInfo from "./PhotoInfo";


const PhotoDetail = ({photoById}) => {
    return (
        <Container>
            <Header>
                <UserProfile user={photoById.user}/>
                <ActionButtons/>
            </Header>
            <Image imageUrl={photoById.urls.regular}/>
            <Footer>
                <PhotoInfo />
            </Footer>
        </Container>
    )
}

const Container = styled.div`

`;

const Header = styled.div`
  padding: 9px 12px;
  display: flex;
  justify-content: space-between;
`;

const Footer = styled.div`

`;
export default PhotoDetail;