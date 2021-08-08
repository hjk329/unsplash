import React from 'react';
import styled from 'styled-components';

import AvatarInfo from "../AvatarInfo";
import IconButton from "../Button/IconButton";
import ActionButtons from "../Photos/PhotoDetail/ActionButtons";
import {IconAddUser} from "../../../icons";
import GridList from "../List/GridList";
import UserPhotoItem from "./UserPhotoItem";


const UserItem = ({item}) => {

    const {
        name,
        profile_image,
        username,
        photos
    } = item;

    return (
        <Container>
            <AvatarInfo
                imageUrl={profile_image.large}
                name={name}
                description={username}
                size={'large'}
            />
            <ActionButtons>
                <IconButton icon={<IconAddUser/>}
                            size={18}
                />
            </ActionButtons>
            <PreviewPhotos>
                <GridList data={photos}>
                    {(item) => <UserPhotoItem/>}
                </GridList>
            </PreviewPhotos>

            <UserHeader/>
        </Container>
    )
}

const Container = styled.div`

`;

const UserHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PreviewPhotos = styled.div`
    
`;

export default UserItem;