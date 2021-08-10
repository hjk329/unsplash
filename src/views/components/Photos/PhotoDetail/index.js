import React from 'react';
import styled from 'styled-components';

import UserProfile from "./UserProfile";
import ActionButtons from "./ActionButtons";
import Image from "./Image";
import PhotoInfo from "./PhotoInfo";
import IconButton from "../../shared/Button/IconButton";
import {IconHeart, IconInfo, IconPlus, IconShare} from "../../../../icons";


const PhotoDetail = ({photoById}) => {
    return (
        <Container>
            <Header>
                <UserProfile user={photoById.user}/>
                <ActionButtons>
                    <IconButton icon={<IconHeart/>}/>
                    <IconButton icon={<IconPlus/>}/>
                </ActionButtons>
            </Header>
            <Image imageUrl={photoById.urls.full}/>
            <Footer>
                <PhotoInfo views={photoById.views}
                downloads={photoById.downloads}/>
                <ActionButtons>
                    <IconButton icon={<IconShare/>} text={'Share'}/>
                    <IconButton icon={<IconInfo/>} text={'Info'}/>
                </ActionButtons>
            </Footer>
        </Container>
    )
}

const Container = styled.div`

`;

const Header = styled.div`
  padding: 13px 16px;
  display: flex;
  justify-content: space-between;
  > * {
    padding: 4px;
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px;
`;
export default PhotoDetail;