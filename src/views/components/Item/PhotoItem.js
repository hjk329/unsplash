import React from 'react';
import styled from 'styled-components'

import ActionButtons from "../Photos/PhotoDetail/ActionButtons";
import IconButton from "../Button/IconButton";
import {IconHeart, IconPlus} from "../../../icons";
import AvatarInfo from "../AvatarInfo";


const PhotoItem = ({data = [], onClickItem}) => {
    return (
        <Container onClick={() => onClickItem(data.id)}>
            <Thumb>
                <img src={data.urls.regular} alt=""/>
            </Thumb>
            <Desc>
                <DescHeader className={'right'}>
                    {
                        data.sponsorship &&
                        <UserProfile>
                            <h3>{data.user.name}</h3>
                        </UserProfile>
                    }
                    <ActionButtons>
                        <IconButton icon={<IconHeart/>}/>
                        <IconButton icon={<IconPlus/>}/>
                    </ActionButtons>
                </DescHeader>

                <DescFooter>
                    <AvatarInfo
                        imageUrl={data.sponsorship ? data.sponsorship?.sponsor?.profile_image.medium : data.user.profile_image.medium}
                        name={data.sponsorship ? data.sponsorship?.sponsor?.name : data.user.name}
                        description={data.sponsorship ? data.sponsorship?.sponsor?.tagline : data.user.for_hire ? 'available for hire' : ''}
                    />
                    <ActionButtons>
                        <IconButton icon={<IconHeart/>}/>
                        <IconButton icon={<IconPlus/>}/>
                    </ActionButtons>
                </DescFooter>
            </Desc>
        </Container>
    )
}

const Container = styled.div`
  position: relative;
`;

const Thumb = styled.div`
  img {
    width: 100%;
    object-fit: cover;
  }
`;

const Desc = styled.div`
  display: flex;
  align-items: flex-end;
  padding: 20px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  transition: 0.3s;
  background: rgba(0, 0, 0, 0.3);

  &:hover {
    opacity: 1;
  }

  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    margin-right: 10px;
  }

  p {
    color: #fff;
    font-size: 13px;
  }
`;

const DescHeader = styled.div`
  position: absolute;
  top:0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  &.right {
    justify-content: flex-end;

  }
`;

const UserProfile = styled.div`

`;

const DescFooter = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;


export default PhotoItem;